module.exports = {
  helpers: {
    escape: function(value) {
      return value.replace(/'/g, '&apos;');
    },
    join_choices: function (value) {
      if(typeof value === 'object') {
        var keys = Object.keys(value);
        return keys.join(',');
      } else {
        throw 'Unknown value type in join_choices';
      }
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'Column Five Nuxt.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
    cssFramework: {
      type: 'list',
      message: 'Choose a CSS Framework',
      required: false,
      choices: [{
        name: 'None'
      }, {
        name: 'Bulma',
        value: 'bulma' // See if this can be an object to pass into package.json to get the version #s
      }, {
        name: 'Bootstrap SASS',
        value: 'bootstrap-sass'
      }, {
        name: 'Bootstrap Vue',
        value: 'bootstrap-vue'
      }, {
        name: 'Bourbon Neat',
        value: 'bourbon-neat'
      }, {
        name: 'Flexbox Grid',
        value: 'flexboxgrid2'
      }]
    },
    libs: {
      type: 'checkbox',
      message: 'Additional Libraries',
      choices: [{
        name: 'ScrollMagic + GSAP (ks-vue-scrollmagic)',
        value: 'ks-vue-scrollmagic'
      }]
    },
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
