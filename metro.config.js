const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Exclude `.svg` from asset extensions
  config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');

  // Include `.svg` in source extensions
  config.resolver.sourceExts.push('svg');

  return config;
})();
