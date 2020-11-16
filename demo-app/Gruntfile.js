module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      cssmin: { 
        sitecss: { 
            options: { 
                banner: '' 
            }, 
            files: { 
               '../build/src/js/jet-composites/demo-item/demo-item-styles.css' :
               'src/js/jet-composites/demo-item/demo-item-styles.css'
            } 
        } 
    },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          files:[ 
           {src: 'src/js/jet-composites/demo-item/demo-item-viewModel.js',dest:'../build/src/js/jet-composites/demo-item/demo-item-viewModel.js'}]
        }
      },
      clean:['../build/src/js/jet-composites/demo-item/demo-item-viewModel.js','../build/src/js/jet-composites/demo-item/demo-item-styles.css','../build/src/js/accUtils.js']

    });
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    //Register tasks
    grunt.registerTask('douglify','uglify');
    grunt.registerTask('docssmin','cssmin');
    grunt.registerTask('doclean','clean');
  
  };