function babelConfig(api) {
  if (api) {
    api.cache(false);
  }

  const presets = ["module:metro-react-native-babel-preset"];

  return {
    presets,
  };
}

module.exports = babelConfig;
