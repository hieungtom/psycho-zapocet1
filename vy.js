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
		if (odpovezene.indexOf(x) >= 0)
			;
		else
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
			"Předměty ve světě kolem nás mají určitou hodnotu motivační, jsou-li přitažlivé a snažíme se je získat mluvíme o",
			"anticipaci ",
			"apetenci ",
			"anotaci ",
			"averzi ",
			"apetenci ");
	pridejOtazku(
			"Mezi psychické procesy nepatří:",
			"vnímání ",
			"temperament ",
			"myšlení ",
			"procesy paměti ",
			"temperament ");
	pridejOtazku(
			"Úroveň aktuální připravenost jedince k tomu, aby mohl probíhat určitý duševní děj je",
			"psychický stav ",
			"psychický proces ",
			"duševní proces ",
			"dispozice jedince ",
			"psychický stav ");
	pridejOtazku(
			"Schopnost pohotově přizpůsobovat a užívat svoje vědomosti a zkušenosti v nových situacích se označuje termínem",
			"plynulost ",
			"originalita ",
			"citlivost ",
			"flexibilita ",
			"flexibilita ");
	pridejOtazku(
			"Mezi vlastnosti divergentního myšlení dle Guilforda nepatří:",
			"redefinice ",
			"verifikace ",
			"senzitivita ",
			"fluence ",
			"verifikace ");
	pridejOtazku(
			"Mezi psychické stavy nepatří",
			"inteligence ",
			"pozornost ",
			"nálada ",
			"připravenost k vnímání ",
			"inteligence ");
	pridejOtazku(
			"K lidské motivaci patří očekávání vzdálených úspěchů či neúspěchů, vzdálených cílů a událostí podle kterých se řídí, jde o",
			"princip plánování ",
			"princip zvyšování efektivnosti ",
			"princip slasti ",
			"princip anticipace ",
			"princip anticipace ");
	pridejOtazku(
			"Motivace je proces, ve kterém se uvolňuje",
			"myšlení ",
			"určité množství energie ",
			"temperament ",
			"frustrace ",
			"určité množství energie ");
	pridejOtazku(
			"Jedinec k přežití potřebuje udržovat složitou rovnováhu se svým prostředím, odchylky od této rovnováhy pociťujeme jako",
			"nadbytek ",
			"nedostatek ",
			"potřeby ",
			"cíl ",
			"potřeby ");
	pridejOtazku(
			"Člověk vynakládá tím více úsilí tělesného i duševního čím je",
			"motivace vzdálenější ",
			"motivace nebezpečnější ",
			"motivace sociálně atraktivnější ",
			"motivace silnější ",
			"motivace silnější ");
	pridejOtazku(
			"Dosažená kvalita výkonu, výsledek, je výslednicí vztahu uvolněné intenzity motivace a",
			"náročnosti výkonu ",
			"snahy jedince ",
			"vnitřní potřeby ",
			"výši odměny ",
			"náročnosti výkonu ");
	pridejOtazku(
			"Předměty ve světě kolem nás mají určitou hodnotu motivační, jsou-li přitažlivé a snažíme se je získat mluvíme o",
			"averzi ",
			"anticipaci ",
			"apetenci ",
			"anotaci ",
			"apetenci ");
	pridejOtazku(
			"Porovnejte antické temperamentové typy s typy vyšší nervové činnosti podle I. P. P. slabý typ odpovídá",
			"melancholikovi ",
			"sangvinikovi ",
			"cholerikovi ",
			"flegmatikovi ",
			"melancholikovi ");
	pridejOtazku(
			"Příčinou mnoha nedorozumění a nepřátelského jednání zvláště mezi odlišnými skupinami bývají",
			"zájmy ",
			"předsudky ",
			"pocity apetence ",
			"postoje ",
			"předsudky ");
	pridejOtazku(
			"Ve vrozené výbavě každého jedince jsou určité předpoklady, říkáme jim",
			"vlohy ",
			"schopnosti ",
			"vědomosti ",
			"dovednosti ",
			"vlohy ");
	pridejOtazku(
			"Která z uvedených souvislostí není v psychologii spojována s termínem vědomí?",
			'lidské "jáství", vědomí sebe sama ',
			"stav bdělosti ",
			"osobnostní charakteristiky ",
			"orientovaná pozornost ",
			"osobnostní charakteristiky ");
	pridejOtazku(
			"Do dělení stresorů podle Evy Rheinwaldové patří stresory:",
			"emoční ",
			"tělesné ",
			"orální ",
			"duševní ",
			"emoční ");
	pridejOtazku(
			"Mezi vnitřní činitele ovlivňující tvořivost nepatří",
			"odhodlanost zkoušet nové ",
			"myšlenková pružnost ",
			"vyjimečná paměť ",
			"schopnost překonávat strach ",
			"vyjimečná paměť ");
	pridejOtazku(
			'Do termínu "profil osobnosti" nespadá tato charakteristika:',
			"charakter ",
			'"Jaký člověk je?" ',
			'"Co člověk chce?" ',
			"temperament ",
			'"Co člověk chce?" ');
	pridejOtazku(
			"Lidé si stanovují různě vysoké cíle, mluvíme o",
			"asociační úrovni ",
			"anticipační úrovni ",
			"aspirační úrovni ",
			"optimální úrovni ",
			"aspirační úrovni ");
	pridejOtazku(
			"Schopnost plynule tvořit, je označována jako",
			"propracování ",
			"flexibilita ",
			"fluence ",
			"originalita ",
			"fluence ");
	pridejOtazku(
			"Motivace je proces, ve kterém se uvolňuje",
			"myšlení ",
			"temperament ",
			"určité množství energie ",
			"frustrace ",
			"určité množství energie ");
	pridejOtazku(
			"Mezi vlastnosti divergentního myšlení dle Guilforda nepatří:",
			"fluence ",
			"flexibilita ",
			"redefinice ",
			"inkubace ",
			"inkubace ");
	pridejOtazku(
			"Lidské cíle se často dostávají do konfliktů, nepatří mezi ně",
			"konflikt dvou kladných cílů ",
			"konflikt silného a slabého cíle ",
			"konflikt kladného a záporného cíle ",
			"konflikt dvou záporných cílů ",
			"konflikt silného a slabého cíle ");
	pridejOtazku(
			"Walter Canon nazval poplachovou reakci organismu na stres jako reakci:",
			"útěku nebo útoku ",
			"akce nebo reakce ",
			"výhry nebo prohry ",
			"vyrovnání nebo selhání ",
			"útěku nebo útoku ");
	pridejOtazku(
			"Určitý stupeň predikce chování jedince umožňuje relativně stálý celek",
			"sebevědomí pozorovatele ",
			"orientované pozornosti ",
			"paměťových schopností ",
			"dispozic, rysů osobnosti ",
			"dispozic, rysů osobnosti ");
	pridejOtazku(
			"Stres nemůže být vyvolán:",
			"zvýšením homeostázy ",
			"frustrací ",
			"zátěží ",
			"stresorem ",
			"zvýšením homeostázy ");
	pridejOtazku(
			"Stadium, kdy se zkouší, zda je nalezené tvůrčí řešení vhodné v praxi, se označuje termínem",
			"fáze verifikace ",
			"fáze přípravy ",
			"fáze inkubace ",
			"fáze iluminace ",
			"fáze verifikace ");
	pridejOtazku(
			"Stresor je:",
			"psychický stav ",
			"výsledek frustrace ",
			"reakce na něco negativního ",
			"zátěž ",
			"zátěž ");
	pridejOtazku(
			"Z psychologického hlediska osobnost není",
			"člověk jako celek po stránce duševní ",
			"abstraktní pojem jehož nositelem je konkrétní jedinec ",
			"vynikající jedinec ",
			"černá skříňka jejíž obsah je nepoznatelný ",
			"vynikající jedinec ");
	pridejOtazku(
			"Eustres je stres úzce spojený s:",
			"radostným očekáváním ",
			"vyvoláním úžasu ",
			"frustrací ",
			"pocitem úzkosti ",
			"radostným očekáváním ");
	pridejOtazku(
			"Do dělení stresorů podle Evy Rheinwaldové nepatří stresory:",
			"chemické ",
			"ekologické ",
			"biologické ",
			"situační ",
			"ekologické ");
	pridejOtazku(
			"Tlak ke konformitě a odmítání odlišností",
			"potlačuje vlastní tvořivost ",
			"na tvořivost nemá vliv ",
			"vede ke skupinové tvořivosti ",
			"zvyšuje tvořivost ",
			"potlačuje vlastní tvořivost ");
	pridejOtazku(
			"Hans Selye byl",
			"autor mnoha publikací o motivaci ",
			"fyzioterapeut zabývající se relaxací ",
			"představitel psychoanalýzy ",
			"zakladatel nauky o stresu ",
			"zakladatel nauky o stresu ");
	pridejOtazku(
			"Z vrozených vloh se při možnosti procvičování rozvíjejí",
			"schopnosti ",
			"vědomosti ",
			"inteligence ",
			"pocity vlastní hodnoty ",
			"schopnosti ");
	pridejOtazku(
			"Mezi obranné mechanismy projevující se při stresu v zátěžové situaci nepatří:",
			"rigidita ",
			"symbolizace ",
			"represe ",
			"regrese ",
			"symbolizace ");
	pridejOtazku(
			"Dosažená kvalita výkonu, výsledek, je výslednicí vztahu uvolněné intenzity motivace a",
			"vnitřní potřeby ",
			"náročnosti výkonu ",
			"výši odměny ",
			"snahy jedince ",
			"náročnosti výkonu ");
	pridejOtazku(
			"Pro „Katastrofický syndrom“ v teorii o stresu je zažita zkratka:",
			"KS ",
			"SK ",
			"PTSP ",
			"SPTR ",
			"PTSP ");
	pridejOtazku(
			"Vlastní sebehodnocení je závislé především na",
			"porovnávání se s druhými ",
			"úrovni vývoje myšlení ",
			"paměťových schopnostech ",
			"úrovni morální zralosti ",
			"porovnávání se s druhými ");
	pridejOtazku(
			"Čím více vnímáme potřeby druhého, tím více bude on",
			"uspokojovat potřeby skupiny ",
			"uspokojovat naše vlastní ",
			"myslet na sebe ",
			"smát se nám ",
			"uspokojovat naše vlastní ");
	pridejOtazku(
			"Mezi praktické postupy, které mohou zmírnit dopad stresu na zdraví lidí, nepatří:",
			"rozšíření interpersonálních vztahů ",
			'dovednost "vypnout se" ',
			"perfekcionizmus ",
			"vytvoření priorit ",
			"perfekcionizmus ");
	pridejOtazku(
			"Která z uvedených potřeb je součástí Maslowovy pyramidy potřeb:",
			"potřeba introspekce ",
			"potřeba moci ",
			"potřeba bezpečí ",
			"potřeba anticipace ",
			"potřeba bezpečí ");
	pridejOtazku(
			"Pokud se podaří dosáhnout cíle, dochází k poklesu motivačního napětí, prožíváme",
			"úlevu, radost ",
			"frustraci ",
			"neklid ",
			"zklamání ",
			"úlevu, radost ");
	pridejOtazku(
			"Porovnejte silný, vyrovnaný, nepohyblivý typ VNČ s antickými. Tento typ odpovídá",
			"flegmatikovi ",
			"melancholikovi ",
			"cholerikovi ",
			"sangvinikovi ",
			"flegmatikovi ");
	pridejOtazku(
			"Mezi příznaky posttraumatické stresové poruchy nepatří:",
			"stresové reakce a stresory ",
			"vtíravé příznaky ",
			"únikové příznaky ",
			"nadměrné vzrušení ",
			"stresové reakce a stresory ");
	pridejOtazku(
			"Inteligence není",
			"komplexní schopnost vyrovnávat se s životními úkoly a problémy ",
			"obecná schopnost psychického přizpůsobení ",
			"dispozice k myšlení ",
			"obecná schopnost využívat paměť při řešení úkolů ",
			"obecná schopnost využívat paměť při řešení úkolů ");
	pridejOtazku(
			"Schopnost neobvykle zpracovat námět je označována jako",
			"flexibilita ",
			"plynulost ",
			"pružnost ",
			"originalita ",
			"originalita ");
	pridejOtazku(
			"V první fáze nespecifické stresové reakce dochází k vyplavování hormonu:",
			"kortizolu ",
			"progestinu ",
			"adrenalinu ",
			"testosteronu ",
			"adrenalinu ");
	pridejOtazku(
			"Temperament je obecná vlastnost duševní dynamiky jedince, uplatňuje se ve způsobech reagování,",
			"zapamatování ",
			"učení ",
			"myšlení ",
			"prožívání a chování ",
			"prožívání a chování ");
	pridejOtazku(
			"Mezi základní temperamentové typy dle W. Sheldona nepatří:",
			"mezomorfní typ ",
			"ektomorfní typ",
			"endomorfní typ ",
			"amorfní typ ",
			"amorfní typ ");
	pridejOtazku(
			"Do fází Obecného adaptačního syndromu nepatří fáze:",
			"vyčerpání ",
			"poplachová ",
			"útěková ",
			"resistence ",
			"útěková ");
	pridejOtazku(
			"Pozornost je z fyziologického hlediska především",
			"stav aktivace CNS",
			"zvýšená hladina cukru v krvi ",
			"zostřené zrakové vnímání ",
			"aktivace vegetativních funkcí ",
			"stav aktivace CNS");
	pridejOtazku(
			"Z vrozených vloh se při možnosti procvičování rozvíjejí",
			"inteligence ",
			"pocity vlastní hodnoty ",
			"schopnosti ",
			"vědomosti ",
			"schopnosti ");
	pridejOtazku(
			"Mezi vlastnosti pozornosti nepatří:",
			"kolísání pozornosti ",
			"výběrovost pozornosti ",
			"přepojování pozornosti ",
			"intenzita pozornosti ",
			"intenzita pozornosti ");
	pridejOtazku(
			"Lidé si stanovují různě vysoké cíle, mluvíme o",
			"aspirační úrovni ",
			"anticipační úrovni ",
			"asociační úrovni ",
			"optimální úrovni ",
			"aspirační úrovni ");
	pridejOtazku(
			"Fáze, kdy jedinec najednou pochopí podstavu problému a objeví řešení je nazvána",
			"fáze iluminace ",
			"fáze ověření v praxi ",
			"fáze verfifikace ",
			"fáze inkubace ",
			"fáze iluminace ");
	pridejOtazku(
			"Pod osobnostní faktory *filtr osobnosti*, zkreslující naše vnímání skutečností, nepatří",
			"právě působící motivy ",
			"obranné zkreslení ",
			"konvergentní myšlení ",
			"naše stereotypy ve vnímání ",
			"konvergentní myšlení ");
	pridejOtazku(
			"Převrácené chování jako jeden z obranných mechanismů při zvládání stresu se nazývá:",
			"introjekce ",
			"represe ",
			"rigidita ",
			"inverze ",
			"inverze ");
	pridejOtazku(
			"Mezi destruktivní, nevhodné strategie zvládání stresu nepatří:",
			"utišující léky ",
			"pokusit ubrat zátěž, naučit se říci NE ",
			"alkohol, nikotin, návykové látky ",
			"na psychické úrovni ego-obranné mechanismy ",
			"pokusit ubrat zátěž, naučit se říci NE ");
	pridejOtazku(
			"Mezi vlastnosti divergentního myšlení dle Guilforda nepatří:",
			"fluence ",
			"flexibilita ",
			"inkubace ",
			"redefinice ",
			"inkubace ");
	pridejOtazku(
			"Inteligence není",
			"komplexní schopnost vyrovnávat se s životními úkoly a problémy ",
			"obecná schopnost využívat paměť při řešení úkolů ",
			"obecná schopnost psychického přizpůsobení ",
			"dispozice k myšlení ",
			"obecná schopnost využívat paměť při řešení úkolů ");
	pridejOtazku(
			"Stadium, kdy se zkouší, zda je nalezené tvůrčí řešení vhodné v praxi, se označuje termínem",
			"fáze přípravy ",
			"fáze inkubace ",
			"fáze iluminace ",
			"fáze verifikace ",
			"fáze verifikace ");
	pridejOtazku(
			"Fáze Obecného adaptačního syndromu po sobě následují takto:",
			"útěková vyrovnávací, exhausce ",
			"poplachová, vyrovnávací, vyčerpání ",
			"poplachová, vyrovnávací, útěková ",
			"poplachová, útěková, vyčerpání ",
			"poplachová, vyrovnávací, vyčerpání ");
	pridejOtazku(
			"V teorii o stresu se setkáváme s popisem osob:",
			"typu X : Y ",
			"typu ? : ß ",
			"typu A : B ",
			"typu 1 : 2 ",
			"typu A : B ");
	pridejOtazku(
			"Mezi vlastnosti pozornosti nezařazujeme",
			"rozsah pozornosti ",
			"přesouvání pozornosti ",
			"aktivaci CNS ",
			"výběrovost pozornosti ",
			"aktivaci CNS ");
	pridejOtazku(
			"K lidské motivaci patří očekávání vzdálených úspěchů či neúspěchů, vzdálených cílů a událostí podle kterých se řídí, jde o",
			"princip plánování ",
			"princip anticipace ",
			"princip zvyšování efektivnosti ",
			"princip slasti ",
			"princip anticipace ");
	pridejOtazku(
			"Autori stupnice životních událostí jsou:",
			"Selye and Smith ",
			"Piaget a Inhelderová ",
			"Holmes a Rahe ",
			"Frankl a Lukasová ",
			"Holmes a Rahe ");
	pridejOtazku(
			"V každé situaci proběhne automaticky hodnocení, zda je situace pro jedince pozitivni nebo negativni, jde o",
			"kognitivní hodnocení ",
			"vnitřní hodnocení ",
			"pobídku k jednání ",
			"emoční hodnocení ",
			"kognitivní hodnocení ");
	pridejOtazku(
			'Známé tvrzení "Já jsem OK..." je součástí psychologického přístupu zvaného:',
			"psychoanalýza ",
			"humanistická psychologie ",
			"transakční analýza ",
			"kognitivně behaviorální terapie ",
			"transakční analýza ");
	pridejOtazku(
			"Postoje jako součást lidské motivace obsahují citové hodnocení určitého podnětu i",
			"výraz obličeje ",
			"pobídku k jednání ",
			"celkovou aktivaci CNS ",
			"racionální hodnocení podnětu ",
			"pobídku k jednání ");
	pridejOtazku(
			"Temperament je obecná vlastnost duševní dynamiky jedince a nemá",
			"vlastní zážitkový obsah ",
			"vliv na vnější projevy citů ",
			"vliv na sílu reakcí ",
			"vliv na rychlost vzniku citů ",
			"vlastní zážitkový obsah ");
	pridejOtazku(
			"Do členění schopností podle typů činnosti, ve kterých se uplatňují, nepatří:",
			"smyslové schopnosti ",
			"psychomotorické schopnosti ",
			"empatie ",
			"rozumové - intelektové schopnosti ",
			"empatie ");
	pridejOtazku(
			"Fáze, kdy jedinec hledá vhodná řešení, přemýšlí nad problémem je nazvána",
			"fáze inkubace ",
			"fáze inspirace ",
			"fáze přípravy ",
			"fáze iluminace ",
			"fáze inkubace ");
	pridejOtazku(
			"Jsou-li pro nás předměty v okolním světě ohrožující, odpudivé a snažíme se jim vyhnout, jde o",
			"akomodaci ",
			"averzi ",
			"anticipaci ",
			"apetenci ",
			"averzi ");
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