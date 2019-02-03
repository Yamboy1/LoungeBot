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
            const path = require.resolve(file, cwd ? { paths: cwd } : null);
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