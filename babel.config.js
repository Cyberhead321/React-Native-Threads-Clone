module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // remove 'plugins' entry if it only contained 'expo-router/babel'
    plugins: [
      // other plugins if you have any
    ],
  };
};
