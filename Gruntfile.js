module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            build: {
                src: ['./*.js'],
                dest: 'client/dist/js/build.js'
            }
        },
        watch: {
            js: {
                files: './*.js',
                tasks: ['uglify']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [
        'uglify',
    ]);
    grunt.registerTask('dev', [
        'watch'
    ]);
};