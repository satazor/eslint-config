'use strict';

module.exports = {
    'extends': [
        './es5',
        './rules/es6',
    ].map(require.resolve),
    'env': {
        'es6': true,
    },
    'ecmaFeatures': {
        'modules': true,
    },
    'rules': {
        // rule to control usage of strict mode directives
        // comment: code inside es6 modules is under strict mode by default, so it's not necessary
        'strict': 0,
    },
};
