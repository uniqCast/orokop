function isFolder (element)
{
    return /^.*\/$/.test(element.path)
}

module.exports = isFolder
