const TypeDoc = require('typedoc')
const { inputFiles, out } = require('./typedoc.json')
const app = new TypeDoc.Application()
app.options.addReader(new TypeDoc.TSConfigReader())
app.options.addReader(new TypeDoc.TypeDocReader())
app.bootstrap({
	mode: 'modules',
	logger: 'none',
	target: 'ES5',
	module: 'CommonJS',
	experimentalDecorators: true
})

const files = app.expandInputFiles(inputFiles)
const project = app.convert(files)
app.generateDocs(project, out)
