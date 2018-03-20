const structure = {
    "#settings": {
        heading: "Vladislav's Website",
        copyright: "&copy; Vladislav Beefheart 2018."
    },
    "index.html": ["page.js", {
        title: "Homepage",
        text: "Welcome to my virtual space!"
    }],
    "about.html": ["page.js", {
        title: "About Myself",
        text: "My name is Vladislav and I do software."
    }],
    "projects.html": ["page.js", {
        title: "Projects",
        text: "Here you can see list of my projects."
    }]
}

const options = {
    output: "website",
    templates: "templates",
    soft: true
}

module.exports = { structure, options }
