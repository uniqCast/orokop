const structure = {
    "main.js": "index.js",
    "users/": {
        "#settings": {
            title: "Users"
        },
        "users.js": "users/component.js",
        "users.html": ["shared/crud-table.js", {
            title: "List of users",
            create: true,
            fields: {
                uid: "string",
                active: "boolean"
            }
        }]
    }
}

const options = {
    output: "output",
    templates: "templates",
    soft: false
}

module.exports = { structure, options }
