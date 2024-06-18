# Excuses de Dev - Backend

## How to start ?

This project runs fully on _docker_ and _docker-compose_. To start it, just use the command below at the project root :
```shell
docker-compose -p excuses_de_dev_back -f docker/docker-compose.yml up -d
```

## How to use ?

The app is available at `localhost:7777`.

Four routes are available in this service :
* `/health` : return a basic json to make sure that the project is running
* `/all` : return all excuses
* `/random` : return a random excuse
* `/{code}` : return the specified code or an empty response if it doesn't exist 
