const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve");
const postcss = require("rollup-plugin-postcss");
const path = require("node:path");
const typescript = require("rollup-plugin-typescript2");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: path.resolve(__dirname, "dist/index.esm.js"),
        format: "esm",
        sourcemap: true,
      },
      {
        file: path.resolve(__dirname, "dist/index.cjs.js"),
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss({ modules: true }),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: ["react", "react-dom"],
  },
];
