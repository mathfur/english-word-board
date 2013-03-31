'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'routes/index.js': ['routes/index.coffee'],
          'routes/words.js': ['routes/words.coffee'],
          'app.js': ['app.coffee'],
        },
      }
    },
    watch: {
      scripts: {
        files: ['**/*.coffee'],
        tasks: ['coffee'],
        options: {
          nospawn: true
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', './**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', [ 'jshint' ]);
};
