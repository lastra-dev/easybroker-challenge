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

Alternatively, you can run a pre-built [docker](https://docs.docker.com/) image:

```bash
$ curl -o docker-compose.yml https://raw.githubusercontent.com/lastra-dev/easybroker-challenge/main/docker-compose.yml
$ docker-compose up -d
```
The client will be served at http://localhost:3000 and the server will be served at http://localhost:8080

## Notes

For design decisions, at first, I named classes Property, Properties, and Contact so I could design methods that I could read better. The objective was to read code as if I was reading English prose, so I had methods like Properties.fromPage() or Property.fromId(), but then I ran into some trouble when I decided to create model classes.

Model classes are like entities. I had to change class names fetching data because that's what they were representing, not a class entity but a data source.

So now, Property became PropertyData, Properties became PropertiesData and Contact became ContactRequest (It is still clean to read PropertyData.fromId). Contact differs because I wasn't getting data from the contact request I was instead sending data.

On the server, I separated every API endpoint into a single file and exported them through a barrel export file. As a result, I could keep concerns separated and also have a lower dependency import amount.

I think the code could be cleaner in some components like PropertyPage and NavBar since they contain multiple HTML tags. I would extract some of them into individual components.

If I had more time, I would work on creating an error system to handle exceptions better. Also, if the project were getting complex, I would implement a state management solution.

I mainly tested business logic, however, if I had more time, I could test React components.

I would very much like feedback! 😀 What decisions would make my project better? Is there a better approach? Can you spot some mistakes? I hope you liked it!

## Troubles

If the client can't reach the server that means you need to change the [API](client/src/services/api.js) baseURL. 
