module.exports = {
    ClientUtil: require("./ClientUtil"),
    codeBlock: (text, { type="full", lang } = {}) =>
            (type==="full"?"```":"`") + (lang?lang:"") +
            "\n" +
            text +
            (type==="full"?"```":"`")
}