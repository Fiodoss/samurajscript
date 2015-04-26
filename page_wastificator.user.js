// ==UserScript==
// @name        PageWastificator
// @namespace   ru.recursivepie.pagewastificator
// @require 	https://raw.githubusercontent.com/RecursivePie/Wastificator/master/styles.js
// @include     *
// @version     0.1.3
// @grant       none
//
// @author      RecursivePie (recursivepie@gmail.com)
// ==/UserScript==

var style = styles["sa_caps"];

function kek(str) {
	return style.getWastified(str);
}

function see(el) {
	if (el.nodeName.toUpperCase() === 'TEXTAREA'
			|| el.contentEditable === 'true') {
		return;
	}
	if (el.nodeName == "#text") {
		el.nodeValue = kek(el.nodeValue);
		return;
	}
	var children = el.childNodes;
	for (var i = 0; i < children.length; i++) {
		see(children[i]);
	}
}

function main() {
	// var sideBar = document.getElementById("side_bar");
	// var topLinks = document.getElementById("top_links");
	// see(document);
	// // see(topLinks);
	see(document);
	document.addEventListener("click", function() {
		see(document);
	}, true);
}

main();
