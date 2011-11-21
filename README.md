Jason
======

Jason.js is a set of helper functions for expressing markup (html) as JSON* and converting between to two.


Usage
-----
	
	// creates a jQuery object of the resultant markup
	Jason.toHtml(}
		h1:{
			attributes: {
				class: "hdline",
				id: "title",
				style: "color: #ff0000;"
			},
			innerHTML: "I'm a Headline"
		}
	});

	// takes a jQuery selector or object and generates JSON*
	Jason.fromHtml("#title.hdline");

	// means you can do this
	Jason.toHtml(jsonObject).find('p:nth-child(2n)');



Status
-------

Work in progress, please dont use this yet.



JSON*
------

This is obviouly not generic/standard JSON, and is specific to this use case, heres an example of the syntax:

	
	var testJSON = {
		div: {
			attributes: {
				class: ["wrapper"],
				id: "wrapper",
			},
			innerHTML: {
				h1: {
					attributes: {
						class: ["hd", "bold"]
					},
					innerHTML: "headline"
				},
				p: {
					attributes: {
						class: "txt"
					},
					innerHTML: {
						span: {
							attributes:{
								class: "emphasize"
							},
							innerHTML: "more text"
						},
						text: "this should be a text node",
						strong: {
							innerHTML: "i am strong"
						}
					}
				},
				img: {
					attributes: {
						src: "/images/coolPicBro.gif",
						alt: "Cool story Bro"
					}
				}
			}
		}
	}
