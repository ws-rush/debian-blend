# Debian Live Build Project

This project contains the configuration for building a custom Debian Live ISO based on Debian Testing with GNOME.

## Prerequisites

Before you begin, ensure you have the necessary tools installed on your Debian-based system.

```bash
sudo apt install -y live-build debootstrap git qemu-system-x86 qemu-utils genisoimage xorriso squashfs-tools curl wget
```

## Project Setup

If you are setting up this project for the first time or need to re-initialize the configuration:

```bash
lb config --distribution testing \
    --archive-areas "main contrib non-free non-free-firmware" \
    --linux-packages "linux-image" \
    --debian-installer-gui true \
    --debian-installer live
```

## Customization

### Adding Packages
To add or remove packages, edit the package list file:
`config/package-lists/desktop.list.chroot`

Add the names of the packages you want to install, one per line.

## Package Caching

To speed up subsequent builds and avoid re-downloading packages, you can use `apt-cacher-ng`.

### 1. Install apt-cacher-ng

```bash
sudo apt install apt-cacher-ng
sudo systemctl enable --now apt-cacher-ng
```

### 2. Configure Live Build

Configure `live-build` to use the local proxy:

```bash
lb config --apt-http-proxy "http://localhost:3142/"
```

## Building the Image

To build the ISO image, run:

```bash
sudo lb build
```

This process will take some time as it downloads packages and constructs the filesystem. The final ISO will be generated in the current directory (e.g., `live-image-amd64.hybrid.iso`).

## Testing the Image

You can test the generated ISO using QEMU without rebooting your machine.

```bash
qemu-system-x86_64 -m 4G -enable-kvm -cdrom live-image-amd64.hybrid.iso
```

*   **-m 4G**: Allocates 4GB of RAM to the virtual machine.
*   **-enable-kvm**: Uses KVM virtualization for better performance.
*   **-cdrom**: Specifies the ISO file to boot from.

## Rebuilding and Updating

If you need to rebuild the image (e.g., to update packages or apply configuration changes), you **must** clean the workspace first.

**Step 1: Clean previous build artifacts**
```bash
sudo lb clean --all
```

**Step 2: Regenerate configuration**
This step is crucial after cleaning to restore necessary state files.
```bash
lb config
```

**Step 3: Build again**
```bash
sudo lb build
```

> **Note:** Since this distribution is based on **Debian Testing**, rebuilding will automatically fetch the latest versions of all packages from the repositories.

## Troubleshooting

### "Target is busy" Error during Build
If the build fails with an error like `umount: .../chroot/proc: target is busy`, it means a process is still holding the filesystem open.

**Fix:**

1. **Force Unmount:**
   ```bash
   sudo umount -l chroot/proc
   sudo umount -l chroot/sys
   ```

2. **Clean and Rebuild:**
   ```bash
   sudo lb clean --all
   lb config
   sudo lb build
   ```

## Resources

- https://live-team.pages.debian.net/live-manual/
- https://debian-install-notes.pages.dev/netinstall/live-build
- https://gitlab.com/bitspur/community/linux-factory
- https://debian-live-config.readthedocs.io/en/latest/custom.html