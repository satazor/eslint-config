'use strict';

module.exports = {
    'extends': [
        './rules/best-practices',
        './rules/errors',
        './rules/filenames',
        './rules/node',
        './rules/strict',
        './rules/style',
        './rules/variables',
    ].map(require.resolve),
    'env': {},
    'ecmaFeatures': {},
    'globals': {},
    'rules': {},
};
