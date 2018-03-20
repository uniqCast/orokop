const fs = require("./fs-async.js")

async function createFolder (element)
{
    console.info(`DIR  -> ${element.path}`)

    const error = await fs.mkdir(element.path)

    if (!error)
        console.info("\tFolder successfully created")
    else if (error.code === "EEXIST")
        console.info("\tFolder already exists")
    else
        console.error("\tThere was an error while creating a folder", error)
}

module.exports = createFolder
