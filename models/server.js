const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.routes();
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("Hello World");
    });
  }

  lsten() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = server;
