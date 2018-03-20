const fs = require("./fs-async.js")

async function writeFile (element, settings)
{
    settings = Object.assign(settings, element.settings)

    console.info(`File -> ${element.path}`)

    const template = require(element.template)
    const error = await fs.writeFile(element.path, template(settings))

    if (!error)
    {
        console.info("\tFile successfully created")
    }
    else
    {
        console.error("\tThere was an error while writing a file", error)
    }
}

module.exports = writeFile
