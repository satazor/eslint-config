// eslint - ECMAScript6

'use strict';

module.exports = {
    'rules': {
        // require braces in arrow function body
        'arrow-body-style': 0,
        // require parens in arrow function arguments
        'arrow-parens': [2, 'always'],
        // require space before/after arrow function's arrow
        'arrow-spacing': [2, { 'before': true, 'after': true }],
        // verify super() callings in constructors
        'constructor-super': 2,
        // enforce the spacing around the * in generator functions
        'generator-star-spacing': [2, { 'before': true, 'after': true }],
        // disallow modifying variables of class declarations
        'no-class-assign': 2,
        // disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': 0,
        // disallow modifying variables that are declared using const
        'no-const-assign': 2,
        // disallow duplicate name in class members
        'no-dupe-class-members': 2,
        // disallow duplicate module imports
        'no-duplicate-imports': 2,
        // disallow use of the new operator with the Symbol object
        'no-new-symbol': 2,
        // disallow to use this/super before super() calling in constructors.
        'no-this-before-super': 1,
        // disallow unnecessary constructor
        'no-useless-constructor': 2,
        // require let or const instead of var
        'no-var': 2,
        // require method and property shorthand syntax for object literals
        'object-shorthand': [2, 'always'],
        // suggest using arrow functions as callbacks
        'prefer-arrow-callback': 2,
        // suggest using of const declaration for variables that are never modified after declared
        'prefer-const': 2,
        // suggest using Reflect methods where applicable
        'prefer-reflect': 0,
        // suggest using the rest parameters instead of arguments
        'prefer-rest-params': 2,
        // suggest using the spread operator instead of .apply()
        'prefer-spread': 2,
        // suggest using template literals instead of strings concatenation
        'prefer-template': 1,
        // disallow generator functions that do not have yield
        'require-yield': 1,
        // enforce spacing around embedded expressions of template strings
        'template-curly-spacing': [2, 'never'],
        // enforce spacing around the * in yield* expressions
        'yield-star-spacing': [2, { 'before': true, 'after': false }],
    },
};
