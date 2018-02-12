# parcel-plugin-glslify

Import `.glsl` files as strings and [glslify](https://github.com/glslify/glslify) transform with [parcel](https://github.com/parcel-bundler/parcel).

## Install

The plugin need [node](https://nodejs.org/en/) >= 8

```
// Node package later
npm i -s https://github.com/GuilhemBarboux/parcel-plugin-glslify.git
```

## How to use

```js
import { ShaderMaterial } from 'three';
import vertexShader from './vert-shader.glsl';
import fragmentShader from './frag-shader.glsl';

export function CustomShaderMaterial() {

  return new ShaderMaterial({
    uniforms: { ... },
    vertexShader,
    fragmentShader,
  });

}
```

## Sources

Glsl support with parcel :
- https://github.com/hi-zhaolei/parcel-plugin-glsl
- https://github.com/seep/parcel-plugin-glsl