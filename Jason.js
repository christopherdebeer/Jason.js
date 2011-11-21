
// Jason
// Jason.json2html && Jason.html2json
// a work in progress 2011-11-02
// by christopher de Beer <christopherdebeer@gmail.com>

var Jason = {

	json2html: function (json, container) {

		
		// if container has been parsed then create a new element: container
		if (container) { var el = $("<" + container + "/>");} 
		
		// otherwise its the grandparent element: html
		else { var html; }

		$.each(json, function(key,val){

			// if it has attributes then apply them
			if (key == "attributes") {
				$.each(val, function (attr,value) {

					// if its an array of values
					if (typeof value == "object" && value.length) {

						// then itterate through them and apply with spaces between
						var allValues = "";
						for (var i in value) {
							allValues += (value[i] + " ");
						}
						el.attr(attr,allValues);
						
					} else {

						// else set the attribute to the value
						el.attr(attr,value);
					}
				});
			
			// if it has innerHTML
			} else if (key == "innerHTML") {

				// if its a text node
				if (typeof val == "string") {

					// then set the contents to the vlaue of the text node
					el.html(val)
				} else {

					// else concatinate its children recursivly and apply them as innerHTML
					$.each(val, function(elem, value) {

						// if its a text node then append it
						if (typeof value[0] == "string") {
							el.append($(document.createTextNode(value)));

						// else recursivly get the markup of the element and then append it
						} else {
							$.each(value, function(tag, content) {
								el.append(Jason.json2html(content, tag));
								// console.log(content, tag);
							});
						}
						
					});
				}
			// if its an element
			} else {

				// if its the original/container
				if (!container) {
					// then assign it to the "global" html
					html = Jason.json2html(val, key);
				} else {
					// else return recursivly
					return Jason.json2html(val, key);
				}
				
			}

		});

		if (!container) {
			// finish
			return html;
		} else {
			// return the element recursivly
			return el;
		}

	},

	// console.log(Jason.json2html(testJSON));
	//var testHTML = Jason.json2html(testJSON);


	html2json: function (html, container) {
		
		if (!container) { var json = [];}
		else { var obj = {}; }

		$(html).each( function (i, el) {

			var DOMobj = $(el).get(0);
				
			var tagName = DOMobj.tagName,
				attributes = DOMobj.attributes,
				innerHTML = $(DOMobj).html();
			
			//console.log(DOMobj);
			if (DOMobj.nodeType === 3) {
				console.log("TEXT",  DOMobj.textContent);
			} else {
				console.log(tagName, attributes, innerHTML)
			}

			if (container) {

				if (DOMobj.nodeType ===3) {
					return {text: DOMobj.textContent};
				} else {

					obj[tagName] = {
						attributes: DOMobj.attributes,
						innerHTML: Jason.html2json($(DOMobj).html(), tagName)
					}
					console.log(obj[tagName]);
				}

			} else {

				console.log(json);

				if (DOMobj.nodeType === 3) {
					json.push({text:DOMobj.textContent});
				} else {

					console.log("inner html of: ", innerHTML);
					var newObj = new Object();
					newObj[tagName] = {
						attributes: attributes,
						innerHTML: Jason.html2json(innerHTML, tagName)
					};
					json.push(newObj);
				}
				console.log(json);
				
			}
		});

		if (container) { return json; }
		else { return obj; }
	}

}

//console.log(Jason.html2json(testHTML));