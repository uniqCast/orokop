# Orokop

*Generate files and folders based on the structure definition and file templates.*


## File Structure
Structure definition is stored in a single Node.js module which exports two
separate objects.

```js
/**
 * File Structure
 *
 * Object key can represent a 'path/' or a 'filename'.
 *
 * = 'main.js' file will be created from 'index.js' template
 * = 'users/users.js' file will be created from 'users/component.js' file with
 *    values from #settings object
 * = 'users/users.html' file will be created from 'shared/page.js' file with
 *    values from #settings object which are overwritten by values in an array
 *    object
 */
const structure = {
    "main.js": "index.js",
    "users/": {
        "#settings": {
            title: "Users"
        },
        "users.js": "users/component.js",
        "users.html": ["shared/crud-table.js", {
            title: "List of users",
            create: true,
            fields: {
                uid: "string",
                active: "boolean"
            }
        }]
    }
}

/**
 * Options
 *
 * = output, relative or absolute path to the output directory
 * = templates, relative or absolute path to the templates
 * = soft, boolean representing whether to skip existing files
 */
const options = {
    output: "app",
    templates: "templates",
    soft: true
}

module.exports = { structure, options }
```

Presented structure will generate following files and folders inside the `app`
directory:
- main.js
- users/
    - users.js
    - users.html


## Templates
Orokop uses Node.js environment for writing templates. Each template is a module
which exports `render` function.

Render function can have an optional object argument with specific template
settings.

```js
/* Basic template */
function render ()
{
    const template = `<h1>Halo!</h1>`

    return template
}

module.exports = render

/* Template with settings argument */
function render (settings)
{
    const template = `<h1>Halo ${ settings.name }!</h1>`

    return template
}

module.exports = render
```


## Usage
Orokop is intended to be used as a CLI tool which can be installed via NPM.

```bash
# Installation
npm install -g orokop

# Generate structure from file "structure.orokop.js" in the working directory
$ orokop

# Explicitly set path to structure file
$ orokop path/to/structure.orokop.js

# If present, arguments will overwrite default and structure options
$ orokop <path-to-structure-file>
-o, --output, relative or absolute path to the output directory
-t, --templates, relative or absolute path to the templates
-s, --soft, boolean representing whether to skip existing files
```


## Future
- Dynamically define file structure


## License
MIT
