#!/bin/bash

# Shell Utility Toolkit - v1.0
# Author: YourName

show_menu() {
    echo "=============================="
    echo "     SHELL UTILITY TOOLKIT"
    echo "=============================="
    echo "1. System Info"
    echo "2. Disk Usage"
    echo "3. Top 5 Memory Processes"
    echo "4. Cleanup Temp Files"
    echo "5. Backup a Folder"
    echo "6. Exit"
}

while true; do
    show_menu
    read -p "Enter your choice [1-6]: " choice

    case $choice in
        1)
            echo "System Info:"
            uname -a
            echo
            ;;
        2)
            echo "Disk Usage:"
            df -h
            echo
            ;;
        3)
            echo "Top 5 Memory Processes:"
            ps aux --sort=-%mem | head -n 6
            echo
            ;;
        4)
            echo "Cleaning temp files..."
            rm -rf /tmp/*
            echo "Done."
            ;;
        5)
            read -p "Enter source folder path: " src
            read -p "Enter backup destination: " dest
            tar -czf "$dest/backup_$(date +%F).tar.gz" "$src"
            echo "Backup completed."
            ;;
        6)
            echo "Exiting..."
            break
            ;;
        *)
            echo "Invalid choice! Try again."
            ;;
    esac
done
