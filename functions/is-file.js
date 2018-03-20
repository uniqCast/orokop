function isFile (element)
{
    return !/^.*\/$/.test(element.path)
}

module.exports = isFile
