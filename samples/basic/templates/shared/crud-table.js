function getFields (fields)
{
    let output = ""

    for (const key in fields)
    {
        output += `\n\t<li><strong>${key}</strong>: ${fields[key]}</li>`
    }

    return output
}

function render (settings)
{
    const template = `<h1>${settings.title}</h1>
${settings.create ? "<button>Create</button>" : ""}
<ul>${getFields(settings.fields)}
</ul>`

    return template
}

module.exports = render
