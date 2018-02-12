module.exports = function (bundler) {
  bundler.addAssetType('glsl', require.resolve('./src/GlslifyAsset.js'))
}
