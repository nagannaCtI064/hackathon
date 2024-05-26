const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "util": require.resolve("util/"),
      "zlib": require.resolve("browserify-zlib"),
      "stream": require.resolve("stream-browserify")
    }
  },
  node: {
    global: true,
    fs: 'empty', // Add this line
    net: 'empty', // Add this line
    tls: 'empty', // Add this line
  }
};
