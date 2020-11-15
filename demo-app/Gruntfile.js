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
                'build/src/css/app-min.css': [ 
                    'src/css/app.css'
               ],
               'build/src/js/jet-composites/demo-item/demo-item-styles-min.css' :
               'src/js/jet-composites/demo-item/demo-item-styles.css'

                
            } 
        } 
    },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          files:[ {src: 'src/js/viewModels/dashboard.js',dest: 'build/src/js/viewModels/dashboard-min.js'},
           {src: 'src/js/jet-composites/demo-item/demo-item-viewModel.js',dest:'build/src/js/jet-composites/demo-item/data-item-viewModel-min.js'}]
        }
      }
    });
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // Default task(s).
    grunt.registerTask('douglify','uglify');
    grunt.registerTask('docssmin','cssmin');
  
  };