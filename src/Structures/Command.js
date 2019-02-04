class Command {
    constructor({
        name="Unnamed Command",
        description="Unnamed Command",
        type=0,
        aliases=[]
    }) {
        this.name = name;
        this.description = description;
        this.aliases = aliases;
        this.type = type;
    }
    async execute() {
        return void 0;
    }
}

module.exports = Command;