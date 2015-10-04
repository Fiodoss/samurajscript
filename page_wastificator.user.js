// ==UserScript==
// @name        PageWastificator
// @namespace   ru.recursivepie.pagewastificator
// @require 	https://raw.githubusercontent.com/Fiodoss/samurajscript/master/styles.js
// @include     *
// @version     0.1.3
// @grant       none
//
// @author      RecursivePie (recursivepie@gmail.com)
// ==/UserScript==


var style = styles["sa_caps"];
//var style = styles["ps1"];


var observer;

function kek(str) {
	return style.getWastified(str);
}

function wastifyNode(node) {
	if(node.nodeName == "#text") {
		el.nodeValue = style.getWastified(el.nodeValue);
	}
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
	
	observer = new MutationObserver(function(mutations) {
		console.log("MUTATION");
		mutations.addedNodes.forEach(wastifyNode);
	});

	console.log("Made observer");
	
	var config = {
		attributes : true,
		childList : true,
		characterData : true
	}
	
	observer.observe(document, config);

	console.log("Starting observing");
	
}

main();
