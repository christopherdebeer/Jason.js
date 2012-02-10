var jason = require("../src/Jason.js");
var jquery = require("jquery");
var assert = require("assert");

var test = ["p.item",{style: 'display:block;', class: 'anotherClass'},
		["span",{id: "innerSPAN"}, "text of the inner span"],
		["span","asdasdasdasd",
			["a.deep", {href: "/more.html", title: "link in a span in a p", alt: "deep link"}, "Deep Link"]
		],
		["a", {href: "/"}, "link"]
	];



assert.equal("<a href=\"#\" >link</a>", Jason.toHtml([["a",{href:"#"},"link"]]));

// console.log("toHtml() 2 (container): ", Jason.toHtml(test, {format: "obj"}));
// console.log("toJason() 1: ", Jason.toJason(Jason.toHtml(test, {format: "html"})));