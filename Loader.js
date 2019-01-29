const { Collection } = require("discord.js");

class Loader extends Collection {
  constructor(...args) {
    this.args = args;
    this.load(this.args);
  }
  load() {
    throw new Error("You must implement Loader.load");
  reload() {
    this.clear();
    this.load(this.args);
  }
}

module.exports = Loader;
