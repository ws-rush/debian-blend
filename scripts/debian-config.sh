#!/usr/bin/env bash

# Configure the APT repositories used by the Debian Blend live image on an
# already-installed Debian system.

set -euo pipefail

if (( EUID != 0 )); then
    echo "This script must run as root (for example: sudo $0)." >&2
    exit 2
fi

if [[ ! -r /etc/os-release ]]; then
    echo "Cannot identify the operating system." >&2
    exit 1
fi
# shellcheck disable=SC1091
. /etc/os-release
if [[ ${ID:-} != debian && ${ID_LIKE:-} != *debian* ]]; then
    echo "This script supports Debian and Debian-based systems only." >&2
    exit 1
fi

install -d -m 0755 /etc/apt/sources.list.d /etc/apt/preferences.d

# Keep the repository setup in sync with config/archives/*.chroot.  Do not
# remove /etc/apt/sources.list: installed systems may have third-party
# repositories there, and deleting them without a backup is destructive.
cat > /etc/apt/sources.list.d/debian-blend.list <<'EOF'
# Debian Blend repositories (managed by debianPkgMngr.sh)
deb http://deb.debian.org/debian/ testing main contrib non-free non-free-firmware
deb http://security.debian.org/ testing-security main contrib non-free non-free-firmware
EOF

cat > /etc/apt/sources.list.d/debian-blend-kernel.list <<'EOF'
# Debian Blend kernel and firmware repositories
deb http://deb.debian.org/debian/ stable main contrib non-free non-free-firmware
deb http://deb.debian.org/debian/ stable-updates main contrib non-free non-free-firmware
deb http://deb.debian.org/debian/ oldstable main contrib non-free non-free-firmware
EOF

cat > /etc/apt/preferences.d/debian-blend <<'EOF'
Package: *
Pin: release a=testing
Pin-Priority: 700

Package: *
Pin: release a=sid
Pin-Priority: 650

Package: *
Pin: release a=stable
Pin-Priority: 600

Package: *
Pin: release a=oldstable
Pin-Priority: 600

Package: linux-* firmware-*
Pin: release a=stable
Pin-Priority: 950
EOF

# Remove obsolete files written by older versions of this script.  The names
# are specific to the old script and cannot contain a user's repositories.
rm -f /etc/apt/sources.list.d/distro.list \
      /etc/apt/sources.list.d/kernel.list \
      /etc/apt/preferences.d/distro \
      /etc/apt/preferences.d/kernel

dpkg --add-architecture i386
apt-get update

# Copy only the per-user Flatpak remote configuration and signing keys.
# This does not install Flatpak or configure a system-wide remote.
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
SOURCE_REPO="$SCRIPT_DIR/data/flatpak-repo"
FLATPAK_FILES=(config flathub.trustedkeys.gpg flathub-beta.trustedkeys.gpg)

for file in "${FLATPAK_FILES[@]}"; do
    if [[ ! -f "$SOURCE_REPO/$file" ]]; then
        echo "Missing Flatpak source file: $SOURCE_REPO/$file" >&2
        exit 1
    fi
done

copy_flatpak_files() {
    local destination=$1

    install -d -m 0755 "$destination"
    for file in "${FLATPAK_FILES[@]}"; do
        install -m 0644 "$SOURCE_REPO/$file" "$destination/$file"
    done
}

# Configure every regular non-root account that has an existing home
# directory. System accounts are skipped to avoid writing into paths such as
# /usr/sbin or /bin, which may appear as their nominal home directories.
while IFS=: read -r username uid _gid _gecos home _shell; do
    if [[ $username == root || ! $uid =~ ^[0-9]+$ || $uid -lt 1000 || \
        $home == / || $home == /nonexistent || ! -d $home ]]; then
        continue
    fi

    user_repo="$home/.local/share/flatpak/repo"
    copy_flatpak_files "$user_repo"
    chown -R "$username":"$(id -gn "$username")" "$home/.local/share/flatpak"
done < <(getent passwd)

# /etc/skel is copied into home directories created by adduser/useradd.
copy_flatpak_files /etc/skel/.local/share/flatpak/repo
chown -R root:root /etc/skel/.local

echo "Debian Blend repositories, i386 support, and per-user Flatpak files configured."
