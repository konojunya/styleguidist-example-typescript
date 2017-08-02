const path = require('path');

process.noDeprecation = true;

module.exports = {
  showUsage: true,
  showCode: false,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  highlightTheme: 'material',
  getComponentPathLine: componentPath => {
    const name = path.dirname(componentPath).match(/.*\/(.*)$/);
    const dir = path.dirname(componentPath);
    return `import ${name[1]} from '${dir}';`;
  },
  getExampleFilename: componentPath => path.dirname(componentPath) + "/README.md",
  sections: [
    { name: 'Atoms', components: './src/components/atoms/**/index.tsx' }
  ],
  template: './styleguide/template.ejs',
  dangerouslyUpdateWebpackConfig: (webpackConfig, env) => {
    webpackConfig.output.filename = 'build/bundle.js'
    return webpackConfig;
  },
  webpackConfig: require('./styleguide/config'),
  styleguideComponents: {
		Logo: path.join(__dirname, 'styleguide/components/Logo.jsx'),
  }
}
