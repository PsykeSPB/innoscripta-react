## About

This application is solution to Innoscripta GmbH 'Pizza task'.
Here you will find source code of the front-end React application.

[This](https://tikhoplav-innoscripta-pizza.herokuapp.com) is the demo of deployed application using [Heroku](https://heroku.com) and [RemoteMySql](https://remotemysql.com/).

## Deployment

### Local with Docker

The recommended way to test application in the local environment is to build and serve it with Docker.
Prerequisites:

1. [DockerEngine](https://docs.docker.com/install/)
2. [DockerCompose](https://docs.docker.com/compose/install/)

After cloning this prepository configure `docker-compose.yml` file using [Laravel Server](https://github.com/PsykeSPB/innoscripta-laravel) URL:

```
version: "3.7"

services:
  app:
    image: node:alpine
    working_dir: /home/app
    volumes:
      - .:/home/app
    ports:
      - 8080:8080
    environment:
      - REACT_APP_API_URL=%paste laravel server api url here%
    command: ["yarn", "start"]
```

If you've deployed Laravel Server locally, this is how variable going to look like:

```
REACT_APP_API_URL=http://localhost:8000/api
```

Make sure you have configured this variable, because it is crucial for application workflow.

After that run sequience of commands:

```
docker-compose app yarn install
docker-compose app yarn run build
docker-compose up
```

This will raise up express server, and application will be available at `http://localhost:8080/`.

### Local native

If you refuse to use Docker, this is the way you could deploy nativly.
Prerequisites:

1. [Node 13.5](https://nodejs.org/en/download/)
2. [Yarn 1.21](https://yarnpkg.com/lang/en/docs/install/#debian-stable)

First of all update dependencies using Yarn, `cd` into app root directory and simply run:

```
yarn install
```

Next, let's set up env variable for server api. Create `.env` file in the root directory of application
With next content:

```
REACT_APP_API_URL=%paste laravel server api url here%
```

If you've deployed Laravel Server locally, this is how variable going to look like:

```
REACT_APP_API_URL=http://localhost:8000/api
```

After that you should compile react application with webpack, to do so run:

```
yarn run build
```

That will create a `dist` folder inside root directory where application bundles is stored.

To run application you may use:

```
node index.js
```

Inside root directory of application. This makes application available at `http://localhost:8000/`.
