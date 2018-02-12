const {Asset} = require('parcel-bundler')
const glslify = require('glslify')
// const Debug = require('debug');

// const debug = Debug("parcel-plugin-glsl:GlslifyAsset");

class GlslifyAsset extends Asset {
  constructor (name, pkg, options) {
    super(name, pkg, options)
    this.type = 'js'
  }
  generate () {
    return {
      js: `module.exports = \`${JSON.stringify(glslify(this.contents, {inline: true}))}\``
    }
  }
}

module.exports = GlslifyAsset
