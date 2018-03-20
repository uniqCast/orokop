function createElement (key, values, options, path)
{
    const template = Array.isArray(values) ? values[0] : values.toString()

    return {
        path: path + key,
        template: `${options.templates}/${template}`,
        settings: Array.isArray(values) ? values[1] : {}
    }
}

module.exports = createElement
