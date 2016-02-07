/* global module */

module.exports = function(grunt) {

    var path = require('path');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            options: {
                transform: [require('grunt-react').browserify]
            },
            IoTApp: {
                src: ['src/js/app.js'],
                dest: 'www/app.js',
                options: {
                    watch: true
                }
            },
        },

        watch: {
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['dev_tasks']
            },
            app: {
                files: ['src/js/**/*'],
                tasks: ['dev_tasks']
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('dev_tasks', ['browserify']);
    grunt.registerTask('dev', ['dev_tasks', 'watch']);
    grunt.registerTask('build', ['dev_tasks']);
    grunt.registerTask('default', ['dev']);
};
