var mocha = require('mocha'),
	assert = require('assert'),
	jsdom = require('jsdom'),
	jquery = require('jquery'),
	jason = require('../src/Jason.js');


var test1 = ["a","link"]

describe('Jason Test Suite', function(){
	
	describe('.toHtml', function(){

		it('should be a function', function(done){
			assert.equal(typeof jason.toHtml, 'function');
			done();
		})

		it('should be a function (within JSDOM)', function(done){
			
			var window = jsdom.jsdom().createWindow();
			jsdom.env('http://google.com', [
					'http://code.jquery.com/jquery-1.5.min.js',
					'https://raw.github.com/christopherdebeer/Jason.js/master/src/Jason.js'
				],
				function (errors, window) {
					assert.equal(typeof window.Jason.toHtml, 'function')
					done();
			});	
		})

		it('should return a jQuery Object (within JSDOM)', function(done){

			var window = jsdom.jsdom().createWindow();
			jsdom.env('http://google.com', [
					'http://code.jquery.com/jquery-1.5.min.js',
					'https://raw.github.com/christopherdebeer/Jason.js/master/src/Jason.js'
				],
				function (errors, window) {
					assert.equal(window.Jason.toHtml(test1) instanceof window.jQuery, true)
					done();
			});			
		})

		it('should return a String (within JSDOM)', function(done){

			var window = jsdom.jsdom().createWindow();
			jsdom.env('http://google.com', [
					'http://code.jquery.com/jquery-1.5.min.js',
					'https://raw.github.com/christopherdebeer/Jason.js/master/src/Jason.js'
				],
				function (errors, window) {
					assert.equal(typeof window.Jason.toHtml(test1,{format: 'html'}) === 'string', true)
					done();
			});			
		})

		it('should return a js Object (within JSDOM)', function(done){

			var window = jsdom.jsdom().createWindow();
			jsdom.env('http://google.com', [
					'http://code.jquery.com/jquery-1.5.min.js',
					'https://raw.github.com/christopherdebeer/Jason.js/master/src/Jason.js'
				],
				function (errors, window) {
					assert.equal(typeof window.Jason.toHtml(test1, {format: 'obj'}) === 'object', true)
					done();
			});			
		})
		
	})


	describe(".fromHtml", function(){

		it('should be a function', function(done){
			assert.equal(typeof jason.fromHtml, 'function');
			done();
		})

		it('should be a function (within JSDOM)', function(done){
			
			var window = jsdom.jsdom().createWindow();
			jsdom.env('http://google.com', [
					'http://code.jquery.com/jquery-1.5.min.js',
					'https://raw.github.com/christopherdebeer/Jason.js/master/src/Jason.js'
				],
				function (errors, window) {
				assert.equal(typeof window.Jason.fromHtml, 'function');
				done();
			});	
		})

		it('should return a valid hArray')
		
	})


})