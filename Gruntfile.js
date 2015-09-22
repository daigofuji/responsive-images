"use strict";
module.exports = function(grunt){
	grunt.initConfig({
		responsive_images: {
		dev: {
			files: [{
			expand: true,
			src: ['img-src/**/*.{jpg,gif,png}'],
			dest: 'dist/'
			}]
		}
		},
	});
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default',['responsive_images']);
};

