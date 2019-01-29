class Command {
    constructor({
        name,
        description,
        executeArgs
    }) {
        this.name = name;
        this.description = description;

        this.execute(executeArgs)
    }
    execute(...args) {
        throw Error("You must implement Command.execute");
    }
}