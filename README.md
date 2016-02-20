# eslint-config

[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[david-dm-url]:https://david-dm.org/satazor/eslint-config
[david-dm-image]:https://img.shields.io/david/satazor/eslint-config.svg
[david-dm-dev-url]:https://david-dm.org/satazor/eslint-config#info=devDependencies
[david-dm-dev-image]:https://img.shields.io/david/dev/satazor/eslint-config.svg

My own [eslint](http://eslint.org/) configurations.


## Installation

`$ npm install --save-dev @satazor/eslint-config`


## Usage

First you need to choose the **base** configuration to use:

- `es5` - The configuration to be used in ECMAScript 5 based projects
- `es6` - The configuration to be used in ECMAScript 6 based projects

Then enhance it with one or more **addons**:

- `browser` - If you are going to develop code for the browser (having in mind IE >= 9)
- `node` - If you are going to develop code for NodeJS
- `node-v4-es6` - If you are going to develop code for NodeJS 4.x.x with the `es6` base configuration
- `es6-modules` - If you are going to use ES6 import & export (must be used with the `es6` base configuration)
- `react` - If you are going to use React and JSX (requires `eslint-plugin-react`)

Finally, simply create a `.eslintrc.json` file with the chosen base configuration and addons. Feel free to override rules you won't agree with. You can look at some examples bellow.

Alternatively, you can make your own configuration by using the set of **rules** individually. If you're interested in doing that, you can check `es5.js` to see how it is done.


### Examples

Cutting edge ES6 with modules in the browser, using react:

```json
{
    "root": true,
    "extends": [
        "@satazor/eslint-config/es6",
        "@satazor/eslint-config/addons/es6-modules",
        "@satazor/eslint-config/addons/browser",
        "@satazor/eslint-config/addons/react"
    ]
}
```

Cutting edge ES6 with modules in NodeJS (requires babel or similar):

```json
{
    "root": true,
    "extends": [
        "@satazor/eslint-config/es6",
        "@satazor/eslint-config/addons/es6-modules",
        "@satazor/eslint-config/addons/node"
    ]
}
```

Use ES6 in NodeJS without any transpiler:

```json
{
    "root": true,
    "extends": [
        "@satazor/eslint-config/es6",
        "@satazor/eslint-config/addons/node"
    ]
}
```

.. and if you are programming against NodeJS v4 please use:

```json
{
    "root": true,
    "extends": [
        "@satazor/eslint-config/es6",
        "@satazor/eslint-config/addons/node"
        "@satazor/eslint-config/addons/node-v4-es6"
    ]
}
```


Good old ES5 in NodeJS:

```json
{
    "root": true,
    "extends": [
        "@satazor/eslint-config/es5",
        "@satazor/eslint-config/addons/node"
    ]
}
```

Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `eslint` performance because no more file lookups need to be done.


## File name convention

If your file exports a single class, your filename should be exactly the name of the class. For other cases, the name of the file should be the same as the default exports (prefer camelCase).


## License

[MIT License](http://opensource.org/licenses/MIT)
