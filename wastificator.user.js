// ==UserScript==
// @name        Wastificator
// @namespace   ru.recursivepie.wastificator
// @require 	https://raw.githubusercontent.com/RecursivePie/Wastificator/master/styles.js
// @include     *
// @version     6.6.6
// @grant       none
//
// @author      RecursivePie (recursivepie@gmail.com)
// ==/UserScript==

var state = {
	currentTextarea : null,
	useVal : null,
	lastSelectedText : null,
}

var elements = {
	div : null,
	button : null,
	contextTextArea : null,
	put : null,
	contextMenu : null,
}

function attachToTextarea(ta) {
	closeContextMenu();
	state.currentTextarea = ta;
	if (ta.value === null || ta.value === undefined) {
		state.useVal = false;
		elements.contextTextArea.value = ta.textContent || ta.innerText;
	} else {
		state.useVal = true;
		elements.contextTextArea.value = ta.value;
	}
	ta.parentNode.insertBefore(elements.div, ta.nextSibling);
}

function onDocumentFocused(evt) {
	var target = evt.srcElement || evt.originalTarget;
	if (target
			&& (target.nodeName.toUpperCase() == 'TEXTAREA' || target.contentEditable === 'true')
			&& (elements.contextMenu.contains(target) === false)) {
		if (state.currentTextarea != target) {
			attachToTextarea(target);
		}
	}
}

function wastifyText(ta, styleName) {
	var style = styles[styleName];
	var val = "";
	if (state.useVal) {
		val = ta.value;
	} else {
		val = ta.textContent || ta.innerText;
	}
	var ans = style.getWastified(val);
	if (state.useVal) {
		ta.value = ans;
	} else {
		while (ta.firstChild !== null)
			ta.removeChild(ta.firstChild); // remove all existing content
		ta.appendChild(document.createTextNode(ans));
	}
}

function buttonClicked(evt) {
	if (elements.contextMenu.style.display == "none") {
		showContextMenu();
	} else {
		closeContextMenu();
	}
}

function styleClicked(evt) {
	
	var noSelection = false;
	
	var target = evt.srcElement || evt.originalTarget;
	var e = elements.contextTextArea;

	var selStart = e.selectionStart;
	var selEnd = e.selectionEnd;
	if(selEnd - selStart <= 0) {
		noSelection = true;
		selStart = 0;
		selEnd = e.value.length;
	}
	
	var val = e.value.substring(selStart, selEnd);
	
	var wastified = styles[target.textContent].getWastified(val);

	var len = wastified.length;
	
	var full = e.value.substring(0, selStart) + wastified
			+ e.value.substring(selEnd);
	e.value = full;
	if(noSelection) {
		putClicked();
	}
}

function showContextMenu() {
	if (state.useVal) {
		elements.contextTextArea.value = state.currentTextarea.value;
	} else {
		elements.contextTextArea.value = state.currentTextarea.textContent
				|| state.currentTextarea.innerText;
	}
	elements.contextMenu.style.display = "inline-block";
	elements.contextMenu.style.position = "absolute";
	if (offscreen(elements.contextMenu)) {
		elements.contextMenu.style.position = "";
	}
}

function closeContextMenu() {
	elements.contextMenu.style.display = "none";
}

function onDocumentClicked(evt) {
	var target = evt.srcElement || evt.originalTarget;
	if (target != elements.button
			&& elements.contextMenu.contains(target) === false) {
		closeContextMenu();
	} else {
	}

}

function putClicked() {
	var text = elements.contextTextArea.value;
	if (state.useVal) {
		state.currentTextarea.value = text;
	} else {
		// remove existing content
		while (state.currentTextarea.firstChild !== null)
			state.currentTextarea.removeChild(state.currentTextarea.firstChild);
		state.currentTextarea.appendChild(document.createTextNode(text));
	}
	closeContextMenu();
}

function offscreen(el) {
	var wh = window.innerHeight;
	var ww = window.innerWidht;
	var rect = el.getBoundingClientRect();
	var x = rect.x;
	var y = rect.y;
	var top = rect.top;
	var left = rect.left;
	var ew = rect.width;
	var eh = rect.height;
	if (y < 0) {
		console.log("y < 0");
		return true;
	}
	if (x < 0) {
		console.log("x < 0");
		return true;
	}
	if (x + ew > ww) {
		console.log("x + ew > ww");
		return true;
	}
	if (y + eh > wh) {
		console.log("y + eh > wh");
		console.log("y : " + y, "eh : " + eh, "wh : " + wh);
		return true;
	}
};

function init() {

	elements.div = document.createElement('div');

	elements.button = document.createElement('button');
	elements.button.innerHTML = "W";
	elements.button.addEventListener("click", buttonClicked, true);

	elements.div.appendChild(elements.button);
	elements.div.appendChild(document.createElement("br"));

	elements.contextMenu = document.createElement("div");
	elements.contextMenu.style.position = "absolute";
	elements.contextMenu.style.zIndex = 777;
	elements.contextMenu.style.border = "solid 1px red";
	elements.contextMenu.style.display = "none";
	elements.contextMenu.style.backgroundColor = "white";
	elements.contextMenu.style.padding = "0px";
	elements.contextMenu.style.margin = "0px";
	var styleList = document.createElement("ol");
	for ( var prop in styles) {
		var entry = document.createElement("li");
		var link = document.createElement("a");
		link.style.cursor = "pointer";
		link.style.color = "blue";
		link.appendChild(document.createTextNode(prop));
		link.addEventListener("click", styleClicked, true);
		entry.appendChild(link);
		styleList.appendChild(entry);
	}
	elements.contextMenu.appendChild(styleList);

	elements.contextTextArea = document.createElement('textarea');
	elements.contextTextArea.tabIndex = 322;
	elements.contextTextArea.style.resize = "both";
	elements.contextTextArea.style.margin = "2px";

	elements.put = document.createElement('button');
	elements.put.tabIndex = 323;
	elements.put.innerHTML = "PUT";
	elements.put.style.width = "100%";
	elements.put.style.display = "block";
	elements.put.addEventListener("click", putClicked, true);

	elements.contextMenu.appendChild(elements.contextTextArea);

	elements.contextMenu.appendChild(elements.put);

	elements.div.appendChild(elements.contextMenu);

	document.addEventListener('focus', onDocumentFocused, true);
	document.addEventListener('click', onDocumentClicked, true);

}

init();
