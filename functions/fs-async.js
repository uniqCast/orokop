const fs = require("fs")

async function fileExists (path)
{
    return new Promise((resolve, reject) =>
    {
        if (!path)
        {
            return resolve(false)
        }

        fs.open(path, "r", (error, fd) =>
        {
            if (error !== null && error.code === "ENOENT")
            {
                return resolve(false)
            }
            else if (error !== null)
            {
                return reject(false)
            }

            return resolve(true)
        })
    })
}

async function mkdir (path)
{
    return new Promise((resolve, reject) =>
    {
        fs.mkdir(path, "0777", error =>
        {
            if (error) resolve(error)

            resolve(false)
        })
    })
}

async function writeFile (path, data)
{
    return new Promise((resolve, reject) =>
    {
        fs.writeFile(path, data, "utf8", error =>
        {
            if (error) resolve(error)

            resolve(false)
        })
    })
}

module.exports = {
    fileExists,
    mkdir,
    writeFile
}
