module.exports = {
    // Specifies the ESLint parser for TypeScript
    parser: '@typescript-eslint/parser',
    
    // Extends recommended rulesets
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript'
    ],
    
    // Configuration settings
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    
    // Rules specific to your project
    rules: {
        // Example: Enforce semicolons (optional)
        'semi': ['error', 'always'],
        // Example: Allow `this` usage in custom Cucumber World
        'no-invalid-this': 'off',
        '@typescript-eslint/no-explicit-any': 'off', // Relax 'any' usage for flexibility
        // Add more custom rules here
    },
    
    // Specify environments (browser, node, etc.)
    env: {
        node: true,
        es2020: true,
    },
};