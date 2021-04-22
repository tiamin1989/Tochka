const presets = [
    ['@babel/env', {
      targets: {
        edge: '17',
        ie: '11',
        firefox: '87',
        chrome: '89',
        safari: '13'
      },
      useBuiltIns: "entry"
    }]
  ];
  
  module.exports = { presets }; 