const { Collection } = require("discord.js");

class Loader extends Collection {
    constructor(filenames, cwd=null) {
        super();
        this.filenames = filenames;
        this.cwd = cwd;
        this.load();
    }
    load() {
        this.filenames.map(file => {
            const path = require.resolve(file, this.cwd ? { paths: [this.cwd] } : null);
            const Cmd = require(path);
            return new Cmd();
        }).forEach(command => {
            this.set(command.name, command);

            for (alias of command.aliases) {
                this.set(alias, command);
            }
        });
    }
}

module.exports = Loader;