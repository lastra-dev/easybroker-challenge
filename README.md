<div align="center">
  <img src="https://i.imgur.com/wyh42Sr.png" alt="app icon" height="120">  

  ## **EasyBroker's real estate agency website challenge**

  GoodHouse is a simple real estate website using api.stagingeb.com
  <br>
  👍 [Checkout the documentation](https://lastra-dev.github.io/easybroker-challenge/)
  <br>
  💻 [Test the app](https://goodhouse.lastradev.com)
</div>

## Features

* 🏘️ Properties Catalog.
* 🏠 Property overview.
* 💌 Contact the owner.
* 🚀 Material Design.
* 🎨 Dark mode.
* 🤓 Documented.
* 😍 Tested.
* 🐋 Built with Docker.

## Screenshots

![Project images](https://i.imgur.com/6UQtn9x.png)

## Building from Source

### Client

1. If you don't have npm installed, please visit the official [npm site](https://www.npmjs.com/package/npm).
2. Fetch the latest source code from the master branch.

```bash
$ git clone https://github.com/lastra-dev/easybroker-challenge.git
```

3. Install npm packages and run the app:

```bash
$ cd easybroker-challenge/client
$ npm install --location=global react-scripts@latest
$ npm install
$ npm start
```

The client will be served at http://localhost:3000

Note: The client won't display information without the server.

### Server

You can run the server with the [Dart SDK](https://dart.dev/get-dart)
like this:

```bash
$ cd easybroker-challenge/server
$ dart pub get
$ dart run
Server listening on port 8080
```

The server will be served at http://localhost:8080

## Run with Docker :whale:

Alternatively you can run a pre-built [docker](https://docs.docker.com/) image:

```bash
$ curl -o docker-compose.yml https://raw.githubusercontent.com/lastra-dev/easybroker-challenge/main/docker-compose.yml
$ docker-compose up -d
```
The client will be served at http://localhost:3000 and the server will be served at http://localhost:8080

