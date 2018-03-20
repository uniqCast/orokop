function getHeader (settings)
{
    return `<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>${settings.heading}</title>
    </head>
    <body>
        <header>
            <h1>${settings.heading}</h1>
            <nav>
                <ul>
                    <li><a href="index.html">Homepage</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="about.html">About</a></li>
                </ul>
            </nav>
        </header>`
}

function getContent (settings)
{
    return `
        <main>
            <h2>${settings.title}</h2>
            <p>${settings.text}</p>
        </main>`
}

function getFooter (settings)
{
    return `
        <footer>
            <p>${settings.copyright}</p>
        </footer>
    </body>
</html>`
}

function render (settings)
{
    return getHeader(settings) + getContent(settings) + getFooter(settings)
}

module.exports = render
