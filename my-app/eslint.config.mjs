import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

export default [
    {
        languageOptions: { globals: globals.browser },
        plugins: { react: pluginReactConfig },
        rules: {
            "import/extensions": [
                "error",
                "ignorePackages",
                {
                    "js": "always",
                    "jsx": "always"
                }
            ],
            "no-undef": "error",
            "import/no-named-as-default": "error",
            "import/no-named-as-default-member": "error",
            "react/react-in-jsx-scope": "off",
            "react/jsx-filename-extension": [
                "error",
                { "extensions": [".jsx", ".js"] }
            ],
            "func-names": ["error", "always"]
        },
        ...compat.extends("airbnb")
    }
];