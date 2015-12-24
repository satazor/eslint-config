'use strict';

module.exports = {
    'extends': [
        '../rules/react',
    ].map(require.resolve),
    'plugins': [
        'react',
    ],
    'ecmaFeatures': {
        'jsx': true,
    },
};
