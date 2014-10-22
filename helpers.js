'use strict';

function questions(defaultName) {
  return [
    {
      type: 'input',
      name: 'name',
      message: 'What\'s the name of your project?',
      default: defaultName
    },
    {
      type: 'input',
      name: 'version',
      message: 'What\'s the version of your project?',
      default: '0.1.0'
    },
    {
      type: 'checkbox',
      name: 'environment',
      message: 'Which environments would you like to support?',
      choices: [
        {
          name: 'Browser',
          checked: true
        },
        {
          name: 'Node.js'
        }
      ],
      default: 0
    },
    {
      type: 'expand',
      name: 'git',
      message: 'Are you going to use Git?',
      choices: [
        {
          key: 'y',
          name: 'Yes',
          value: true
        },
        {
          key: 'n',
          name: 'No',
          value: false
        }
      ],
      default: 0
    },
    {
      type: 'expand',
      name: 'bower',
      message: 'Would you like to use Bower?',
      choices: [
        {
          key: 'y',
          name: 'Yes',
          value: true
        },
        {
          key: 'n',
          name: 'No',
          value: false
        }
      ],
      default: 0
    },
    {
      type: 'expand',
      name: 'karma',
      message: 'Would you like to use Karma?',
      choices: [
        {
          key: 'y',
          name: 'Yes',
          value: true
        },
        {
          key: 'n',
          name: 'No',
          value: false
        }
      ],
      default: 0
    },
    {
      type: 'expand',
      name: 'sass',
      message: 'Would you like to use sass?',
      choices: [
        {
          key: 'y',
          name: 'Yes',
          value: true
        },
        {
          key: 'n',
          name: 'No',
          value: false
        }
      ],
      default: 1
    }
  ];
};

function globs(answers) {
  var src = [__dirname + '/templates/**'];

  if (!answers.git) {
    src.push('!' + __dirname + '/templates/.gitignore');
  }

  if (!answers.bower) {
    src.push(
      '!' + __dirname + '/templates/.bowerrc',
      '!' + __dirname + '/templates/bower.json');
  }

  if (!answers.karma) {
    src.push('!' + __dirname + '/templates/karma.conf.js');
  }

  if (!answers.sass) {
    src.push('!' + __dirname + '/templates/sass');
  } else {
    src.push('!' + __dirname + '/templates/css');
  }

  return src;
};

module.exports = {
  globs: globs,
  questions: questions
};
