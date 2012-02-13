// //var jQuery = require("jquery");
// var Jason = require("../src/Jason.js");
// var assert = require("assert");
// var jsdom = require("jsdom");

// var test = ["p.item",{style: 'display:block;', class: 'anotherClass'},
// 		["span",{id: "innerSPAN"}, "text of the inner span"],
// 		["span","asdasdasdasd",
// 			["a.deep", {href: "/more.html", title: "link in a span in a p", alt: "deep link"}, "Deep Link"]
// 		],
// 		["a", {href: "/"}, "link"]
// 	];

// var jsdom  = require("jsdom"),
//     window = jsdom.jsdom().createWindow();



// exports['Basic - toHtml'] = function (test) {

// 	console.log("Testing if toHtml is a function");
//     test.equal(typeof Jason.toHtml, "function");
//     test.done();
// };

// exports['Basic - fromHtml'] = function (test) {

// 	console.log("Testing if toJason is a function");
//     test.equal(typeof Jason.fromHtml, "function");
//     test.done();
// };



// exports["Testing JSDOM : return [object]"] = function (test) {


// 	function domTest (window) {
// 		test.equal(typeof window, "object");
// 		test.done();
// 	}
// 	jsdom.env('http://google.com', [
// 		'http://code.jquery.com/jquery-1.5.min.js'
// 	],
// 	function(errors, window) {

// 		console.log("JSDOM callback called - running test");
// 		//console.log(errors,window);
// 		console.log("Errors: ", errors);
// 		//console.log("Window: ", window);
// 		console.log("==========>> ME <<===========");

// 		console.log("Type of 'test' = ", typeof test);
// 		// test.equal("<a href=\"#\" >link</a> Jason.toHtml([["a",{href:"#"},"link"]]));

// 		domTest(window);
// 		console.log("After function call out of callback")

// 	});

// 	console.log("After jsdom setup;")

	
// };

// //exports.jsdomTest();
// //testme();


// // console.log("toHtml() 2 (container): ", Jason.toHtml(test, {format: "obj"}));
// // console.log("toJason() 1: ", Jason.toJason(Jason.toHtml(test, {format: "html"})));