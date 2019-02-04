module.exports = {
    ClientUtil: require("./ClientUtil"),
    codeBlock: (text, options) => {
        const { type="full", lang } = options;

        return `
            ${type==="full"?"```":"`"}${lang?lang:""}
            ${text.replace("`", "\`")}
            ${type==="full"?"```":"`"}
        `
    }
}