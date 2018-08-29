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
      'default': 'Nuxt.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
    libs: {
      type: 'checkbox',
      message: 'Additional Libraries',
      choices: [{
        name: 'GreenSock',
        value: 'gsap'
      }, {
        name: 'ScrollMagic + ks-vue-scrollmagic',
        value: 'scrollmagic'
      }]
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
