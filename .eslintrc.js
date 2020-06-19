/* eslint-disable no-undef */
module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
    },
    plugins: [
        "@typescript-eslint",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    rules: {
        "indent": ["error", 4],
        "no-trailing-spaces": "error",
        "eol-last": ["error", "always"],
        "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0, maxBOF: 0 }],
        "semi": ["error", "always"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-var-requires": "off",
    },
};
