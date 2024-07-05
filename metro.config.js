
// expo v41: 
// remove the @ (see: https://blog.expo.io/expo-sdk-41-12cc5232f2ef)
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.nodeModulesPaths = [
  ...defaultConfig.resolver.nodeModulesPaths,
  path.resolve(__dirname, "modules"),
];

module.exports = (async () => {
  const {
    transformer,
    resolver: { sourceExts, assetExts, ...resolver },
    ...config
  } = defaultConfig;
  return {
    ...config,
    transformer: {
      ...transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      ...resolver,
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();