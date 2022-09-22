import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "./dist/index.es.js",
        format: "es",
        exports: "named",
      },
      { file: "./dist/index.js", format: "cjs" },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      dts(),
      external(),
      resolve(),
    ],
  },
];
