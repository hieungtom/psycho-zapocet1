var n = 0;
var otazky = new Array();
var odpovezene = new Array();
var spatneOtazky = new Array();

var spravne = 0;
var spatne = 0;

var otazka;

var x = 0;

function start() {
	zalozOtazky();
	document.getElementById('start').remove();

	document.getElementById('otazka').style.visibility = 'visible';
	//document.getElementById('odpoved').style.visibility = 'visible';
	document.getElementById('check').style.visibility = 'visible';
	document.getElementById('otazkaCislo').style.visibility = 'visible';

	nactiOtazku();
}

function nactiOtazku() {
	if (otazky.length <= n) {
		document.getElementById("form").style.visibility = 'hidden';
		document.getElementById("otazkaCislo").style.visibility = 'hidden';
		document.getElementById("dalsi").style.visibility = 'hidden';

		document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' +
				'<p>Špatných odpovědí: ' + spatne + '</p>' +
				'<button id="spatneOtazky" type="button" onclick=nactiSpatne()>Znovu špatné otázky</button>';
		return;
	}

	while (true) {
		x = Math.floor((Math.random() * otazky.length));
		if (odpovezene.indexOf(x) >= 0)
			;
		else
			break;
	}

	document.getElementById('otazkaCislo').innerHTML = "Otázka " + (n + 1) + " z " + (otazky.length);
	document.getElementById("check").style.visibility = 'hidden';
	document.getElementById("dalsi").style.visibility = 'hidden';
	otazka = otazky[x];
	
	var used = new Array();
	var rand;
	var numOfQuestion = 0;
	
	var str2;
	str2 = '<div id="form">' + otazka.otazka + '<br>';
	do {
		while (true) {
			rand = Math.floor((Math.random() * 4));
			if (used.indexOf(rand) >= 0)
				;
			else
				break;
		}
		
		used.push(rand);
		
		switch(rand){
			case 0:
				str2 += '<br><input id="a" type="checkbox" name="a" value="'+ String.fromCharCode(97 + numOfQuestion) +'">' + '<span id="aa"> ' + otazka.a + '</span>';
				break;
			case 1:
				str2 += '<br><input id="b" type="checkbox" name="a" value="'+ String.fromCharCode(97 + numOfQuestion) +'">' + '<span id="bb"> ' + otazka.b + '</span>';
				break	
			case 2:
				str2 += '<br><input id="c" type="checkbox" name="a" value="'+ String.fromCharCode(97 + numOfQuestion) +'">' + '<span id="cc"> ' + otazka.c + '</span>';
				break;
			case 3: 
				str2 += '<br><input id="d" type="checkbox" name="a" value="'+ String.fromCharCode(97 + numOfQuestion) +'">' + '<span id="dd"> ' + otazka.d + '</span>';
				break;
		}
		numOfQuestion++;
		
	} while (used.length != 4)
	
	str2 += '<br><br><input id="end" type="button" value="Odpovědět" onclick=check()>' + '</div>';
	document.getElementById('otazka').innerHTML = str2;
	
	/*document.getElementById('otazka').innerHTML = '<div id="form">' + otazka.otazka + '<br>' +
			'<br><input id="a" type="checkbox" name="a" value="a">' + '<span id="aa"> ' + otazka.a + '</span>' +
			'<br><input id="b" type="checkbox" name="a" value="b">' + '<span id="bb"> ' + otazka.b + '</span>' +
			'<br><input id="c" type="checkbox" name="a" value="c">' + '<span id="cc"> ' + otazka.c + '</span>' +
			'<br><input id="d" type="checkbox" name="a" value="d">' + '<span id="dd"> ' + otazka.d + '</span>' + '<br>' +
			'<br><input id="end" type="button" value="Odpovědět" onclick=check()>' +
			'</div>';*/
}

function nactiSpatne() {
	document.getElementById("form").style.visibility = 'visible';
	document.getElementById("otazkaCislo").style.visibility = 'visible';
	document.getElementById("dalsi").style.visibility = 'visible';
	document.getElementById('otazka').style.visibility = 'visible';
	document.getElementById('check').style.visibility = 'visible';

	otazky = [];
	otazky = spatneOtazky;
	spatneOtazky = [];
	n = 0;
	x = 0;
	spravne = 0;
	spatne = 0;
	odpovezene = [];
	nactiOtazku();
}

function isEnter(e) {
	if ((event.which == 13 || event.keyCode == 13)) {
		if (document.getElementById("dalsi").style.visibility == 'visible') {
			nactiOtazku();
		} else {
			check();
		}
	}
}

function check() {
	var ok = true;
	//document.getElementById("check").innerHTML = document.getElementById("id1").value;
	document.getElementById("check").style.visibility = 'visible';
	if (otazka.odpoved.indexOf("a") > -1) {
		if (document.getElementById("a").checked == true) {
			document.getElementById("aa").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("aa").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("a").checked == true) {
			document.getElementById("aa").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (otazka.odpoved.indexOf("b") > -1) {
		if (document.getElementById("b").checked == true) {
			document.getElementById("bb").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("bb").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("b").checked == true) {
			document.getElementById("bb").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (otazka.odpoved.indexOf("c") > -1) {
		if (document.getElementById("c").checked == true) {
			document.getElementById("cc").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("cc").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("c").checked == true) {
			document.getElementById("cc").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (otazka.odpoved.indexOf("d") > -1) {
		if (document.getElementById("d").checked == true) {
			document.getElementById("dd").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("dd").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("d").checked == true) {
			document.getElementById("dd").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}

	if (document.getElementById("a").checked == false &&
			document.getElementById("b").checked == false &&
			document.getElementById("c").checked == false &&
			document.getElementById("d").checked == false) {
		if (otazka.odpoved.indexOf("b") > -1)
			document.getElementById("bb").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("c") > -1)
			document.getElementById("cc").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("d") > -1)
			document.getElementById("dd").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("a") > -1)
			document.getElementById("aa").style.backgroundColor = 'LightGreen';
		ok = false;
	}

	if (!ok) {
		var odpovedSpravna;
		odpovedSpravna = '<p style="color:red">Špatně!</p>' + 'Správná odpověď je: ';
		var pismenoSpravne = new Array();
		if (otazka.odpoved.indexOf("a") > -1)
			pismenoSpravne.push(document.getElementById("a").value);
		if (otazka.odpoved.indexOf("b") > -1)
			pismenoSpravne.push(document.getElementById("b").value);
		if (otazka.odpoved.indexOf("c") > -1)
			pismenoSpravne.push(document.getElementById("c").value);
		if (otazka.odpoved.indexOf("d") > -1)
			pismenoSpravne.push(document.getElementById("d").value);
		pismenoSpravne.sort();
		
		document.getElementById("check").innerHTML = odpovedSpravna + pismenoSpravne.toString();
		spatne++;
		spatneOtazky.push(otazka);
	} else {
		document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
		spravne++;
	}

	if (otazky.length > n) {
		odpovezene.push(x);
		n++;

		//document.getElementById("end").style.visibility = 'hidden';
		//document.getElementById("dalsi").style.visibility = 'visible';
	}

	document.getElementById("end").value = "Další";
	document.getElementById("end").onclick = nactiOtazku;

	/*else{
	 document.getElementById("form").remove();
	 document.getElementById("otazkaCislo").remove();;
	 document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' + 
	 '<p>Špatných odpovědí: ' + spatne + '</p>'
	 }*/
}

function zalozOtazky() {
	pridejOtazku(
			"Konečný výsledek, dosažená kvalita výkonu, je výslednicí vztahu:",
			"rozvinutosti psychických funkcí jedince ",
			"složitosti, náročnosti výkonu ",
			"míry tvůrčích schopností jedince ",
			"uvolněné síly (intenzity) motivace ",
			"bd");
	pridejOtazku(
			"Mezi čtyři hlavní druhy konfliktů nepatří:",
			"konflikt dvou negativních cílů ",
			"konflikt meziskupinový ",
			"konflikt cílů vlastních a skupinových ",
			"dvojitý konflikt kladných a záporných cílů ",
			"bc");
	pridejOtazku(
			"Mezi vnitřní činitele tvůrčího zvládání životních úkolů dle Balcara patří:",
			"pružnost ve způsobech poznávání ",
			"určitá míra inteligence ",
			"sebetranscendence a přesah vlastního já ",
			"sebeovládání a odpovědnost",
			"abd");
	pridejOtazku(
			"Mezi charakteristiky sebepojetí nepatří:",
			"je součástí temperamentu jako složky osobnosti ",
			"sebehodnocení, obraz sebe samého",
			"stabilita-labilita osobnosti ",
			"pocit vlastní hodnoty ",
			"ac");
	pridejOtazku(
			"Mezi charakteristiky anticipace nepatří:",
			"asociativní zákony ",
			"orientace na přítomnost ",
			"míra frustrační tolerance ",
			"očekávání budoucích úspěchů či neúspěchů ",
			"abc");
	pridejOtazku(
			"Které z uvedených možností patří mezi bariéry tvořivosti?",
			"sociální bariéry ",
			"emocionální bariéry ",
			"kognitivní bariéry ",
			"konativní bariéry ",
			"abc");
	pridejOtazku(
			"Madsen při analýze teorií motivace neuvádí:",
			"afiliativní motivy ",
			"terciární motivy ",
			"primární motivy ",
			"aspirační motivy ",
			"abd");
	pridejOtazku(
			"Mezi základní znaky temperamentu dle H. J. Eysencka patří:",
			"používání ego-obranných mechanismů regrese a introjekce ",
			"celkové zaměření duševních dějů jedince do nitra nebo na okolní svět ",
			"celkové emocionální ladění duševních dějů libost - nelibost ",
			"trvání reakce po skončení podnětu ",
			"bcd");
	pridejOtazku(
			"Mezi Maslowovy potřeby, uváděné v pyramidě potřeb, nepatří:",
			"potřeba anticipace ",
			"potřeba seberealizace ",
			"potřeba úcty a uznání ",
			"potřeba moci ",
			"ad");
	pridejOtazku(
			"Které z uvedených typů uvádí I. P. Pavlov jako typy VNČ?",
			"silný nevyrovnaný typ ",
			"slabý vyrovnaný pohyblivý typ ",
			"silný vyrovnaný pohyblivý typ ",
			"silný vyrovnaný nepohyblivý typ ",
			"acd");
	pridejOtazku(
			"Která z uvedených charakteristik nepopisuje motivaci?",
			"jedná se o prvotní složku osobnosti, prapůvodní psýché ",
			"jedná se o proces, ve kterém se uvolňuje určité množství energie a směřuje k určitému cíli ",
			"je součástí temperamentu jako složky osobnosti ",
			"jedná se o reaktivaci sexuálních pudů, které v době latence dřímaly ",
			"acd");
	pridejOtazku(
			"Mezi překážky, zdroje frustrací, nepatří:",
			"anticipační překážka ",
			"latentní překážka ",
			"vnitřní aktivní překážka ",
			"vnější aktivní překážka ",
			"ab");
	pridejOtazku(
			"Mezi charakteristiky osobnosti typu A dle Friedmanna a Rosenmana nepatří:",
			"schopnost užívat si přítomnosti tak, že zapomenou na čas ",
			"schopnost relaxace, klidu a pasivního odpočinku ",
			"delegování a předávání kompetencí ",
			"multifázové myšlení a jednání ",
			"abc");
	pridejOtazku(
			"Mezi fáze tvůrčího procesu dle H. Poincaré patří:",
			"stimulace ",
			"příprava ",
			"inkubace ",
			"verifikace ",
			"bcd");
	pridejOtazku(
			"Které z uvedených charakteristik popisují osobnost typu B dle Friedmana a Rosenmana?",
			"perfekcionismus a boj s časem ",
			"rozvážná klidná uvolněná osobnost ",
			"hrozí ji menší riziko stresu a srdečných chorob ",
			"nutkání přepracovávat se ",
			"bc");
	pridejOtazku(
			"Motivace v rámci osobnosti nezahrnuje:",
			"vnitřní motivy ",
			"paměťové procesy, paměťové stopy ",
			"představy a pozornost ",
			"vnější pobídky a cíle ",
			"bc");
	pridejOtazku(
			"Které z uvedených potřeb uvádí ve svém výčtu Madsen?",
			"primární motivy ",
			"sekundární motivy ",
			"deficientní motivy",
			"afektivní motivy ",
			"abd");
	pridejOtazku(
			"Mezi základní, vrozené vlastnosti nervových procesů dle I. P. Pavlova nepatří:",
			"aktivita nervových procesů ",
			"pohyblivost nervových procesů ",
			"orientace nervových procesů ",
			"mohutnost nervových procesů (psychické mohutnosti)",
			"acd");
	pridejOtazku(
			"Mezi základní znaky temperamentu nepatří:",
			"celkové zaměření duševních dějů jedince do nitra nebo na okolní svět",
			"trvání reakce po skončení podnětu ",
			"formuje se v činnostech, které probíhají v sociální skupině ",
			"jeho úroveň se zhoršuje při překročení optimální motivační úrovně ",
			"cd");
	pridejOtazku(
			"Mezi základní znaky temperamentu dle H. J. Eysencka patří:",
			"celkové emocionální ladění duševních dějů libost - nelibost ",
			"celkové zaměření duševních dějů jedince do nitra nebo na okolní svět ",
			"používání ego-obranných mechanismů regrese a introjekce ",
			"trvání reakce po skončení podnětu ",
			"abd");
	pridejOtazku(
			"Mezi základní druhy konfliktu nepatří:",
			"konflikt emocí ",
			"konflikt mezi kladným a záporným cílem ",
			"konflikt potřeb ",
			"konflikt moci ",
			"acd");
	pridejOtazku(
			'Mezi autory výroků v seznamech známého "Winner-Loser testu" nepatří:',
			"S. Freud ",
			"A. Maslow ",
			"C. G. Jung ",
			"E. Berne ",
			"ac");
	pridejOtazku(
			'Mezi autory výroků v seznamech známého "Winner-Loser testu" nepatří:',
			"A. Maslow",
			"D. Carnegie",
			"A. Adler ",
			"H. Selye",
			"bcd");
	pridejOtazku(
			"Termín afiliace neoznačuje:",
			"tvoří motivační složku osobnosti ",
			"opak hostility ",
			"umožňuje kontrolu a řízení jedincova jednání, je spojena s temperamentem ",
			"kladný přátelský vztah k lidem ",
			"ac");
	pridejOtazku(
			"Které z uvedených termínů používá H. J. Eysenck ve své typologii temperamentu?",
			"intuice ",
			"extraverze ",
			"introverze ",
			"labilita ",
			"bcd");
	pridejOtazku(
			"Mezi emocionální bariery tvořivosti nepatří:",
			"neschopnost nést riziko neúspěchu neobvyklých řešení ",
			"tlak ke konformitě ve skupině ",
			"strach, že udělám chybu ",
			"sociální skupinové normy ",
			"bd");
	
}

function pridejOtazku(otazka, a, b, c, d, odpoved) {
	var q = {
		a: a,
		b: b,
		c: c,
		d: d,
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}