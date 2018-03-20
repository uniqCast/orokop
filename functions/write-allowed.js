const fs = require("./fs-async.js")

async function writeAllowed (element, options)
{
    const allowed = !(await fs.fileExists(element.path) && options.soft)

    if (!allowed)
    {
        console.info(`Skip -> ${element.path}`)
    }

    return allowed
}

module.exports = writeAllowed
