module.exports = {
    ClientUtil: require("./ClientUtil"),
    codeBlock: (text, { type, lang } = { type: "full" }) =>
            (type==="full"?"```":"`") + (lang?lang:"") +
            "\n" +
            text +
            (type==="full"?"```":"`")
}