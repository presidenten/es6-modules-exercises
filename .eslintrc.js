module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'no-param-reassign': 0,
    'no-mixed-operators': 0,
    'no-unused-vars': 1,
    'no-plusplus': 0,
    'no-console': 0,
    'prefer-template': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'class-methods-use-this': 0,

    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals:{
    describe: true,
    fdescribe: true,
    xdescribe: true,
    beforeEach: true,
    afterEach: true,
    it: true,
    fit: true,
    xit: true,
    expect: true,
    spyOn: true,
    jest: true
  }
}
