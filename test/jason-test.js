var mocha = require('mocha'),
	assert = require('assert'),
	jason = require('../src/Jason.js');

describe('Jason Test Suite', function(){
	
	describe('.toHtml', function(){

		it('should be a function', function(done){
			assert.equal(typeof jason.toHtml, 'function');
			done();
		})

		it('should return a String')

		it('should return a jQuery object')

		it('should return a js Object')
		
	})


	describe(".fromHtml", function(){

		it('should be a function', function(done){
			assert.equal(typeof jason.fromHtml, 'function');
			done();
		})

		it('should return a valid hArray')
		
	})


})