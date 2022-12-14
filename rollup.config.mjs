import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const production = !process.env.ROLLUP_WATCH;


export default {
    input: 'index.ts',
    output: {
        dir: 'dist',
        name: 'bearby.react',
        sourcemap: true,
        format: 'es'
    },
    external: ['react'],
    plugins: [
        resolve(),
        typescript({
            sourceMap: true,
            declaration: true,
            inlineSources: true
        }),
        peerDepsExternal({
            includeDependencies: true
        }),
        commonjs()
    ],
};
