Jason
======

[![Build Status](https://secure.travis-ci.org/[christopherdebeer]/[Jason.js].png)](http://travis-ci.org/[christopherdebeer]/[Jason.js]) 

Jason.js is a set of helper functions for expressing markup (html) as JSON* and converting between the two.


Usage
-----

I've put Usage at the top of the Readme but be sure to check out "Syntax of htmlArrays" below for more info.

**To Html**	

	var example = ["div", {id: myDiv}, ["span", "text within a span"], "This is a good ol textnode"]

	// returns a jQuery object of the resultant markup see _"to Html options"_
	Jason.toHtml(example);


**To Jason**

	// takes a jQuery / or Html and generates JSON*
	Jason.toJason($("div#myDiv"));

	// or
	Jason.toJason("<div id='myDiv'><span>text within a span</span>This is a good ol textnode</div>")

**To Html Options**

	// Jason.toHtml() can be passed options

	// returns html
	Jason.toHtml(example, {format: "html"})

	// returns jquery (default)
	Jason.toHtml(example, {format: "jquery"})

	// returns an Object (for debuggin / dev)
	Jason.toHtml(example, {format: "obj"})


Status
-------

Work in progress, please dont use this yet.



Syntax of htmlArrays (JSON* DSL)
------

This is obviouly not generic/standard JSON, but is based on an implimentation of htmlArrays I saw in Tim Farlands' [Don](https://github.com/twfarland/don) module. 

The arrays must adhere to Jason's definition of an 'htmlArray'

An htmlArray is an array with either:

    [elementType]
    [elementType, contents...]
    [elementType, attributes]
    [elementType, attributes, contents...]
    [elementType, attributes, contents..., contents...]
    []
    [htmlArray...]
 
where:

* elementType is a string, e.g: "div"
* contents is either one or more of:
	- a string, e.g: "my title", or
	- an htmlArray
* attributes is a js object, e.g: {id:"mydiv"}

examples:

    htmlArray1 = ["br"]
    htmlArray2 = ["h1", "page title"]
    htmlArray3 = ["h1", 
                    "page title",
                    ["span", "subtitle"]]
                    
    htmlArray4 = ["meta", {name:"description", content:"some webpage"}]
    htmlArray5 = ["article", {id:123}, "the article content"]
    htmlArray6 = ["article", {id:123}, 
                    "the article content",
                    ["a", {href:"#"}, "some link"]]
                    
    htmlArray7 = []
    htmlArray8 = [["br"],["br"]]

**More Examples**


	var image = ["img",{src:"/path/to/image.jpg", alt: "Awesome Image Bro"}]

	var example = ["p.item",{style: 'display:block;', class: 'anotherClass'},
		["span",{id: "innerSPAN"}, "text of the inner span"],
		["span",
			"asdasdasdasd",
			["a.deep", {href: "/more.html", title: "link in a span in a p", alt: "deep link"}, "Deep Link"]
		],
		["a", {href: "/"}, "link"]
	]


Some sugar
-----------

As a bit of added sugar, elementTypes can contain CSS style selectors ie:
 
	["h1#myTitle", "Awesome shortcut for an ID"]  // IDs or 
	["img.thumbnail", {src: "/path/to/thumb.jpg"}]` // Classes or
	["p#intro.blue.puff", "A paragraph with ID and Classes but quicker"] // Both