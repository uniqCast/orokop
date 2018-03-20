const allowedOptions = {
    "-o": "output",
    "--output": "output",
    "-t": "templates",
    "--templates": "templates",
    "-s": "soft",
    "--soft": "soft"
}

function parseArguments (raw, basePath)
{
    const arguments = {
        options: {},
        structure: `${basePath}/structure.orokop.js`
    }

    for (const argument of process.argv.slice(2))
    {
        if (/^--/.test(argument) || /^-/.test(argument))
        {
            [name, value] = argument.split(/[ =]/)

            if (allowedOptions[name] !== undefined)
            {
                arguments.options[allowedOptions[name]] = value.trim()
            }
        }
        else
        {
            const structure = argument.trim()

            if (structure.startsWith("/"))
            {
                arguments.structure = structure
            }
            else
            {
                arguments.structure = `${basePath}/${structure}`
            }
        }
    }

    if (arguments.options.soft)
    {
        arguments.options.soft = arguments.options.soft === 'true'
    }

    return arguments
}

module.exports = parseArguments
