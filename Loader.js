const { Collection } = require("discord.js");

class Loader extends Collection {
    constructor(filenames) {
        super();
        this.filenames = filenames;
        this.load();
    }
    load() {
        this.filenames.map(file => new (require(file))())
            .forEach(command => {
                
                this.set(command.name, command);

                for (alias of command.aliases) {
                    this.set(alias, command);
                }
            });
    }
}

module.exports = Loader;