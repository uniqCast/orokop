#!/usr/bin/env node

const package = require("./package.json")
const createFolder = require("./functions/create-folder.js")
const isFile = require("./functions/is-file.js")
const isFolder = require("./functions/is-folder.js")
const iterateTree = require("./functions/iterate-tree.js")
const mergeOptions = require("./functions/merge-options.js")
const parseArguments = require("./functions/parse-arguments.js")
const readStructure = require("./functions/read-structure.js")
const writeAllowed = require("./functions/write-allowed.js")
const writeFile = require("./functions/write-file.js")

console.info(`Orokop v${package.version}\n`)

const defaults = {
    output: "output",
    templates: "templates",
    soft: true
}

const arguments = parseArguments(process.argv.slice(2), process.cwd())
const structure = readStructure(arguments.structure)

if (structure === null) process.exit(0)

const options = mergeOptions(
    defaults,
    structure.options,
    arguments.options,
    process.cwd()
)

createFolder({ path: options.output })
iterateTree(structure.structure, options, forEachElement)

async function forEachElement (element, settings)
{
    if (isFolder(element))
    {
        await createFolder(element)
    }
    else if (isFile(element) && await writeAllowed(element, options))
    {
        await writeFile(element, settings)
    }
}
