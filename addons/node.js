'use strict';

module.exports = {
    'env': {
        'node': true,
    },
    'ecmaFeatures': {
        'modules': false,
    },
    'rules': {
        // disallow use of debugger
        // comment: debugger statements in NodeJS should never be committed nor
        //                    go to production
        'no-debugger': 2,
        // rule to control usage of strict mode directives
        // comment: require "use strict" because we are not using es6 modules
        'strict': [2, 'global'],
    },
};
