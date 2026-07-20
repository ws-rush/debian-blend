

# Remove Unneeded packages
sudo apt purge firefox-* libreoffice-* shotwell gnome-sound-recorder evince gnome-tweaks gnome-terminal file-roller *mozc* *anthy* -y
sudo apt autoremove -y
# Install the core GNOME packages
sudo apt update -y
sudo apt install gnome-shell-extension-manager gnome-software-plugin-flatpak epiphany-browser papers gnome-console -y

# system full upgrade
sudo apt update && sudo apt upgrade -y && sudo apt full-upgrade -y && sudo apt autoremove -y

# install supportive tools
sudo apt install podman distrobox flatpak unrar-free -y