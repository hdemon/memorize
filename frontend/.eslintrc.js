module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    // https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/src/index.js
    "plugin:react-hooks/recommended",
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    // ESLint の組み込みルールに対する公 式推奨の共有設定 eslint:recommended から TypeScript の一般的な文法とバッティングするルールを 調整するための共有設定。
    "plugin:@typescript-eslint/recommended",
    // 型情報が必要な基本ルールを詰め込んだもの
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    // plugin:@typescript-eslint/recommended-requiring-type-checking のために指定
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "import", "jsx-a11y"],
  rules: {
    // tsxで 'React' was used before it was defined no-use-before-define とwarningされてしまう不具合への対処
    "no-use-before-define": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // eslint-config-airbnbではjsxだけ許可されているのでtsxも追加
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react-hooks/exhaustive-deps": "error",

    // "react-jsx" を使っているのでいらない
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",

    // "airbnb"で "import/extentions"がerrorとして報告されるようになっているが、
    // js, jsx, ts, tsxは拡張子を省略する前提にしているので無効にする。
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  // Prop TypesはTypeScriptを使うので不要
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
