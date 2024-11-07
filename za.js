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
	document.getElementById('otazka').innerHTML = '<div id="form">' + otazka.otazka + '<br>' +
			'<br><input id="a" type="checkbox" name="a" value="a">' + '<span id="aa"> ' + otazka.a + '</span>' +
			'<br><input id="b" type="checkbox" name="a" value="b">' + '<span id="bb"> ' + otazka.b + '</span>' +
			'<br><input id="c" type="checkbox" name="a" value="c">' + '<span id="cc"> ' + otazka.c + '</span>' +
			'<br><input id="d" type="checkbox" name="a" value="d">' + '<span id="dd"> ' + otazka.d + '</span>' + '<br>' +
			'<br><input id="end" type="button" value="Odpovědět" onclick=check()>' +
			'</div>';
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
		document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
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
			"Pro řízený rozhovor v psychologii platí, že:",
			"jsou očekávány odpovědi na přesně formulované otázky ",
			"někdy je používána možnost výběru mezi určenými odpověďmi ",
			"má značnou volnost v průběhu, pacientovi se kladou volné otázky, pracuje s ním logoterapie ",
			"u použití řízeného rozhovoru při výběru zaměstnanců by se měl uchazeč mít možnost volně projevit ",
			"ab");
	pridejOtazku(
			"Mezi Eriksonova stádia psychosociálního vývoje osobnosti nepatří:",
			"iniciativa proti vině ",
			"snaživost proti méněcennosti ",
			"stud proti agresi ",
			"orální stadium ",
			"cd");
	pridejOtazku(
			"Které z uvedených charakteristik platí pro napodobování jako formě sociálního učení?",
			"dítě pozoruje chování lídi kolem v různých situacích ",
			"důležitý při tomto typu učení je systém odměn a trestů ",
			"dítě kopíruje mimiku obličeje dospělých ",
			"je nahodilé a objevuje se spontánně ",
			"ac");
	pridejOtazku(
			"Které z uvedených filosofických směrů netvoří teoretická východiska pro humanistickou psychologii?",
			"ontologie ",
			"feministická filosofie ",
			"existenciální filosofie ",
			"metafyzika ",
			"abd");
	pridejOtazku(
			"Které z uvedených charakteristik platí pro sémiotickou nebo-li symbolickou funkci dle Jeana Piageta?",
			"není charakteristická pro celou populaci, týká se jenom sebeaktualizujících se jedinců ",
			"spočívá ve schopnosti něco si představovat prostřednictvím něčeho ",
			"patří sem např. řeč, obrazná představa či symbolické gesto ",
			"objevuje se ve věku kolem jednoho a půl až dvou let ",
			"bcd");
	pridejOtazku(
			"Mezi psychologické metody nepatří:",
			"rozhovor ",
			"psychoanalýza ",
			"experiment ",
			"SWOT analýza ",
			"bd");
	pridejOtazku(
			"Carl Gustav Jung charakterizuje psýché jako složitou samostatnou soustavu, složenou z:",
			"perivědomí ",
			"vědomí - Ego ",
			"kolektivního nevědomí ",
			"racionálních konstruktů ",
			"bc");
	pridejOtazku(
			"K hodnocení produktů činnosti v rámci psychologických metod nepatří:",
			"projektivní interview ",
			"skryté pozorování ",
			"grafologie ",
			"laboratorní experiment ",
			"abd");
	pridejOtazku(
			"Rozhovory jako metodu v psychologii můžeme třídit z hlediska:",
			"počtu účastníků ",
			"celkové délky trvání ",
			"účelu rozhovoru ",
			"stupně standardizace otázek ",
			"acd");
	pridejOtazku(
			"Které z uvedených charakteristik se vztahují na amerického psychologa Johna B. Watsona?",
			"soudil, že pokud chce být psychologie považována za vědu, musí být její zkoumání vědecké a opakovatelné ",
			"je představitelem behaviorální psychologie ",
			"vyslovil názor, že vědeckému zkoumání je přístupné pouze chování - behaviour ",
			"zabýval se experimenty s vnímáním figur na pozadí, nedokončených figur atd. ",
			"abc");
	pridejOtazku(
			"K hodnocení produktů činnosti v rámci psychologických metod nepatří:",
			"projektivní interview ",
			"laboratorní experiment ",
			"skryté pozorování ",
			"grafologie ",
			"abc");
	pridejOtazku(
			"Které z uvedených tvrzení neplatí pro Maslowovu pyramidu lidských potřeb?",
			"nejvyšší potřebou je sebeaktualizace - tendence být tím, kým může být",
			"potřeby chápe jako kontinuum, sahající od nižších potřeb po sebeaktualizaci ",
			"uspokojení vyšších potřeb je prioritou, až potom nastupuje uspokojování nižších potřeb ",
			"jedinec nemusí nutně pociťovat dané potřeby, každý má svou pyramidu potřeb individuálně danou ",
			"cd");
	pridejOtazku(
			"Carl R. Rogers definuje tři nejdůležitější podmínky, které platí v jakémkoliv vztahu, kde jde o rozvíjení osobnosti:",
			"kongruence ",
			"empatické porozumění ",
			"přijímání jedince takového jaký je ",
			"prožívání vrcholových zážitků ",
			"abc");
	pridejOtazku(
			"V kojeneckém období se dítě:",
			"učí uchopovat předměty oběma rukama ",
			"naučí se sedět, lézt, chodit ",
			"vytváří si pojem o trvalosti předmětu ",
			"má velmi dobrou slovní zásobu, umí básničky i zazpívat krátkou písničku ",
			"abc");
	pridejOtazku(
			"Do psychologického směru psychoanalýza a její pozdější neopsychoanalytického hnutí neřadíme tyto představitele:",
			"I. P. Pavlova ",
			"H. Ebbinghause ",
			"A. Maslowa ",
			"S. Freuda ",
			"abc");
	pridejOtazku(
			"Mezi klady/pozitiva využití technických prostředků při pozorování nepatří:",
			"lepší možnost zachycení a zpracování jednotlivých dat ",
			"neochota pozorovaných vystavit se záznamu (např. videozáznamu) ",
			"skrytá kamera - její použití je neetické, tudíž ji bez souhlasu zkoumaných osob nelze použít",
			"odpadá zde rušivý faktor pozorovatele, který by za jiných okolností byl osobně přítomen ",
			"bc");
	pridejOtazku(
			"Pro řízený rozhovor v psychologii platí, že:",
			"jsou očekávány odpovědi na přesně formulované otázky ",
			"má značnou volnost v průběhu, pacientovi se kladou volné otázky, pracuje s ním logoterapie ",
			"u použití řízeného rozhovoru při výběru zaměstnanců by se měl uchazeč mít možnost volně projevit ",
			"někdy je používána možnost výběru mezi určenými odpověďmi ",
			"ad");
	pridejOtazku(
			"Do psychologického směru psychoanalýza a její pozdější neopsychoanalytického hnutí neřadíme tyto představitele:",
			"H. Ebbinghause ",
			"S. Freuda ",
			"A. Maslowa ",
			"I. P. Pavlova ",
			"acd");
	pridejOtazku(
			"Carl Gustav Jung charakterizuje psýché jako složitou samostatnou soustavu, složenou z:",
			"kolektivního nevědomí ",
			"racionálních konstruktů ",
			"vědomí - Ego ",
			"perivědomí ",
			"ac");
	pridejOtazku(
			"Pro 'Já' (das Selbst) u C. G. Junga neplatí:",
			"je prvotním základem psýché ",
			"'Já' (das Selbst) tvoří dvě složky - Anima a Animus ",
			"je jedním z archetypů ",
			"existuje ve vědomí, jedná se o vědomou složku osobnosti ",
			"bd");
	pridejOtazku(
			"Které z uvedených charakteristik platí pro napodobování jako formě sociálního učení?",
			"je nahodilé a objevuje se spontánně ",
			"důležitý při tomto typu učení je systém odměn a trestů ",
			"dítě kopíruje mimiku obličeje dospělých ",
			"dítě pozoruje chování lídi kolem v různých situacích ",
			"cd");
	pridejOtazku(
			"Které z uvedených termínů nepoužívá Individuální psychologie A. Adlera?",
			"kongruence ",
			"vrozené a naučené formy chování ",
			"pocit méněcennosti ",
			"zákon dotyku v prostoru a čase ",
			"abd");
	pridejOtazku(
			"V kojeneckém období se dítě:",
			"naučí se sedět, lézt, chodit ",
			"vytváří si pojem o trvalosti předmětu ",
			"má velmi dobrou slovní zásobu, umí básničky i zazpívat krátkou písničku ",
			"učí uchopovat předměty oběma rukama ",
			"abd");
	pridejOtazku(
			"Mezi klady/pozitiva využití technických prostředků při pozorování nepatří:",
			"neochota pozorovaných vystavit se záznamu (např. videozáznamu) ",
			"skrytá kamera - její použití je neetické, tudíž ji bez souhlasu zkoumaných osob nelze použít",
			"odpadá zde rušivý faktor pozorovatele, který by za jiných okolností byl osobně přítomen ",
			"lepší možnost zachycení a zpracování jednotlivých dat ",
			"ab");
	pridejOtazku(
			"K následovníkům, žákům S. Freuda nepatří:",
			"E. Frankl ",
			"R. Rogers ",
			"A. Adler ",
			"C. G. Jung ",
			"ab");
	pridejOtazku(
			"Učení můžeme dělit podle toho, jakou schopnost získáme na učení:",
			"sociální učení ",
			"senzomotorické ",
			"učení participativní ",
			"učení se metodám řešení problémů ",
			"abd");
	pridejOtazku(
			"Rozhovory jako metodu v psychologii můžeme třídit z hlediska:",
			"stupně standardizace otázek",
			"celkové délky trvání ",
			"účelu rozhovoru ",
			"počtu účastníků ",
			"acd");
	pridejOtazku(
			"Která z uvedených charakteristik nepopisuje řízený rozhovor?",
			"je zaměřený na získání údajů o průběhu dosavadního života zkoumaného jedince ",
			"odpovědi jsou očekávány na přesně formulované otázky ",
			"hodí se pro výzkumy větší části populace ",
			"využívá ho humanistická nedirektivní psychoterapie ",
			"ad");
	pridejOtazku(
			"Uveďte, které z nasledujících charekteristik nepopisují extrospekci.",
			"tuto metodu používá behaviorizmus ",
			"pracuje s ní především psychoanalýza ",
			"jedná se o záměrné, pozorné vnímání chování druhých osob a zaznamenávání údajů o vnímaných skutečnostech ",
			"jedná se o pozorování vlastního prožívání, motivů, vlastních psychických procesů ",
			"bd");
	pridejOtazku(
			"Hlavní nevýhodou dotaníků z hlediska klinického psychologa je:",
			"ztráta neverbálních informací ",
			"lze jimi zkoumat větší počet osob najednou ",
			"nedostatečný osobný kontakt s posuzovaným ",
			"informace jsou zachyceny přesněji a dotazníky jsou časově úspornější ",
			"ac");
	pridejOtazku(
			"Pro genitální období v teorii psychosexuálního vývoje dle Siegmunda Freuda platí:",
			"v tomto období jedinec řeší oidipovský, resp. elektřin komplex",
			"začíná počátkem puberty ",
			"jedna z etap tohto období se nazývá stadiem orální agrese ",
			"jedná se o reaktivaci sexuálních pudů, které v době latence dřímaly ",
			"bd");
	pridejOtazku(
			"Hermann Ebbinghaus vycházel z asocianismu a zabýval se:",
			"zkoumáním nevědomí a ego-obranných mechanismů ",
			"mezilidskými vztahy na pracovišti ",
			"zapamatováním si textu a jeho zapomínáním ",
			"učením slovní látky ",
			"cd");
	pridejOtazku(
			"Mezi Eriksonova stádia psychosociálního vývoje osobnosti nepatří:",
			"orální stadium ",
			"snaživost proti méněcennosti ",
			"stud proti agresi ",
			"iniciativa proti vině ",
			"ac");
	pridejOtazku(
			"Psychologie práce a organizace se zabývá:",
			"požadavky lidské obsluhy technických systémů ",
			"psychodiagnostikou poruch a následnou psychoterapií v rámci zdravotnických zařízení ",
			"otázkami mezilidských vztahů na pracovišti ",
			"otázkami výchovně vzdělávací praxe z psychologického hlediska ",
			"ac");
	pridejOtazku(
			"Které z uvedených charakteristik neplatí pro psychopatologii?",
			"zabývá se na obecné úrovni psychickými poruchami, jejich vznikem a vývojem ",
			"zabývá se zkoumáním mezilidských vztahů, sociálních skupin, postavením a chováním jedince ve skupině",
			"zkoumá obecné zákonitosti fylogeneze ",
			"zkoumá obecné zákonitosti vnímání, pozornosti, paměti, myšlení, motivace a emocionality ",
			"bcd");
	pridejOtazku(
			"Které z uvedených charakteristik platí pro sémiotickou nebo-li symbolickou funkci dle Jeana Piageta?",
			"objevuje se ve věku kolem jednoho a půl až dvou let ",
			"není charakteristická pro celou populaci, týká se jenom sebeaktualizujících se jedinců ",
			"spočívá ve schopnosti něco si představovat prostřednictvím něčeho ",
			"patří sem např. řeč, obrazná představa či symbolické gesto ",
			"acd");
	pridejOtazku(
			"Při dotazování doporučuje používat otázky:",
			"nepřímé ",
			"polouzavřené ",
			"otevřené ",
			"sugestivní ",
			"abc");
	pridejOtazku(
			"Do psychologického směru psychoanalýza a její pozdější neopsychoanalytického hnutí neřadíme tyto představitele:",
			"I. P. Pavlova ",
			"S. Freuda ",
			"A. Maslowa ",
			"H. Ebbinghause ",
			"acd");
	pridejOtazku(
			"Které z uvedených termínů nepoužívá Individuální psychologie A. Adlera?",
			"vrozené a naučené formy chování ",
			"kongruence ",
			"zákon dotyku v prostoru a čase ",
			"pocit méněcennosti ",
			"abc");
	pridejOtazku(
			"Mezi základní teoretické obory psychologie patří:",
			"obecná psychologie ",
			"psychologie osobnosti ",
			"pedagogická psychologie ",
			"vývojová psychologie ",
			"abd");
	pridejOtazku(
			"Které z uvedených charakteristik neplatí pro psychopatologii?",
			"zabývá se na obecné úrovni psychickými poruchami, jejich vznikem a vývojem",
			"zabývá se zkoumáním mezilidských vztahů, sociálních skupin, postavením a chováním jedince ve skupině ",
			"zkoumá obecné zákonitosti vnímání, pozornosti, paměti, myšlení, motivace a emocionality ",
			"zkoumá obecné zákonitosti fylogeneze ",
			"bcd");
	pridejOtazku(
			"Které z uvedených charakteristik platí pro napodobování jako formě sociálního učení?",
			"je nahodilé a objevuje se spontánně ",
			"dítě kopíruje mimiku obličeje dospělých ",
			"dítě pozoruje chování lídi kolem v různých situacích ",
			"důležitý při tomto typu učení je systém odměn a trestů ",
			"bc");
	pridejOtazku(
			"Carl R. Rogers definuje tři nejdůležitější podmínky, které platí v jakémkoliv vztahu, kde jde o rozvíjení osobnosti:",
			"empatické porozumění ",
			"přijímání jedince takového jaký je ",
			"kongruence ",
			"prožívání vrcholových zážitků ",
			"abc");
	pridejOtazku(
			"Mezi nejdůležitější znaky sebeaktualizujícího se jedince patří:",
			"originalita a tvořivost ",
			"odstup a potřeba soukromí ",
			"neurotické, úzkostné chování ",
			"inteligenční kvocient na úrovni geniality ",
			"ab");
	pridejOtazku(
			"Uveďte, které z nasledujících charekteristik nepopisují extrospekci.",
			"tuto metodu používá behaviorizmus ",
			"jedná se o pozorování vlastního prožívání, motivů, vlastních psychických procesů ",
			"pracuje s ní především psychoanalýza ",
			"jedná se o záměrné, pozorné vnímání chování druhých osob a zaznamenávání údajů o vnímaných skutečnostech ",
			"bc");
	pridejOtazku(
			"Mezi Eriksonova stádia psychosociálního vývoje osobnosti nepatří:",
			"snaživost proti méněcennosti ",
			"iniciativa proti vině ",
			"orální stadium ",
			"stud proti agresi ",
			"cd");
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