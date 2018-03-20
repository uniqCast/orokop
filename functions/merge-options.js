function mergeOptions (defaults, structure, arguments, basePath)
{
    const options = Object.assign(defaults, structure, arguments)

    if (!options.output.startsWith("/"))
        options.output = `${basePath}/${options.output}`

    if (!options.output.endsWith("/"))
        options.output = options.output.concat("/")

    if (!options.templates.startsWith("/"))
        options.templates = `${basePath}/${options.templates}`

    return options
}

module.exports = mergeOptions
