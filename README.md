# vite-plugin-manifest
> this is a vite plugin just like webpack-manifest-plugin, can genernate the assset-manifest.json on build.

## Usage

``` js
// vite.config.js / vite.config.ts
import vitePluginManifest from "vite-plugin-manifest";

export default {
  plugins: [
    vitePluginManifest({
      publicPath: "/path-of-your-project",
      fileName: "asset-manifest.json"
    })
  ]
}
```

## Options
- `publicPath` *string* the public path of the project.
- `fileName` *string* file name of asset manifest that you will genernate.
- `generate`
