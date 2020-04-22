const TypeDoc = require('typedoc')
const { promises: fs } = require('fs')
const path = require('path')
const config = require('./typedoc.json')

const docsPath = path.join(__dirname, 'docs')
const docsReadmePath = path.join(docsPath, 'README.md')

const main = async () => {
	await fs.rmdir(docsPath, { recursive: true });

	const app = new TypeDoc.Application()
	app.options.addReader(new TypeDoc.TSConfigReader())
	app.bootstrap(config)

	const files = app.expandInputFiles(config.inputFiles)
	const project = app.convert(files)
	app.generateDocs(project, config.out)

	await fs.unlink(docsReadmePath)
}

main()
