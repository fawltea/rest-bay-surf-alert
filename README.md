# rest-bay-surf-alert

## Dockerfile

To build the container locally

```
docker build --no-cache -t porthcawl-surf .
```

Run the container locally (and remove it once exited)

```
docker run --rm -it porthcawl-surf
```

## Docker Compose

```
docker-compose -f docker-compose.dev.yml build --no-cache
docker-compose -f docker-compose.dev.yml up
```
