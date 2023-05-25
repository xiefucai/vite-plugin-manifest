import { PluginOption } from 'vite';

declare type Options = {
    fileName: string;
    publicPath: string;
    generate?: (bundle: unknown) => unknown;
};
declare function vitePluginManifest(buildOptions: Options): PluginOption;

export { vitePluginManifest as default };
