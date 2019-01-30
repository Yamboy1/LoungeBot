class Loader {
    constructor(filenames) {
        this.filenames = filenames;
        this.load();
    }
    load() {
        this.fileNames.map(file => new (require(file))())
            .forEach(command => {
                
                this.set(command.name, command);

                for (alias of command.aliases) {
                    this.set(alias, command);
                }
            });
    }
}