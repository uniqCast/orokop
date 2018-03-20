const createElement = require("./create-element.js")
const isFolder = require("./is-folder.js")

async function iterateTree (structure, options, processElement, path, settings)
{
    path = path || options.output
    settings = settings || {}

    const folders = {}

    for (const key in structure)
    {
        if (key.startsWith("#"))
        {
            settings = Object.assign(settings, structure[key])
            continue
        }

        const element = createElement(key, structure[key], options, path)

        if (!element.template)
        {
            console.error(`Template not defined for "${key}"`)
            continue
        }

        if (element) await processElement(element, settings)

        if (isFolder(element)) folders[key] = structure[key]
    }

    for (const folder in folders)
    {
        await iterateTree(folders[folder], options, processElement, path + folder, settings)
    }
}

module.exports = iterateTree
