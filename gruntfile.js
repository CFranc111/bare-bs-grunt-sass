module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
     
        options: {
          style: 'expanded'
        },
        dist: {
            files: {
              'builds/styles.css': 'bootstrap/assets/stylesheets/styles.scss'
            }
        }
     
    } //sass

  }); //initConfig


  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);

}; //wrapper function