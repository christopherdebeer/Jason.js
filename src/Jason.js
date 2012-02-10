

// Jason v0.0.2
// based on Don / hArray markup

;(function(exports, $){


	function isObject ( obj ) {
		return obj && (typeof obj  === "object");
	}
	function isArray ( obj ) { 
		return isObject(obj) && (obj instanceof Array);
	}

	function repeat (text, n) {
	    return new Array(1 + n).join(text);
	}

	var toHtml = function (hArray, opts) {

		// opts = {
		//		format: "jquery/html/obj"	
		// }

		if (typeof opts === 'undefined') opts = {format: 'jquery'}; // default to {return: "jquery"}
		if (typeof opts.depth === 'undefined') opts.depth = 0;	

		
		
		// console.log("running toHtml: ", hArray, " is first elem an array: ", isArray(hArray[0]))
		
		var returned;

		// if an array of hArray's is passed ie: no container
		if (isArray(hArray[0])) {

			// console.log("array of hArray's passed");
			var $container = $("<div/>");
			$.each(hArray, function(i,subHArray) {
				// console.log("for each sub hArray: ", subHArray)
				$container.append(toHtml(hArray[i], {format: "jquery"}))
			});
			$this = $container.children();

		} else {
		// a single hArray is passed ie: has container
			// console.log("single hArray passed", hArray );
			var _this = {};
			var $this;
			// get tag name or default to 'div'
			_this.tagName = hArray[0].split(/\.|#/)[0] !== "" ? hArray[0].split(/\.|#/)[0] : "div";

			$this = $("<" + _this.tagName + "/>");
			
			// does it have classes or ids in the name
			_this.id = /#/.test(hArray[0]) ? hArray[0].split("#")[1].split(".")[0] : null;

			$this.attr("id",_this.id);

			if (/\./.test(hArray[0])) {
				_this.classes = hArray[0].split(".");
				_this.classes = _this.classes.map(function(cls){return cls.split("#")[0]})
				_this.classes.shift();
			}

			// console.log(_this.classes);
			$(_this.classes).each(function(i, cls) {if (typeof cls !== 'undefined') {$($this).addClass(cls);}})

			if (isArray(hArray[1]) || typeof hArray[1] === 'string') {

				_this.html = [];
				for (var x = 1; x < hArray.length; x++) {
					if (typeof hArray[x] === 'string') {
						_this.html.push(hArray[x]);
						$this.append($(document.createTextNode(hArray[x])));
					} else if (isArray(hArray[x])) {

						returned = toHtml(hArray[x],{format: opts.format, depth: opts.depth +1});
						_this.html.push(returned);
						$this.append(returned);
					}
				}

			// if attributes passed
			} else {
				
				_this.html = [];
				for (attr in hArray[1]) {

					if (attr === "class") {
						
						$.each(hArray[1][attr].split(" "), function(i,cls){$this.addClass(cls)});
						if (typeof _this.classes === 'undefined') _this.classes = hArray[1][attr].split(" ");
						else $.each(hArray[1][attr].split(" "), function(i,cls){_this.classes.push(cls)});
					} else {
						_this[attr] = hArray[1][attr];
						$this.attr(attr,hArray[1][attr])	
					}
				}
				for (var x = 2; x < hArray.length; x++) {
					if (typeof hArray[x] === 'string') {
						_this.html.push(hArray[x]);
						$this.append($(document.createTextNode(hArray[x])));
					} else if (isArray(hArray[x])) {
						returned = toHtml(hArray[x], {format: opts.format, depth: opts.depth +1});
						_this.html.push(returned);
						$this.append(returned);
					}
				}
			}


		}

		if (opts.format === "obj") return _this;
		else if (opts.format === "html") return "\n" + repeat("\t",opts.depth) + $this.wrap('<div/>').parent().html();
		else return $this;
	}



	var toJason = function($this, opts) {
		
		if (!($this instanceof jQuery)) {
			
			// test if it works as a selector
			var $test = $($this);
			
			if ($test.length > 0) $this = $test;
			else $this =  $("<div/>").html($this).children();
			// console.log("recived html, makeing jQuery obj.")
		}

		if ($this.length > 1) {
			// console.log("muliple objects passed");			
		}

		// console.log("$this: ", $($this)[0]);
		var attrArr = $($this)[0].attributes;
		var attributes = {};
		if (attrArr.length > 0 ) {
			$.each(attrArr, function (ind, item) {attributes[item.nodeName] = item.nodeValue})
		}

		if ($this.children.length > 0) {
			
			// console.log("this pre GET: ", $this);
			var _this = [$this.get(0).tagName.toLowerCase(), attributes]
			$.each($this.children(), function(index, $item) {
				// console.log("item: ", $item)
				_this.push(toJason($($item)))
			})
		} else {
			_this = [$this.text(), attributes ]
		}
		

		return _this;
	}

	exports.toHtml = toHtml;
	exports.toJason = toJason;

})(typeof exports === "object" ? exports : Jason = {}, typeof exports === "object" ? require("jquery") : jQuery)
