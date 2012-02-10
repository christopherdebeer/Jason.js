var jQuery = require("jquery");
var Jason = require("../src/Jason.js");
var assert = require("assert");
var jsdom = require("jsdom");

var test = ["p.item",{style: 'display:block;', class: 'anotherClass'},
		["span",{id: "innerSPAN"}, "text of the inner span"],
		["span","asdasdasdasd",
			["a.deep", {href: "/more.html", title: "link in a span in a p", alt: "deep link"}, "Deep Link"]
		],
		["a", {href: "/"}, "link"]
	];

var jsdom  = require("jsdom"),
    window = jsdom.jsdom().createWindow();



exports['Basic - toHtml'] = function (test) {

	test.expect(1);
	console.log("Testing if toHtml is a function")
    test.equal(typeof Jason.toHtml, "function");
    test.done();
};

exports['Basic - toJason'] = function (test) {

	test.expect(1);
	console.log("Testing if toJason is a function")
    test.equal(typeof Jason.toJason, "function");
    test.done();
};

exports['Basic - <a> to HTML'] = function (test) {

	test.expect(1);

	console.log("launching JSDOM")
	function done() {
		console.log("JSDOM callback called");
		test.done();
	}
	jsdom.jQueryify(window, 'http://code.jquery.com/jquery-1.7.min.js' , function() {
  		test.equal("<a href=\"#\" >link</a>", Jason.toHtml([["a",{href:"#"},"link"]]));
    	done();
	});
    
};


// console.log("toHtml() 2 (container): ", Jason.toHtml(test, {format: "obj"}));
// console.log("toJason() 1: ", Jason.toJason(Jason.toHtml(test, {format: "html"})));