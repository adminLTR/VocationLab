#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    # Set environment based on command line argument or default to development
    if len(sys.argv) > 1 and sys.argv[1] == 'runserver' and '--production' in sys.argv:
        os.environ.setdefault('DJANGO_ENV', 'production')
        sys.argv.remove('--production')
    else:
        os.environ.setdefault('DJANGO_ENV', 'development')
    
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
