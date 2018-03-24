const fs = require("./fs-async.js")

function isAsync (fn)
{
    return fn.constructor.name === "AsyncFunction"
}

async function writeFile (element, settings)
{
    settings = Object.assign(settings, element.settings)

    console.info(`File -> ${element.path}`)

    const render = require(element.template)
    const result = isAsync(render) ? await render(settings) : render(settings)
    const error = await fs.writeFile(element.path, result)

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
