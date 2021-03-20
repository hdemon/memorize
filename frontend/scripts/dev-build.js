require("esbuild").buildSync({
  entryPoints: ["./src/index.js"],
  bundle: true,
  loader: {
    ".png": "dataurl",
    ".svg": "text",
    ".js": "jsx",
  },
  define: {
    "process.env.NODE_ENV": '"development"',
  },
  sourcemap: true,
  outfile: "../dist/frontend.js",
});
