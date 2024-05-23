const commands = {
    info: {
        command: "/info",
        description: "Informações do rôbo",
        regex: new RegExp(`\/*(info|sobre)`, "i"),
    },
    help: {
        command: "/help",
        description: "Como usar",
        // regex: new RegExp(`\/${specialKey}\w*(help|ajuda|socorro)`, "i"),
        regex: new RegExp(`\/*(help|ajuda|socorro)`, "i"),
    },
    phrase: {
        command: "/phrase",
        description: "Retorna frase aleatória",
        regex: new RegExp(`\/*(phrase|frase)`, "i"),
    },
    greetings: {
        command: "/greetings",
        description: "Diga olá",
        regex: new RegExp(`\/*(saudações|oi|ola|hi)`, "i"),
    },
    group: {
        command: "/grupo",
        description: "Entrar no grupo da aula",
        regex: new RegExp(`\/*(grupo)`, "i"),
    }
};

module.exports = commands