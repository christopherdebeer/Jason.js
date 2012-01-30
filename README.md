Jason
======

Jason.js is a set of helper functions for expressing markup (html) as JSON* and converting between to two.


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

	// means you can do this
	Jason.toHtml(jsonObject).find('p:nth-child(2n)');



Status
-------

Work in progress, please dont use this yet.



JSON*
------

This is obviouly not generic/standard JSON, based on an implimentation I saw of Tim Farlands: [Don](https://github.com/twfarland/don), heres an example of the syntax:

	
	var example = ["p.item",{style: 'display:block;', class: 'anotherClass'},
		["span",{id: "innerSPAN"}, "text of the inner span"],
		["span","asdasdasdasd",
			["a.deep", {href: "/more.html", title: "link in a span in a p", alt: "deep link"}, "Deep Link"]
		],
		["a", {href: "/"}, "link"]
	]
