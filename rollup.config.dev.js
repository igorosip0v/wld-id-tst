import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import nodePolyfills from "rollup-plugin-polyfill-node";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import image from "@rollup/plugin-image";

const globals = {
  "js-sha3": "sha3",
  "@ethersproject/bytes": "bytes",
  "react/jsx-runtime": "jsxRuntime",
  "react-dom": "ReactDOM",
  react: "react",
};

export default [
  {
    input: "src/index-dev.tsx",
    output: {
      file: "dev/index.js",
      format: "esm",
      globals,
      exports: "named",
      sourcemap: true,
    },
    plugins: [
      commonjs(),
      nodePolyfills(),
      image(),
      resolve({ browser: true }),
      typescript({ tsconfig: "./tsconfig.json", inlineSources: true }),
      serve({
        open: true,
        host: "localhost",
        port: 3000,
        onListening(server) {
          const address = server.address();
          const host = address.address === "::" ? "localhost" : address.address;
          // by using a bound function, we can access options as `this`
          const protocol = this.https ? "https" : "http";
          console.log(
            `Server listening at ${protocol}://${host}:${address.port}/`
          );
        },
      }),
      livereload({ watch: "dev" }),
    ],
  },
];
