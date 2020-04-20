const TypeDoc = require('typedoc');

const app = new TypeDoc.Application();

// If you want TypeDoc to load tsconfig.json / typedoc.json files
app.options.addReader(new TypeDoc.TSConfigReader());
app.options.addReader(new TypeDoc.TypeDocReader());

app.bootstrap({
    mode: 'modules',
    logger: 'none',
    target: 'ES5',
    module: 'CommonJS',
    experimentalDecorators: true
});

const files = app.expandInputFiles(['src']);
// console.log(files)
const project = app.convert(files);
console.log(project)

if (project) { // Project may not have converted correctly
    const outputDir = 'docs';

    // Rendered docs
    const result = app.generateDocs(project, outputDir);
    console.log("done", result)
}