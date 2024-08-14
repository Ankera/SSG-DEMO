// webpack-string-replace-plugin.js
class StringReplacePlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('StringReplacePlugin', (compilation, callback) => {
      const { search, replace } = this.options;
      compilation.chunks.forEach(chunk => {
        chunk.files.forEach(filename => {
          let source = compilation.assets[filename].source();
          if (typeof source === 'string') {
            source = source.replace(new RegExp(search, 'g'), replace);
            compilation.assets[filename] = {
              source: () => source,
              size: () => source.length
            };
          }
        });
      });
      callback();
    });
  }
}

module.exports = StringReplacePlugin;
