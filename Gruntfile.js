module.exports = function (grunt) {

    // Modules
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('bootcamp');

    // Grunt Tasks
    grunt.initConfig({
        dir: {
            src: 'stylesheets',
            dist: 'dist'
        },
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            dist: {
                src: [
                    // Decoder
                    '<%= dir.src %>/private/color/helpers/_from-rgb.scss',
                    '<%= dir.src %>/private/color/helpers/_from-hsl.scss',
                    '<%= dir.src %>/private/color/helpers/_from-hex.scss',
                    '<%= dir.src %>/private/color/helpers/_get-color-values.scss',
                    '<%= dir.src %>/private/color/helpers/_hex-to-dec.scss',
                    '<%= dir.src %>/private/color/_color.scss',
                    '<%= dir.src %>/private/map/_map.scss',
                    '<%= dir.src %>/private/bool/_bool.scss',
                    '<%= dir.src %>/private/string/_string.scss',
                    '<%= dir.src %>/private/list/_list.scss',
                    '<%= dir.src %>/private/number/helpers/_find-integer.scss',
                    '<%= dir.src %>/private/number/helpers/_find-digits.scss',
                    '<%= dir.src %>/private/number/helpers/_pow.scss',
                    '<%= dir.src %>/private/number/helpers/_length.scss',
                    '<%= dir.src %>/private/number/_number.scss',
                    '<%= dir.src %>/private/null/_null.scss',
                    '<%= dir.src %>/public/color/_color.scss',
                    '<%= dir.src %>/public/map/_map.scss',
                    '<%= dir.src %>/public/bool/_bool.scss',
                    '<%= dir.src %>/public/string/_string.scss',
                    '<%= dir.src %>/public/list/_list.scss',
                    '<%= dir.src %>/public/number/_number.scss',
                    '<%= dir.src %>/public/null/_null.scss'
                ],
                dest: '<%= dir.dist %>/_<%= pkg.name %>.scss',
            },
        },

        // Sass
        sass: {
            test: {
                options: {
                    style: 'expanded',
                    quiet: true,
                    loadPath: './node_modules/bootcamp/dist' // or './bower_components/bootcamp/dist'
                },
                files: {
                    './tmp/results.css': './test/test.scss'
                }
            }
        },

        // Bootcamp
        bootcamp: {
            test: {
                files: {
                    src: ['./tmp/results.css']
                }
            }
        },

        // Watch
        watch: {
            dist: {
                files: [
                    './test/**/*.scss',
                    './<%= dir.src %>/**/*.scss'
                ],
                tasks: ['test']
            }
        }
    });

    // Tasks
    grunt.registerTask('test', ['sass', 'bootcamp']);
    grunt.registerTask('dev', ['test', 'watch']);
    grunt.registerTask('build', ['test', 'concat']);
};