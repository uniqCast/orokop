function readStructure (path)
{
    try
    {
        const structure = require(path)

        console.info(`Structure: "${path}"\n`)

        return structure
    }
    catch (error)
    {
        console.error(`Could not open structure "${path}"\n${error}\n`)

        return null
    }
}

module.exports = readStructure
