const conf = require('./gulp.conf');

module.exports = function () {
  return {
    port: process.env.PORT,
    server: {
      baseDir: [
        conf.paths.dist
      ]
    },
    open: false
  };
};
