#!/bin/bash
set -e
npm run typeorm migration:run -- -d src/datasource
exec "$@"
