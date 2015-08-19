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
				var c = s[i].toLowerCase();
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
				var c = s[i].toLowerCase();
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
			"A" : "А",
			"B" : "В",
			"C" : "С",
			"D" : "Д",
			"E" : "Е",
			"F" : "Ф",
			"G" : "Ж",
			"H" : "Н",
			"I" : "I",
			"J" : "Ь",
			"K" : "К",
			"L" : "Ч",
			"M" : "М",
			"N" : "И",
			"O" : "О",
			"P" : "Р",
			"Q" : "Ы",
			"R" : "Я",
			"S" : "Ы",
			"T" : "Т",
			"U" : "Ю",
			"V" : "Ф",
			"W" : "Ш",
			"X" : "Х",
			"Y" : "У",
			"Z" : "З",

			"Э" : "3",
			"Щ" : "Ш",
			"Ъ" : "Ь",
			"Ё" : "Е",
			"Й" : "И",

			"4" : "Ч",
			"6" : "Б"
		},
		words : {
			"МОЯ СТРАНИЦА" : "МОИ КАПЮШОН",
			"ФОТОГРАФИИ" : "ВЫСТРЕЛЫ",
			"ДРУЗЬЯ" : "homies",
			"ВИДЕОЗАПИСИ" : "КАТСЦЕНЫ",
			"МОИ АУДИОЗАПИСИ" : "СЛЕЖЕНИЕ ИГРОКА",
			"МОИ СООБЩЕНИЯ" : "КО-МИО-НИИ-КАИ-ШУН",
			"МОИ ГРУППЫ" : "МОИ БАНДЫ",
			"МОИ НОВОСТИ" : "НОВОЕ В КАПЮШОНЕ",
			"МОИ ОТВЕТЫ" : "МОИ ПЕРЕСТРЕЛКИ",
			"МОИ ЗАКЛАДКИ" : "ДИСКЕТА",
			"МОИ НАСТРОИКИ" : "НАСТРОИКИ",
			"ПРИЛОЖЕНИЯ" : "АВТОМАТЫ",
			"ДОКУМЕНТЫ" : "СПЕЦЗФФЕКТЫ",

			"МНЕ НРАВИТСЯ" : "ВЫБРОСИТЬ ПРИЗНАКИ",
			"ПОДЕЛИТЬСЯ С ДРУЗЬЯМИ" : "ДЕЛИТЬ С homies",
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
			for ( var key in this.words) {
				var obj = this.words[key];
				var regex = new RegExp("(^|\\s)(" + key + ")($|\\s)", "g");
				ans = ans.replace(regex, "$1" + obj + "$3");
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
				if (i != ss.length - 1) {
					ans += " ";
				}
			}
			return ans;
		}
	},
	"vk_diacrit" : {
		diacrits : [ '\u0300', '\u0301', '\u0302', '\u0303', '\u0304',
				'\u0305', '\u0306', '\u0307', '\u0308', '\u0309', '\u030A',
				'\u030B', '\u030C', '\u030D', '\u030E', '\u030F', '\u0310',
				'\u0311', '\u0312', '\u0313', '\u0314', '\u0315', '\u0316',
				'\u0317', '\u0318', '\u0319', '\u031A', '\u031B', '\u031C',
				'\u031D', '\u031E', '\u031F', '\u0320', '\u0321', '\u0322',
				'\u0323', '\u0324', '\u0325', '\u0326', '\u0327', '\u0328',
				'\u0329', '\u032A', '\u032B', '\u032C', '\u032D', '\u032E',
				'\u032F', '\u0330', '\u0331', '\u0332', '\u0333', '\u0334',
				'\u0335', '\u0336', '\u0337', '\u0338', '\u0339', '\u033A',
				'\u033B', '\u033C', '\u033D', '\u033E', '\u033F', '\u0340',
				'\u0341', '\u0342', '\u0343', '\u0344', '\u0345', '\u0346',
				'\u0347', '\u0348', '\u0349', '\u034A', '\u034B', '\u034C',
				'\u034D', '\u034E', '\u034F', '\u0350', '\u0351', '\u0352',
				'\u0353', '\u0354', '\u0355', '\u0356', '\u0357', '\u0358',
				'\u0359', '\u035A', '\u035B', '\u035C', '\u035D', '\u035E',
				'\u035F', '\u0360', '\u0361', '\u0362', '\u0363', '\u0364',
				'\u0365', '\u0366', '\u0367', '\u0368', '\u0369', '\u036A',
				'\u036B', '\u036C', '\u036D', '\u036E', '\u036F' ],
		getDiacrits : function() {
			// var n = Math.floor(Math.random() * 10) + 1;
			var n = 1;
			var ans = "";
			var numbers = "_" + n;
			for (var i = 0; i < n; i++) {
				var x = Math.floor(Math.random() * this.diacrits.length);
				numbers += x;
				ans += "" + this.diacrits[x];
			}
			console.log(numbers);
			return ans;
			// return this.adds[6];
		},
		getWastified : function(s) {
			console.log("vk diacrit " + s);
			var ans = "";
			for (var i = 0; i < s.length; i++) {
				console.log("#" + s[i] + "#");
				ans += this.getDiacrits() + s[i];
			}
			ans += this.getDiacrits();
			console.log(ans);
			return ans;
		}
	}

}
