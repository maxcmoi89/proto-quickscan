"use strict";

module.exports = function( grunt ) {
    // 1. import des tâches
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    // 2. configuration des tâches
    grunt.initConfig( {
      sass: {
        dist: {
          files: {
            'css/style.css': 'sass/style.scss', 
          }
        }
      },
        "watch": {
            "css": {
                "files": [ "sass/*.scss" ],
                "tasks": [ "sass:dist" ],
            },

            "options": {
                "livereload": true,
            }
        }
    } );
    // 3. définition des alias
    grunt.registerTask("work", [
        "watch"
    ])
};
