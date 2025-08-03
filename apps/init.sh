#!/bin/bash

# Exit on any error
set -e

echo "Starting the Smart Home Sensor API..."
echo "Building and starting containers..."
docker-compose up --build -d

echo "Waiting for services to be ready..."
# Wait for PostgreSQL to be ready
for i in {1..30}; do
  if docker exec smarthome-postgres pg_isready -U postgres > /dev/null 2>&1; then
    echo "PostgreSQL is ready!"
    break
  fi
  echo "Waiting for PostgreSQL to start... ($i/30)"
  sleep 1
done

# Check if PostgreSQL is ready
if ! docker exec smarthome-postgres pg_isready -U postgres > /dev/null 2>&1; then
  echo "Error: PostgreSQL did not start within the expected time."
  exit 1
fi

echo "Waiting for temperature-api to be ready..."
for i in {1..30}; do
  if curl -s http://localhost:8082/health > /dev/null 2>&1; then
    echo "temperature-api is ready!"
    break
  fi
done

if ! curl -s http://localhost:8082/health > /dev/null 2>&1; then
  echo "Error: temperature-api did not start within the expected time."
  exit 1
fi

echo "Init database..."
docker exec -i smarthome-postgres psql -U postgres -d postgres < ./smart-home/init.sql

echo "All services are up and running!"
echo "The API is available at http://localhost:8080"
echo ""
echo "To view logs, run: docker-compose logs -f"
echo "To stop the services, run: docker-compose down"