module.exports = {
    ClientUtil: require("./ClientUtil"),
    codeBlock: (text, { type="full", lang }) =>
        `
            ${type===full?"```":"`"}${lang?lang:""}
            ${text.replace("`", "\`")}
            ${type===full?"```":"`"}
        `
}