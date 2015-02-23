// ==UserScript==
// @name        PageWastificator
// @namespace   ru.recursivepie.pagewastificator
// @include     *
// @version     0.1
// @grant       none
//
// @author      RecursivePie (recursivepie@gmail.com)
// ==/UserScript==

var style = {
	replaces : {
		'А' : 'A',
		'Б' : '6',
		'В' : 'B',
		'Г' : 'F',
		'Д' : 'D',
		'Е' : 'E',
		'Ё' : 'E',
		'Ж' : 'X',
		'З' : '3',
		'И' : 'N',
		'Й' : 'N',
		'К' : 'K',
		'Л' : 'Л',
		'М' : 'M',
		'Н' : 'H',
		'О' : '0',
		'П' : 'П',
		'Р' : 'P',
		'С' : 'C',
		'Т' : 'T',
		'У' : 'Y',
		'Ф' : 'Ф',
		'Х' : 'X',
		'Ц' : 'U',
		'Ч' : '4',
		'Ш' : 'W',
		'Щ' : 'W',
		'Ь' : 'b',
		'Ы' : 'bI',
		'Ъ' : 'b',
		'Э' : '3',
		'Ю' : 'I0',
		'Я' : 'R'
	},
	getWastified : function(s) {
		var ans = "";
		var rep = this.replaces;
		var englishRegexp = /[a-z]/;
		for (var i = 0; i < s.length; i++) {
			var c = s[i];
			if (!englishRegexp.test(c)) {
				c = c.toUpperCase();
			}
			if (rep[c] === null || rep[c] === undefined) {
				ans += c;
			} else {
				ans += rep[c];
			}
		}
		return ans;
	}
};

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
