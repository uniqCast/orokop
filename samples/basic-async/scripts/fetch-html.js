const http = require("http")


async function fetchHTML (settings)
{
    const url = settings.url

    return new Promise((resolve, reject) =>
    {
        http.get(url, response =>
        {
            response.setEncoding("utf8")

            let output = ""

            response.on("data", data => { output += data })
            response.on("end", () => { resolve(output) })
        }).on("error", error =>
        {
            console.error(`Error: ${ error.message }`, error)
            resolve("")
        })
    })
}


module.exports = fetchHTML
