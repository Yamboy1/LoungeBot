class Loader {
    constructor(filenames) {
        this.filenames = filenames;
        this.load();
    }
    load() {
        this.filenames.map(file => new (require(file))())
            .forEach((command) => {
                const { name, aliases } = command;
                
                this.set(name, command);

                for (alias of aliases) {
                    this.set(alias, command);
                }
            });
    }
}