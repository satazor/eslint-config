// filenames plugin - https://github.com/selaux/eslint-plugin-filenames

'use strict';

module.exports = {
    'plugins': [
        'filenames',
    ],
    'rules': {
        // Enforce dashed filenames
        'filenames/filenames': [2, '^[a-z0-9\\-\\.]+$'],
    },
};
