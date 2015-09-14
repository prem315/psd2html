module.exports = function(grunt) {
	grunt.initConfig({
	  sass: {                              // Task 
	    dist: {                            // Target 
	      files: {                         // Dictionary of files 
	        'styles.css': 'styles.scss',       // 'destination': 'source' 
	        //'widgets.css': 'widgets.scss'
	      }
	    }
	  },

	  watch: {
		  css: {
		    files: ['*.scss'],
		    tasks: ['sass'],
		  }
		}


		


	});
	

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-connect');
	//grunt.loadNpmTasks('grunt-http-server');
	grunt.registerTask('default', ['sass', 'watch']);

}