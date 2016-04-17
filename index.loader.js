module.exports = function() {
};

module.exports.pitch = function (remainingRequest) {

  // Webpack 1.7.3 uses this.resourcePath. Leaving in remaining request for possibly older versions
  // of Webpack
  var configFilePath = this.resourcePath || remainingRequest;
  this.cacheable(true);

  if (!configFilePath || configFilePath.trim() === '') {
    var msg = 'You specified the animate-css-webpack with no configuration file. Please specify' +
      ' the configuration file, like: \'animate-css-webpack!./animate-css.config.js\' or use' +
      ' require(\'animate-css-webpack\').';
    console.error('ERROR: ' + msg);
    throw new Error(msg);
  }

  var config = require(configFilePath);
  var styleLoader = config.styleLoader || 'style-loader!css-loader';

  var styleLoaderCommand = 'require(' + JSON.stringify('-!' + styleLoader + '!' +
      require.resolve('./animate-css-styles.loader.js') + '!' + configFilePath) + ');';
  return styleLoaderCommand;
};
