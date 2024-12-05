var n = 0;
var otazky = new Array();
var spatneOtazky = new Array();
var odpovezene = new Array();

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
		
		if (odpovezene.indexOf(x) > 0)
			continue;
		else
			odpovezene.push(x);
			break;
	}

	document.getElementById('otazkaCislo').innerHTML = "Otázka " + (n + 1) + " z " + (otazky.length);
	document.getElementById("check").style.visibility = 'hidden';
	document.getElementById("dalsi").style.visibility = 'hidden';
	otazka = otazky[x];
	document.getElementById('otazka').innerHTML = '<div id="form">' +
			otazka.otazka + ': <br><input id="id1" type="text" name="question" onkeypress="isEnter()">' +
			'<input id="end" type="button" value="Odpovědět" onclick=check()>' +
			'</div>';

	document.getElementById("id1").focus();
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
	if (document.getElementById("id1").value.toLowerCase() == otazka.odpoved.toLowerCase()) {
		document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
		spravne++;
	} else {
		document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
		spatne++;
		spatneOtazky.push(otazka)
	}

	if (otazky.length > n) {
		odpovezene.push(x);
		n++;

		document.getElementById("end").style.visibility = 'hidden';
		document.getElementById("dalsi").style.visibility = 'visible';
	}
	/*else{
	 document.getElementById("form").remove();
	 document.getElementById("otazkaCislo").remove();;
	 document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' + 
	 '<p>Špatných odpovědí: ' + spatne + '</p>'
	 }*/
}

function zalozOtazky() {
	pridejOtazku(
			"„Pokažená gramofonová deska“ je asertivní … ",
			"dovednost");
	pridejOtazku(
			"Artikulace je základní technika mluveného projevu překládaná jako tvoření…",
			"hlásek");
	pridejOtazku(
			"Asert doved, při které sdělujeme skutečné aspekty (+ i -) naší osobnosti nebo chování se nazývá: ",
			"sebeotevření");
	pridejOtazku(
			"Celkovým držením těla (postoji) se zabývá … ",
			"posturologie");
	pridejOtazku(
			"Doteky jsou v neverbální komunikaci obsaženy v cizím slově … ",
			"haptika");
	pridejOtazku(
			"(O) Dýchání je základní technika mluveného projevu cizím slovem řečená …   ",
			"respirace");
	pridejOtazku(
			"Fonace je základní technika mluveného projevu překládaná jako tvoření …   ",
			"hlasu");
	pridejOtazku(
			"Haptika patří do komunikačních prostředků: ",
			"taktilních");
	pridejOtazku(
			"Hlavní podmínkou kvalitní verbální komunikace je znalost … (doplňte slovo v 2 pádě j. č.)",
			"jazyka");
	pridejOtazku(
			"Charakter převládajících vzájemných vztahů mezi jednotlivými členy skupiny se nazývá skupinové … ",
			"klima");
	pridejOtazku(
			"Ilustrátorům se jinak říká gesta:",
			"taktující");
	pridejOtazku(
			"(C) Jako střetnutí dvou protichůdných sil, snah a tendencí definujeme …",
			"konflikt");
	pridejOtazku(
			"Kategorizovaná pojetí druhých lidí, která umožňují laicky psychologickou identifikaci osob nazýváme sociální schémata …",
			"osob");
	pridejOtazku(
			"(O) Každé slovo má současně dva významy, osobní a ",
			"slovníkový");
	pridejOtazku(
			"Komunikace probíhá nejméně ve dvou významových liniích. Je to linie tematická a … ",
			"interpretační");
	pridejOtazku(
			"Konflikt mezi dvěma lidmi nazýváme konflikt",
			"interpersonální");
	pridejOtazku(
			"Konformita se může projevit ve dvojí formě: jako konformita pravá a … ",
			"oportunní");
	pridejOtazku(
			"Metoda sociální psychologie zaměřená na zjišťování sociál. emocionálních vztahů mezi členy malých skupin se nazývá",
			"sociometrie");
	pridejOtazku(
			"Mezi formy komunikace patří komunikace verbální, nonverbální a ………….",
			"metakomunikace");
	pridejOtazku(
			"(O) Mimoslovní komunikaci nazýváme komunikace … ",
			"neverbální");
	pridejOtazku(
			"Na tvoření hlásek se podílejí rty, jazyk, spodní čelist, zuby, dásňový výstupek, tvrdé a měkké patro, čili tzv. ……",
			"mluvidla");
	pridejOtazku(
			"Nejblížší zóna osobního prostoru podle Halla se nazývá zóna ",
			"intimní");
	pridejOtazku(
			"Nejmenší skupinou tvoří dva jedinci. Tuto skupinu nazýváme…",
			"dyáda");
	pridejOtazku(
			"Nekomplikované vyjádření pocitů, představ, myšlenek, názorů či pocitů charakterizuje asertivitu:",
			"základní");
	pridejOtazku(
			"Obsah komunikace v rámci struktury komunikace je odborně nazýván",
			"komuniké");
	pridejOtazku(
			"Osobnostní faktory způsobují, že každý vnímá stejné skutečnosti trochu jinak, tento vliv označujeme termínem osobnostní",
			"filtr");
	pridejOtazku(
			"Pantomimika je komunikační prostředek zrakový, neboli … ",
			"vizuální");
	pridejOtazku(
			"Pokud protějšek stále porušuje naše práva přecházíme podle dělení asertivity k asertivitě:",
			"stupňované");
	pridejOtazku(
			"Pokud jedinec aktivně odporuje skupině, projevuje se výrazně negativisticky, nepřátelsky a vzdorovitě, můžeme jeho chování charakterizovat jako",
			"kontrakonformní");
	pridejOtazku(
			"Postrádání důvěrného vztahu k jinému člověku, který by jedinci přinášel emociální uspokojení nazýváme emocionální…",
			"izolace");
	pridejOtazku(
			"Prosociální chování, vyznačované skutky a činy, vykonanými ve prospěch druhého bez očekávané odměny (materiální či finanční) nebo sociálního souhlasu nazýváme…",
			"altruismus");
	pridejOtazku(
			"Rodina je z hlediska dělení malé sociální skupiny příkladem skupiny ",
			"neformální");
	pridejOtazku(
			"Řeč je komunikační prostředek sluchový, neboli …",
			"akustický");
	pridejOtazku(
			"Schemata vyjadřující znalost uspořádání typických sekvencí ve standardních sociálních situacích nazýváme sociální schémata … (doplňte) ",
			"událostí");
	pridejOtazku(
			"Skupina, do které by jedinec příslušet chtěl nebo ke které by náležet nechtěl se nazývá:",
			"referenční");
	pridejOtazku(
			"(C) Sociální role je určitým způsobem upravené, tj. stylizované… ",
			"chování");
	pridejOtazku(
			"Sociální schémata vyjadřující normy a standardy chování utváření z hlediska věku, pohlaví, zaměstnání, rasy a skupin. Příslušnosti, umožňující předvídavost chování nazýváme schémata ……………",
			"rolí");
	pridejOtazku(
			"Sociální status je relativní výška sociální:",
			"pozice");
	pridejOtazku(
			"Specifickým lidským prostředkem dorozumívání je…",
			"řeč");
	pridejOtazku(
			"V rámci struktury komunikace toho komu je komunikace určena odborně nazýváme:",
			"komunikant");
	pridejOtazku(
			"V rámci struktury komunikace toho kdo mluví odborně nazýváme:",
			"komunikátor");
	pridejOtazku(
			"Velký počet komunikačních kanálů poskytuje struktura komunikační sítě ",
			"plná");
	pridejOtazku(
			"Vůně je komunikační prostředek čichový, neboli ...",
			"olfaktorický");
	pridejOtazku(
			"(O) Výrazem tváře v neverbální komunikaci se zabývá …",
			"mimika");
	pridejOtazku(
			"(O) Začleňování člověka do společnosti odborně nazýváme …",
			"socializace");
	pridejOtazku(
			"Zrakový kontakt je neverbální komunikace prostřednictvím:",
			"pohledů");
	pridejOtazku(
			'(O) Výsledný vjem objektivní skutečnosti může být značně subjektivní. Buďto je přiměřený nebo zesílený, zeslabený, nulový či jinak zkreslený. Tato subjektivita je ovlivněna u jedince tzv. „osobnostním ... " (doplňte slovo).',
			"filtrem");
}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}