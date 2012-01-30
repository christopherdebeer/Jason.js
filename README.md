Jason
======

Jason.js is a set of helper functions for expressing markup (html) as JSON* and converting between the two.


Usage
-----

**To Html**	

	var example = ["div", {id: myDiv}, ["span", "text within a span"], "This is a good ol textnode"]

	// creates a jQuery object of the resultant markup
	Jason.toHtml(example);


**To Jason**

	// takes a jQuery / or Html selector or object and generates JSON*
	Jason.toJason($("div#myDiv"));

	// or
	Jason.toJason("<div id='myDiv'><span>text within a span</span>This is a good ol textnode</div>")


Status
-------

Work in progress, please dont use this yet.



JSON* (DSL)
------

This is obviouly not generic/standard JSON, based on an implimentation I saw of Tim Farlands: [Don](https://github.com/twfarland/don). 

Basically all markup is represented as an Array of which the:

* First element is the element type (nodeName) ie: "div" or "p" or "span" etc etc..
* Second element is (optional) an object representing the attributes of this element, so for example an image might be represented as so: ["img", {src: "/image.jpg", alt: "alt text"}]
* Third and onward are either Strings (representing Text Nodes) or other Arrays following this syntax (representing elements contained within this element ie: children)

If you dont have any attributes to represent then you can just omit the second element and continue with the contents.

Here are some examples of the syntax:

	var image = ["img",{src:"/path/to/image.jpg", alt: "Awesome Image Bro"}]

	var example = ["p.item",{style: 'display:block;', class: 'anotherClass'},
		["span",{id: "innerSPAN"}, "text of the inner span"],
		["span",
			"asdasdasdasd",
			["a.deep", {href: "/more.html", title: "link in a span in a p", alt: "deep link"}, "Deep Link"]
		],
		["a", {href: "/"}, "link"]
	]
