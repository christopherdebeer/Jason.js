Jason
======

Jason.js is a set of helper functions for expressing markup (html) as JSON and converting between to two.


Usage
-----

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

	Jason.fromHtml("#title.hdline");

Status
-------

Work in progress, please dont use this yet.

