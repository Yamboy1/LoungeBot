class Command {
    constructor({
        name="Unnamed Command",
        description="Unnamed Command",
        aliases=[]
    }) {
        this.name = name;
        this.description = description;
        this.aliases = aliases;
    }
    async execute() {
        return void 0;
    }
}

module.exports = Command;