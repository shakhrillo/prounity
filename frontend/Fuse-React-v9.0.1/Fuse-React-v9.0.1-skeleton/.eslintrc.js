module.exports = {
    "root": true,
    "parser": '@typescript-eslint/parser',
    "parserOptions": {
        "tsconfigRootDir": __dirname,
        "project": ['./tsconfig.json']
    },
    "plugins": [
        "@typescript-eslint",
        "prettier",
        "unused-imports",
    ],
    "extends": [
        "airbnb",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        }
    },
    "ignorePatterns": [
        "src/app/main/documentation/material-ui-components/components/**",
        "src/app/main/documentation/material-ui-components/pages/**"
    ],
    "rules": {
        "prettier/prettier": [
            "warn",
            {
                "endOfLine": "auto",
                "arrowParens": "always",
                "bracketSpacing": true,
                "jsxBracketSameLine": false,
                "printWidth": 120,
                "proseWrap": "preserve",
                "requirePragma": false,
                "semi": true,
                "singleQuote": true,
                "tabWidth": 4,
                "trailingComma": "none",
                "useTabs": true,
                "singleAttributePerLine": true
            }
        ],
        "quotes": [
            1,
            "single",
            {
                "allowTemplateLiterals": true,
                "avoidEscape": true
            }
        ],
        // Disabling because this rule is extremely slow.
        "import/no-cycle": "off",
        // Disabling because this rule is slow and not a common violation.
        "import/no-named-as-default": "off",
        // Disabling because this rule is slow and not a common violation.
        "import/no-named-as-default-member": "off",
        // This rule is already covered by the TypeScript compiler.
        "import/default": "off",
        // This rule is already covered by the TypeScript compiler.
        "import/no-unresolved": "off",
        "operator-linebreak": "off",
        "no-param-reassign": "off",
        "implicit-arrow-linebreak": "off",
        "max-len": "off",
        "indent": "off",
        "no-shadow": "off",
        "arrow-parens": "off",
        "no-confusing-arrow": "off",
        "no-use-before-define": "off",
        "object-curly-newline": "off",
        "function-paren-newline": "off",
        "import/prefer-default-export": "off",
        "max-classes-per-file": "off",
        "react/jsx-filename-extension": "off",
        "import/extensions": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
        ],
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/require-await": "off",
        "no-useless-constructor": "off",
        "no-tabs": "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-wrap-multilines": "off",
        "react/prop-types": "warn",
        "react/require-default-props": "off",
        "react/no-unescaped-entities": "off",
        "no-underscore-dangle": "off",
        "react/jsx-no-bind": "off",
        "react/jsx-props-no-spreading": "off",
        "react/no-array-index-key": "off",
        "no-restricted-exports": ["off", { "restrictedNamedExports": ["default"] }],
    },
}
