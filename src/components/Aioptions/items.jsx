export const array = [
    {

        name: "Q&A",
        id: "ask your queries here",
        description: "ask your queries here",
        type: {
            model: "text-davinci-003",
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["###"],
        },

    },
    {

        name: "text to command",
        id: "text2command",
        description: "This feature helps you to translate text into programmatic commands.",
        type: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.2,
            presence_penalty: 0.0,
            stop: ["\n"],
        },
    },
    {

        name: "ML/AI language model tutor.",
        id: "ML/AI language model tutor.",
        description: "This is a QA-style chatbot that answers questions about language models.",
        type: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ["You:"],
        },
    },
    {

        name: "English to other languages",
        id: "eng2other",
        description: "This feature helps you to translates English text into other languages.",
        type: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
    {

        name: "Explain code",
        id: "explainCode",
        description: "Explain a complicated piece of code.",
        type: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\"\"\""],
        },
    },
    {

        name: "Calculate Time Complexity",
        id: "calTime",
        description: "This feature helps you to explain the time complexity given code.",
        type: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        },
    },
    {

        name: "Notes to summary",
        id: "notes2summary",
        description: "This feature helps you to give a summary from a given notes.",
        type: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
    {
        name: "Create study notes",
        id: "createNotes",
        description: "This feature helps you to give create notes.",
        type: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
];