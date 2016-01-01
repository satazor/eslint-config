// react plugin - https://github.com/yannickcr/eslint-plugin-react

'use strict';

module.exports = {
    'plugins': [
        'react',
    ],
    'ecmaFeatures': {
        'jsx': true,
    },
    'rules': {
        // prevent missing displayName in a React component definition
        'react/display-name': 0,
        // forbid certain propTypes (forbid-prop-types)
        'react/forbid-prop-types': 0,
        // enforce boolean attributes notation in JSX
        'react/jsx-boolean-value': [2, 'never'],
        // validate closing bracket location in JSX
        'react/jsx-closing-bracket-location': [2, 'line-aligned'],
        // enforce or disallow spaces inside of curly braces in JSX attributes
        'react/jsx-curly-spacing': 0,
        // enforce event handler naming conventions in JSX
        'react/jsx-handler-names': 2,
        // validate props indentation in JSX
        'react/jsx-indent-props': [2, 4],
        // detect missing key prop
        'react/jsx-key': 1,
        // limit maximum of props on a single line in JSX
        'react/jsx-max-props-per-line': 0,
        // no .bind() or Arrow Functions in JSX Props
        'react/jsx-no-bind': 2,
        // prevent duplicate props in JSX
        'react/jsx-no-duplicate-props': 0,
        // prevent usage of unwrapped JSX strings
        'react/jsx-no-literals': 0,
        // disallow undeclared variables in JSX
        'react/jsx-no-undef': 2,
        // enforce PasalCase for user-defined JSX components
        'react/jsx-pascal-case': 2,
        // enforce propTypes declarations alphabetical sorting
        'react/jsx-sort-prop-types': 0,
        // enforce props alphabetical sorting
        'react/jsx-sort-props': 0,
        // prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 2,
        // prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 2,
        // prevent usage of dangerous JSX properties
        'react/no-danger': 0,
        // prevent usage of deprecated methods
        'react/no-deprecated': 1,
        // prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': [2, 'allow-in-func'],
        // prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': [2, 'allow-in-func'],
        // prevent direct mutation of this.state
        'react/no-direct-mutation-state': 1,
        // prevent usage of isMounted
        'react/no-is-mounted': 2,
        // prevent multiple component definition per file
        'react/no-multi-comp': 2,
        // prevent usage of setState
        'react/no-set-state': 1,
        // prevent usage of unknown DOM property
        'react/no-unknown-property': 2,
        // require ES6 class declarations over React.createClass
        'react/prefer-es6-class': [2, 'always'],
        // prevent missing props validation in a React component definition
        'react/prop-types': 2,
        // prevent missing React when using JSX
        'react/react-in-jsx-scope': 2,
        // restrict file extensions that may be required
        'react/require-extension': 0,
        // prevent extra closing tags for components without children
        'react/self-closing-comp': 2,
        // enforce component methods order
        'react/sort-comp': [2, {
            'order': [
                'lifecycle',
                '/^on.+$/',
                '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                'everything-else',
                '/^render.+$/',
                'render',
            ],
        }],
        // prevent missing parentheses around multilines JSX
        'react/wrap-multilines': [2, {
            'declaration': true,
            'assignment': true,
            'return': true,
        }],
    },
};
