/**
 * Created by rosawa on 7/14/14.
 */
module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                options: {
                    targetDir: 'src/lib',
                    layout: 'byComponent'
                }
            }
        },

        clean: {
            build: ['build'],
            dev: {
                src: ['build/app.js', 'build/<%= pkg.name %>.css', 'build/<%= pkg.name %>.js']
            }
        },

        browserify: {
            vendor: {
                src: ['src/lib/**/*.js'],
                dest: 'build/vendor.js',
                options: {
                    shim: {
                        jquery: {
                            path: 'src/lib/js/jquery/jquery.js',
                            exports: '$'
                        },
                        underscore: {
                            path: 'src/lib/js/underscore/underscore.js',
                            exports: '_'
                        },
                        backbone: {
                            path: 'src/lib/js/backbone/backbone.js',
                            exports: 'Backbone',
                            depends: {
                                underscore: 'underscore'
                            }
                        }
                    }
                }
            },
            app: {
                files: {
                    'build/app.js': ['src/scripts/main.js']
                },
                options: {
                    external: ['jquery', 'underscore', 'backbone']
                }
            },
            test: {
                files: {
                    'build/tests.js': ['src/spec/**/*.test.js']
                },
                options: {
                    external: ['jquery', 'underscore', 'backbone']
                }
            }
        }
    });

    grunt.registerTask('init', ['clean', 'bower']);
    grunt.registerTask('build:dev', ['clean:dev', 'browserify:app', 'browserify:test']);
};
