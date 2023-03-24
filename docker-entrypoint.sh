#!/bin/bash -e

# shellcheck source=/dev/null
source venv/bin/activate && ./deploy.sh "$VERSION" && python3 ./db/manage.py migrate

exec "$@"
