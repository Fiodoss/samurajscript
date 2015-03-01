var styles = {
	"ps1" : {
		replaces : {
			'А' : 'A',
			'Б' : '6',
			'В' : 'B',
			'Г' : '7',
			'Д' : 'D',
			'Е' : 'E',
			'Ё' : 'E',
			'Ж' : 'X',
			'З' : '3',
			'И' : 'N',
			'Й' : 'N',
			'К' : 'K',
			'Л' : 'JI',
			'М' : 'M',
			'Н' : 'H',
			'О' : 'Ф',
			'П' : 'II',
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
			'Я' : '9'
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
	},
	"ps1_lite" : {
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
	},

	"vc" : {
		replaces : {
			"м" : "m",
			"й" : "и",
			"д" : "g",
			"а" : "ɑ"
		},
		getWastified : function(s) {
			var ans = "";
			var rep = this.replaces;
			for (var i = 0; i < s.length; i++) {
				var c = s[i];
				if (rep[c] === null || rep[c] === undefined) {
					ans += c;
				} else {
					ans += rep[c];
				}
			}
			return ans;
		}
	},
	"vc_alt" : {
		replaces : {
			"м" : "m",
			"п" : "n",
			"й" : "u",
			"и" : "u",
			"д" : "g",
			"а" : "ɑ",
		},
		getWastified : function(s) {
			var ans = "";
			var rep = this.replaces;
			for (var i = 0; i < s.length; i++) {
				var c = s[i];
				if (rep[c] === null || rep[c] === undefined) {
					ans += c;
				} else {
					ans += rep[c];
				}
			}
			return ans;
		}
	},
	"sa_caps" : {
		replaces : {
			"G" : "Ж",
			"R" : "Я",
			"S" : "Ы",
			"W" : "Ш",

			"Э" : "3",
			"Щ" : "Ш",
			"Ъ" : "Ь",
			"Ё" : "Е",
			"Й" : "И",

			"4" : "Ч",
			"6" : "Б"
		},
		getWastified : function(s) {
			var ans = "";
			var rep = this.replaces;
			var englishRegexp = /[a-z]/;
			for (var i = 0; i < s.length; i++) {
				c = s[i];
				console.log(englishRegexp.test(c) + " " + c);
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
	},
	"full_width" : {
		replaces : {
			"!" : "！",
			'"' : "＂",
			"#" : "＃",
			"$" : "＄",
			"%" : "％",
			"&" : "＆",
			"'" : "＇",
			"(" : "（",
			")" : "）",
			"*" : "＊",
			"+" : "＋",
			"," : "，",
			"-" : "－",
			"." : "．",
			"/" : "／",
			"0" : "０",
			"1" : "１",
			"2" : "２",
			"3" : "３",
			"4" : "４",
			"5" : "５",
			"6" : "６",
			"7" : "７",
			"8" : "８",
			"9" : "９",
			":" : "：",
			";" : "；",
			"<" : "＜",
			"=" : "＝",
			">" : "＞",
			"?" : "？",
			"@" : "＠",
			"A" : "Ａ",
			"B" : "Ｂ",
			"C" : "Ｃ",
			"D" : "Ｄ",
			"E" : "Ｅ",
			"F" : "Ｆ",
			"G" : "Ｇ",
			"H" : "Ｈ",
			"I" : "Ｉ",
			"J" : "Ｊ",
			"K" : "Ｋ",
			"L" : "Ｌ",
			"M" : "Ｍ",
			"N" : "Ｎ",
			"O" : "Ｏ",
			"P" : "Ｐ",
			"Q" : "Ｑ",
			"R" : "Ｒ",
			"S" : "Ｓ",
			"T" : "Ｔ",
			"U" : "Ｕ",
			"V" : "Ｖ",
			"W" : "Ｗ",
			"X" : "Ｘ",
			"Y" : "Ｙ",
			"Z" : "Ｚ",
			"[" : "［",
			"\\" : "＼",
			"]" : "］",
			"^" : "＾",
			"_" : "＿",
			"`" : "｀",
			"a" : "ａ",
			"b" : "ｂ",
			"c" : "ｃ",
			"d" : "ｄ",
			"e" : "ｅ",
			"f" : "ｆ",
			"g" : "ｇ",
			"h" : "ｈ",
			"i" : "ｉ",
			"j" : "ｊ",
			"k" : "ｋ",
			"l" : "ｌ",
			"m" : "ｍ",
			"n" : "ｎ",
			"o" : "ｏ",
			"p" : "ｐ",
			"q" : "ｑ",
			"r" : "ｒ",
			"s" : "ｓ",
			"t" : "ｔ",
			"u" : "ｕ",
			"v" : "ｖ",
			"w" : "ｗ",
			"x" : "ｘ",
			"y" : "ｙ",
			"z" : "ｚ",
			"{" : "｛",
			"|" : "｜",
			"}" : "｝",
			"~" : "～"

		},
		getWastified : function(s) {
			var ans = "";
			var rep = this.replaces;
			for (var i = 0; i < s.length; i++) {
				var c = s[i];
				if (rep[c] === null || rep[c] === undefined) {
					ans += c;
				} else {
					ans += rep[c];
				}
			}
			return ans;
		}
	},
	"double_underline" : {
		adds : '\u0333',
		getWastified : function(s) {
			var ans = "";
			for (var i = 0; i < s.length; i++) {
				ans += this.adds + s[i];
			}
			return ans;
		}
	},
	"capspace" : {
		getWastified : function(s) {
			var nbsp = '\u00A0';
			var ans = "";
			var ss = s.toUpperCase();
			for (var i = 0; i < ss.length; i++) {
				if (ss[i] == ' ') {
					ans += nbsp;
				} else {
					ans += ss[i];
				}
				if(i != ss.length - 1) {
					ans += " ";
				}
			}
			return ans;
		}
	},

}
