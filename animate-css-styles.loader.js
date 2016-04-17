var styles = require('./animate-css.config.js');

function flattenConfig(config) {
    var stylesConfig = config.styles;
    var directories = Object.keys(stylesConfig);
    var flatConfig = {};
    directories.forEach(function(directory) {
      Object.keys(stylesConfig[directory]).forEach(function(file) {
        flatConfig[`${directory}/${file}`] = stylesConfig[directory][file];
      });
    });
    config.styles = flatConfig;
    return config;
}

module.exports = function(content) {
    this.cacheable(true);
    var config = flattenConfig(this.exec(content, this.resourcePath));
    var start = "@import          \"~animate.css/source/_base.css\";\n";
    var allStyles = flattenConfig(styles);

    source = start + Object.keys(allStyles.styles).filter(function(style) {
            return config.styles[style];
        }).map(function(style) {
                return "@import \"~animate.css/source/" + style + ".css\";";
            }).join("\n");
    return source;
};

