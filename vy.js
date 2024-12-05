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
		document.getElementById("dalsi").style.visibility = "hidden";

		document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' +
				'<p>Špatných odpovědí: ' + spatne + '</p>' +
				'<button id="spatneOtazky" type="button" onclick=nactiSpatne()>Znovu špatné otázky</button>';
		return;
	}

	while (true) {
		x = Math.floor((Math.random() * otazky.length));
		
		if (odpovezene.indexOf(x) > 0)
			continue;
		else
			odpovezene.push(x);
			break;
	}

	var used = new Array();
	var rand;

	document.getElementById('otazkaCislo').innerHTML = "Otázka " + (n + 1) + " z " + (otazky.length);
	document.getElementById("check").style.visibility = 'hidden';
	document.getElementById("dalsi").style.visibility = 'hidden';
	otazka = otazky[x];
	//document.getElementById('otazka').innerHTML = '<div id="form">' + otazka.otazka + '<br>';

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
				str2 += '<br><input id="a" type="radio" name="a" value="a">' + '<span id="aa"> ' + otazka.a + '</span>';
				break;
			case 1:
				str2 += '<br><input id="b" type="radio" name="a" value="a">' + '<span id="bb"> ' + otazka.b + '</span>';
				break	
			case 2:
				str2 += '<br><input id="c" type="radio" name="a" value="a">' + '<span id="cc"> ' + otazka.c + '</span>';
				break;
			case 3: 
				str2 += '<br><input id="d" type="radio" name="a" value="a">' + '<span id="dd"> ' + otazka.d + '</span>';
				break;
		}
		
		
	} while (used.length != 4)
	
	str2 += '<br><br><input id="end" type="button" value="Odpovědět" onclick=check()>' + '</div>';
	document.getElementById('otazka').innerHTML = str2;
	
/*
	document.getElementById('otazka').innerHTML = '<div id="form">' + otazka.otazka + '<br>' + 
	 '<br><input id="a" type="radio" name="a" value="a">' + '<span id="aa"> ' + otazka.a + '</span>' +
	 '<br><input id="b" type="radio" name="a" value="a">' + '<span id="bb"> ' + otazka.b + '</span>' +
	 '<br><input id="c" type="radio" name="a" value="a">' + '<span id="cc"> ' + otazka.c + '</span>' +
	 '<br><input id="d" type="radio" name="a" value="a">' + '<span id="dd"> ' + otazka.d + '</span>' + '<br>' +
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
	//document.getElementById("check").innerHTML = document.getElementById("id1").value;
	document.getElementById("check").style.visibility = 'visible';
	if (document.getElementById("a").checked == true) {
		if (otazka.a == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("aa").style.backgroundColor = 'LightCoral';
			if (otazka.b == otazka.odpoved)
				document.getElementById("bb").style.backgroundColor = 'LightGreen';
			else if (otazka.c == otazka.odpoved)
				document.getElementById("cc").style.backgroundColor = 'LightGreen';
			else if (otazka.d == otazka.odpoved)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
					'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (document.getElementById("b").checked == true) {
		if (otazka.b == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("bb").style.backgroundColor = 'LightCoral';
			if (otazka.a == otazka.odpoved)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';
			else if (otazka.c == otazka.odpoved)
				document.getElementById("cc").style.backgroundColor = 'LightGreen';
			else if (otazka.d == otazka.odpoved)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
					'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (document.getElementById("c").checked == true) {
		if (otazka.c == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("cc").style.backgroundColor = 'LightCoral';
			if (otazka.b == otazka.odpoved)
				document.getElementById("bb").style.backgroundColor = 'LightGreen';
			else if (otazka.a == otazka.odpoved)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';
			else if (otazka.d == otazka.odpoved)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
					'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (document.getElementById("d").checked == true) {
		if (otazka.d == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("dd").style.backgroundColor = 'LightCoral';
			if (otazka.b == otazka.odpoved)
				document.getElementById("bb").style.backgroundColor = 'LightGreen';
			else if (otazka.c == otazka.odpoved)
				document.getElementById("cc").style.backgroundColor = 'LightGreen';
			else if (otazka.a == otazka.odpoved)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
					'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else {
		if (otazka.b == otazka.odpoved)
			document.getElementById("bb").style.backgroundColor = 'LightGreen';
		else if (otazka.c == otazka.odpoved)
			document.getElementById("cc").style.backgroundColor = 'LightGreen';
		else if (otazka.d == otazka.odpoved)
			document.getElementById("dd").style.backgroundColor = 'LightGreen';
		else if (otazka.a == otazka.odpoved)
			document.getElementById("aa").style.backgroundColor = 'LightGreen';
		document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
		spatne++;
		spatneOtazky.push(otazka);
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
			"Agresivní jednání je podle transakční analýzy základní stav ego:",
			"rodič",
			"dospělí",
			"dítě",
			"agresor",
			"rodič");
	pridejOtazku(
			"Asert doved, při které přijímáme naše chyby a omyly aniž bychom se museli omlouvat nazýv:",
			"negativní asertivita",
			"pozitivní asertivita",
			"neutrální asertivita",
			"přijatelný kompromis",
			"negativní asertivita");
	pridejOtazku(
			"Asert doved, při které sdělujeme skutečné aspekty (+ i -) naší osobnosti nebo chování se nazýv: ",
			"sebeotevření",
			"zpověď",
			"volné informace",
			"důvěra",
			"sebeotevření");
	pridejOtazku(
			"Asert dovedn při které nereagujeme na manipulat kritiku a jenom dáme najevo, že jsme slyšeli nazýváme:",
			"selektivní ignorování",
			"přijatelný kompromis",
			"základní",
			"sebeotevření",
			"selektivní ignorování");
	pridejOtazku(
			"(C) Asertivní jednání je podle transakční analýzy základní stav ego:",
			"dospělí",
			"dítě",
			"rodič",
			"prarodič",
			"dospělí");
	pridejOtazku(
			"Dlouhý upřený pohled bývá v neverbální komunikaci často interpretován jako výraz:",
			"agresivity",
			"unavení",
			"odevzdanosti",
			"nepochopení",
			"agresivity");
	pridejOtazku(
			"(O) Funkční schémata v sociální kognici nejsou vytvářena na základě: ",
			"tvořivosti",
			"vnášení zkušeností",
			"vnímání",
			"paměti",
			"tvořivosti");
	pridejOtazku(
			"(C) Haló efekt je efekt",
			"prvního silného dojmu",
			"stále se opakujícího traumatizujícího zážitku",
			"efekt vznikající při altruismu",
			"stereotypního chování",
			"prvního silného dojmu");
	pridejOtazku(
			"Haptika patří do komunikačních prostředků: ",
			"taktilních",
			"taktických",
			"textilních",
			"vizuálně-sluchových",
			"taktilních");
	pridejOtazku(
			"(O) Haptika se zabývá:",
			"doteky",
			"asertivními dovednostmi",
			"zvuky",
			"postoji",
			"doteky");
	pridejOtazku(
			"Ilustrátorům se jinak říká gesta:",
			"taktující",
			"názorné",
			"obrazné",
			"přiřazující",
			"taktující");
	pridejOtazku(
			"Implicitní teorie osobnosti je",
			"laická chyba v sociální percepci",
			"efekt prvního dojmu",
			"efekt novosti",
			"perfetní odhad v sociálním prostředí",
			"laická chyba v sociální percepci");
	pridejOtazku(
			"(O) Je pravdivý výrok, že při oportunní konformitě jedinec se skupinou vnitřně souhlasí, ale navenek se tak nechová?",
			"ano",
			"ne",
			"tento výrok je pravdivý jen u některých jedinců",
			"tento výrok není pravdivý jen u některých jedinců",
			"ne");
	pridejOtazku(
			"Konflikt mezi dvěma lidmi nazýváme konflikt",
			"interpersonální",
			"intrapersonální",
			"společenský",
			"sociální",
			"interpersonální");
	pridejOtazku(
			"(O) Kontrakonformní typ chování je:",
			"druh nekonformního chování",
			"příklad oportunní konformity",
			"spontánní, krátkodobý projev",
			"chování nezávislého jedince",
			"druh nekonformního chování");
	pridejOtazku(
			"Kratší trvání zrakového kontaktu bývá v neverbální komunikaci často presentováno jako výraz: ",
			"nejistoty",
			"nezájmu",
			"agresivity",
			"jistoty",
			"nejistoty");
	pridejOtazku(
			"Mezi specifické efekty sociální percepce nepatří:",
			"efekt přesnost",
			"efekt prvního dojmu",
			"efekt novosti",
			"haló-efekt",
			"efekt přesnost");
	pridejOtazku(
			"(O) Malá sociální skupina, ke které jedinec skutečně přísluší se nazývá:",
			"členská",
			"neformální",
			"referenční",
			"formální",
			"členská");
	pridejOtazku(
			"Metoda sociální psychologie zaměřená na zjišťování sociál. emocionálních vztahů mezi členy malých skupin se nazývá",
			"sociometrie",
			"sociologie",
			"skupinologie",
			"entropie",
			"sociometrie");
	pridejOtazku(
			"Mezi asertivní dovednosti nepatří: ",
			"konfrontativní asertivita ",
			"negativní asertivita",
			"negativní dotazování",
			"pokažená gramofonová deska",
			"konfrontativní asertivita ");
	pridejOtazku(
			"Mezi činnosti techniky mluveného projevu nepatří",
			"mluvení",
			"dýchání)",
			"tvoření hlasu",
			"tvoření hlásek",
			"mluvení");
	pridejOtazku(
			"(O) Mezi gesta nepatří:",
			"iluminátory",
			"ilustrátory",
			"symboly",
			"bloky",
			"iluminátory");
	pridejOtazku(
			"(C) Mezi hraniční strategie řešení konfliktu patří:",
			"asertivita",
			"agresivita",
			"pasivita",
			"soupeření",
			"soupeření");
	pridejOtazku(
			"Mezi chyby ze strany příjemce při verbální komunikaci nepatří",
			"nerespektování zpětné vazby",
			"nepozornost",
			"nezájem",
			"citové předsudky příjemce ke sdělení",
			"nerespektování zpětné vazby");
	pridejOtazku(
			"Mezi chyby ze strany výdejce při verbální komunikaci nepatří: ",
			"nezájem",
			"nerespektování zpětné vazby",
			"nesoulad mezi verbální a neverbální informací",
			"bílý šum",
			"nezájem");
	pridejOtazku(
			"(O) Mezi taktické prostředky, kterými jsou naplňovány strategie řešení konfliktu nepatří:",
			"přísaha",
			"trest",
			"inspekce",
			"gestikulace",
			"gestikulace");
	pridejOtazku(
			"Mezi typy asertivity nepatří asertivita: ",
			"negativní",
			"základní",
			"konfrontativní",
			"empatická",
			"negativní");
	pridejOtazku(
			"Mezi zde vyjmenov laické chyby „haló efekt; efekt novosti; implicitní teorie osobnosti; stereotyp“ v soc. percepci nepatří:",
			"1 výraz",
			"2 výrazy",
			"3 výrazy",
			"všechny výrazy",
			"1 výraz");
	pridejOtazku(
			"(C) Mluvčí při verbální komunikaci by měl zrakem sledovat posluchače alespoň z",
			"0,5",
			"0,3",
			"0,8",
			"0,1",
			"0,5");
	pridejOtazku(
			'Mýtus "hroší kůže" v asertivitě spočívá v názoru, že prosazováním sebe sama asertivně člověk',
			"nebere ohled na druhé",
			"předpokládá neústupnost",
			"chybně soudí, že si každý  bude dělat, co chce",
			"zešedne",
			"nebere ohled na druhé");
	pridejOtazku(
			"Mýtus asertivity, při kterém se předpokládá, že na asertivitu doplatíme osamocením se nazývá mýtus:",
			'"Niobé"',
			'"Niké"',
			'"Létó"',
			'"Nomia"',
			'"Niobé"');
	pridejOtazku(
			"Mýtus permanentního zneužití asertivity se nazývá:",
			'"šikmé plochy"',
			'"Niobé"',
			'"kamikadze"',
			'"nemorální anarchie"',
			'"šikmé plochy"');
	pridejOtazku(
			"Naslouchající při verbální komunikaci by měl zrakem sledovat mluvčího z:",
			"80-90%",
			"100%",
			"40-60%",
			"50%",
			"80-90%");
	pridejOtazku(
			"Nejblížší zóna osobního prostoru podle Halla se nazývá zóna ",
			"intimní",
			"osobní",
			"nedotknutelná",
			"předintimní",
			"intimní");
	pridejOtazku(
			"Nekomplikované vyjádření pocitů, představ, myšlenek, názorů či pocitů charakterizuje asertivitu:",
			"základní",
			"empatická",
			"pocitová",
			"stupňovaná",
			"základní");
	pridejOtazku(
			"Nezájem u člověka neverbálně identifikujeme podle",
			"odklonění",
			"vyskočení",
			"naklonění",
			"otočení o 360°",
			"odklonění");
	pridejOtazku(
			"Obsah komunikace v rámci struktury komunikace je odborně nazýván",
			"komuniké",
			"komunikant",
			"zpráva",
			"komuniktor",
			"komuniké");
	pridejOtazku(
			"Osobnostní faktory způsobují, že každý vnímá stejné skutečnosti trochu jinak, tento vliv označujeme termínem osobnostní",
			"filtr",
			"síto",
			"zrcadlo",
			"okno",
			"filtr");
	pridejOtazku(
			"Pasivní jednání je podle transakční analýzy základní stav ego:",
			"dítě",
			"dospělí",
			"rodič",
			"ignorant",
			"dítě");
	pridejOtazku(
			"Podle míry a způsobu ztotožnění se se skupinou můžeme rozdělit chování jedince na:",
			"konformní a nekonformní",
			"konvergentní a divergentní",
			"přátelské a nepřátelské",
			"pravé a nepravé",
			"konformní a nekonformní");
	pridejOtazku(
			"Pokud jedinec aktivně odporuje skupině, projevuje se výrazně negativisticky, nepřátelsky a vzdorovitě, můžeme jeho chování charakterizovat jako",
			"kontrakonformní",
			"agresivní",
			"konformní",
			"kontraagresivní",
			"kontrakonformní");
	pridejOtazku(
			"Pokud protějšek stále porušuje naše práva přecházíme podle dělení asertivity k asertivitě:",
			"stupňované",
			"emocionální",
			"základní",
			"oprávněné",
			"stupňované");
	pridejOtazku(
			"(C) Poměr mezi verbální a neverbální komunikaci je podle autorů odborných publikací přibližně:",
			"60 : 40",
			"40 : 60",
			"10 : 90",
			"90 : 10",
			"40 : 60");
	pridejOtazku(
			"(C) Proxemika je",
			"ozmístění osob v prostoru",
			"postoj",
			"pohledy",
			"podání ruky",
			"ozmístění osob v prostoru");
	pridejOtazku(
			"Při charakterizování mimiky můžeme obličejovou část rozdělit na zóny",
			"tři",
			"ze ji rozdělit, ale u každého jedince na různý počet",
			"nelze rozdělit",
			"dvě",
			"tři");
	pridejOtazku(
			"Při konfrontativní asertivitě",
			"žádáme dodatečné informace",
			"útočíme na partnera",
			"vyhledáváme neshody",
			"ignorujeme dodatečné informace",
			"žádáme dodatečné informace");
	pridejOtazku(
			"Při oportunní konformitě jedinec se skupinou:",
			"souhlasí pouze navenek",
			"souhlasí zcela",
			"nesouhlasí zcela",
			"nesouhlasí pouze navenek",
			"souhlasí pouze navenek");
	pridejOtazku(
			"Při pravé konformitě jedinec se skupinou",
			"souhlasí vnitřně i navenek",
			"nesouhlasí zcela",
			"souhlasí pouze s jedinci napravo",
			"souhlasí pouze navenek",
			"souhlasí vnitřně i navenek");
	pridejOtazku(
			"Rodina je z hlediska dělení malé sociální skupiny příkladem skupiny ",
			"neformální",
			"formální",
			"referenční",
			"členská",
			"neformální");
	pridejOtazku(
			"Skupina, do které by jedinec příslušet chtěl nebo ke které by náležet nechtěl se nazývá:",
			"referenční",
			"členská",
			"malá skupina",
			"dyáda",
			"referenční");
	pridejOtazku(
			"(O) Skupina, kde se všichni její členové neznají se nazývá skupina",
			"velká sociální skupina",
			"formální skupina",
			"referenční skupina",
			"malá sociální skupina",
			"velká sociální skupina");
	pridejOtazku(
			"(C) Skupinové normy jsou pro všechny členy skupiny",
			"závazné",
			"vyžadované, pokud s nimi souhlasí všichni členové v hlasování",
			"doporučené",
			"nezávazné",
			"závazné");
	pridejOtazku(
			"Skupinové normy kontrolují v rámci skupinových interakcí ",
			"postoje a chování členů skupiny",
			"vzhled členů skupiny",
			"finanční konta členů skupiny",
			"bezúhonost členů skupiny",
			"postoje a chování členů skupiny");
	pridejOtazku(
			"Sociální afiliace úzce nesouvisí s:",
			"nevědomím jedince",
			"ověřením, co je správné vhodné či žádoucí",
			"osvojováním nových zážitků",
			"uspokojením",
			"nevědomím jedince");
	pridejOtazku(
			"(C) Sociální pozice je",
			"místo každého jedince ve struktuře společnosti",
			"místo, které zastává komunikant vůči komunikátorovi",
			"výraz označující stupeň (pozici) v Maslowově pyramidě potřeb",
			"místo, které zastává komunikátor vůči komunikantovi",
			"místo každého jedince ve struktuře společnosti");
	pridejOtazku(
			"Sociální schémata, týkající se spíše formálních pravidel jsou: ",
			"procedurální sociální schémata",
			"schémata pravidel",
			"schémata rolí",
			"formální schémata",
			"procedurální sociální schémata");
	pridejOtazku(
			"Sociální status je relativní výška sociální:",
			"pozice",
			"stylizace chování",
			"integrity",
			"jistoty",
			"pozice");
	pridejOtazku(
			"Symboly (typ gest) mohou řeč:",
			"úplně nahradit",
			"částečně nahradit",
			"nahradit pouze velmi omezeně",
			"nenahradit",
			"úplně nahradit");
	pridejOtazku(
			"Tlak ke konformitě a odmítání odlišností:",
			"potlačuje vlastní tvořivost",
			"rozvýjejí vlastní tvořivost",
			"zvyšují štěstí",
			"zvyšuje odlišnost",
			"potlačuje vlastní tvořivost");
	pridejOtazku(
			"(O) Úsudek o druhém , který je determinován pozdější informací, která je o posuzované osobě získána je dán:",
			"efektem novosti",
			"efektem přesnosti",
			"haló efektem",
			"efektem prvního dojmu",
			"efektem novosti");
	pridejOtazku(
			"V plné struktuře komunikační sítě je role vedoucího definovatelná:",
			"nelze ji určit",
			"zcela určitě",
			"na 50%",
			"lze, ale velmi obtížně",
			"nelze ji určit");
	pridejOtazku(
			"V rámci struktury komunikace toho komu je komunikace určena odborně nazýváme:",
			"komunikant",
			"příjemce",
			"komuniké",
			"komunikátor",
			"komunikant");
	pridejOtazku(
			"(O) V problematice sociální kognice rozlišujeme několik sociálních schémat. Která z následujících tam nepatří:",
			"schémata rodiny",
			"procedurální sociální schémata",
			"schémata osob",
			"schémata rolí",
			"schémata rodiny");
	pridejOtazku(
			"V rámci struktury komunikace toho kdo mluví odborně nazýváme:",
			"komunikátor",
			"komuniké",
			"komunikant",
			"hlasatel",
			"komunikátor");
	pridejOtazku(
			"Ve vidlicové struktuře komunikační sítě je role vedoucího definovatelná",
			"s vysokou pravděpodobností",
			"nelze určit",
			"s nízkou pravděpodobností",
			"pravděpodobnost se počítá podle počtu bodců vidlí (strukt. vidlí zemědělského typu č. 4 má pravd. 25%)",
			"s vysokou pravděpodobností");
	pridejOtazku(
			"Velký počet komunikačních kanálů poskytuje struktura komunikační sítě ",
			"plná",
			"řetězová",
			"hvězdicovitá",
			"vidlicovitá",
			"plná");
	pridejOtazku(
			"Výraz  sociální kognice může být částečně nahrazen výrazem:",
			"sociální percepce",
			"sociální prekognice",
			"asociální kognice",
			"sociální korekce",
			"sociální percepce");
	pridejOtazku(
			"Zájem člověka je neverbálně sdělován:",
			"nakročením k objektu zájmu",
			"nesmyslným žvatláním",
			"otočením o 90°",
			"odkloněním",
			"nakročením k objektu zájmu");
	pridejOtazku(
			"Zakotvení v psychologii vnímání znamená:",
			"automatické porovnávání vnímaného s tím, co už zná",
			"vyhození kotvy",
			"zůstání na jednom místě a nemožnost se pohnout",
			"zkreslení vnímání tím, co si přejeme, nikoliv skutečností",
			"automatické porovnávání vnímaného s tím, co už zná");
	pridejOtazku(
			"Zrakový kontakt je neverbální komunikace prostřednictvím:",
			"pohledů",
			"gest",
			"symbolů",
			"náhledů",
			"pohledů");
	pridejOtazku(
			"(O) Schopnost vcítit se do druhého člověka, vžít se do jeho situace nazýváme:",
			"empatií",
			"altruismem",
			"intuicí",
			"sociální afiliace",
			"empatií");
	
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