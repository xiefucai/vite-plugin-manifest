var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => vitePluginManifest
});
module.exports = __toCommonJS(src_exports);
var import_path = __toESM(require("path"));
var import_fs = __toESM(require("fs"));
function vitePluginManifest(buildOptions) {
  let outDir, manifests;
  return {
    name: "vite-plugin-manifest",
    enforce: "pre",
    apply: "build",
    config(config, { command }) {
      var _a;
      outDir = (_a = config.build) == null ? void 0 : _a.outDir;
    },
    configResolved(resolvedConfig) {
    },
    configureServer(server) {
    },
    transformIndexHtml(html) {
    },
    handleHotUpdate({ file, server }) {
    },
    options(options) {
    },
    buildStart(options) {
    },
    resolveId(source, importer, options) {
    },
    load(id) {
    },
    transform(code, id) {
    },
    buildEnd(...args) {
    },
    outputOptions(options) {
    },
    renderStart(outputOptions, inputOptions) {
    },
    augmentChunkHash(chunkInfo) {
    },
    renderChunk(code, chunk, options) {
      return null;
    },
    generateBundle(options, bundle, isWrite) {
    },
    async writeBundle(options, bundle) {
      if (buildOptions.generate) {
        manifests = await buildOptions.generate(bundle);
      } else {
        manifests = {};
        manifests.files = Object.keys(bundle).reduce((data, name) => {
          data[name] = import_path.default.join(buildOptions.publicPath || "", name).replaceAll(import_path.default.sep, "/");
          return data;
        }, {});
        manifests.entrypoints = Object.keys(bundle).filter((name) => bundle[name].isEntry);
      }
    },
    closeBundle() {
      const outputPath = import_path.default.join(outDir || "", buildOptions.fileName);
      import_fs.default.writeFileSync(outputPath, JSON.stringify(manifests, null, "	"), "utf-8");
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
