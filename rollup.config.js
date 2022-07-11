import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import nodePolyfills from "rollup-plugin-polyfill-node";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

const globals = {
  "js-sha3": "sha3",
  "@ethersproject/bytes": "bytes",
  "react/jsx-runtime": "jsxRuntime",
  "react-dom": "reactDom",
  react: "react",
};

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "react-ts-lib",
        globals,
        exports: "named",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        globals,
        exports: "named",
      },
    ],
    plugins: [
      nodePolyfills(),
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      // terser(),
    ],
  },
  {
    input: "src/browser/index.tsx",
    output: {
      file: "dist/world-id.js",
      format: "iife",
      name: "worldID",
    },
    plugins: [
      commonjs(),
      nodePolyfills(),
      resolve({
        browser: true,
      }),
      typescript({ tsconfig: "./tsconfig.json", inlineSources: true }),
      // terser(),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
