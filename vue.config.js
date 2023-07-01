// const path = require('path');

module.exports = {
  parallel: 4,
  runtimeCompiler: true,
  configureWebpack: {
    optimization: {
      usedExports: true
    },
  },
}
