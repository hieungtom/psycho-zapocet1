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
			'<br><input id="a" type="radio" name="a" value="a">' + '<span id="aa"> ' + otazka.a + '</span>' +
			'<br><input id="b" type="radio" name="a" value="a">' + '<span id="bb"> ' + otazka.b + '</span>' +
			'<br><input id="c" type="radio" name="a" value="a">' + '<span id="cc"> ' + otazka.c + '</span>' +
			'<br><input id="d" type="radio" name="a" value="a">' + '<span id="dd"> ' + otazka.d + '</span>' + '<br>' +
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
			"Psychologie je věda",
			"o lidech a společnosti",
			"lidské psychice, jednání a prožívání ",
			"o duševních nemocech ",
			"o funkcích CNS ",
			"lidské psychice, jednání a prožívání ");
	pridejOtazku(
			"Autorem známého pojetí jednotlivých stadií morálního vývoje je:",
			"Freud ",
			"Piaget ",
			"Maslow ",
			"Kohlberg ",
			"Kohlberg ");
	pridejOtazku(
			"Která z uvedených charakteristik neplatí pro přirozené experimenty?",
			"zkoumané osoby si nemusí uvědomovat, že jde o výzkum ",
			"blíží se psychologické metodě pozorování",
			"výsledky mohou být ovlivněny nekontrolovatelnými proměnnými ",
			"probíhají v umělých, přísně kontrolovaných a dokumentovaných podmínkách ",
			"probíhají v umělých, přísně kontrolovaných a dokumentovaných podmínkách ");
	pridejOtazku(
			"Za zakladatele vědecké psychologie, ředitele Psychologického institutu, je považován:",
			"F. Nietzsche ",
			"M. Wertheimer ",
			"H. Ebbinghaus ",
			"W. Wundt ",
			"W. Wundt ");
	pridejOtazku(
			"Základní schéma behaviorální psychologie bylo později pozměněno na:",
			"S - Me - R ",
			"S - R ",
			"S - T - R ",
			"S - O - R ",
			"S - O - R ");
	pridejOtazku(
			"Uvnitř osobnosti probíhá podle Freuda neustálé vyvažování sil mezi jejími třemi subsystémy. Mezi ně nepatří :",
			"Ego /Já/ ",
			"Id /Ono/ ",
			"Superego /Nadjá/ ",
			"Alterego /Druhé já/ ",
			"Alterego /Druhé já/ ");
	pridejOtazku(
			"Piaget rozlišuje ve vývoji člověka stadia podle úrovně",
			"psychosexuálního vývoje ",
			"psychosociálního vývoje ",
			"morálního vývoje ",
			"kognitivního vývoje ",
			"kognitivního vývoje ");
	pridejOtazku(
			"Tendence být tím, kým může jedinec být, se v humanistické psychologii nazývá:",
			"empatie ",
			"kongruence ",
			"sebeaktualizace ",
			"transcendence ",
			"sebeaktualizace ");
	pridejOtazku(
			"Galenos rozpracoval učení hippokratovské školy o:",
			"charakteru ",
			"zapamatování a zapomínání ",
			"temperamentu ",
			"asociacích ",
			"temperamentu ");
	pridejOtazku(
			"Behavioristé nezkoumají:",
			"reakce na podněty ",
			"naučené chování ",
			"princip učení vhledem ",
			"vnější vlivy na chováni ",
			"princip učení vhledem ");
	pridejOtazku(
			"Adler považuje za rozhodující pro vývoj osobnosti především vztahy mezi sourozenci, nikoliv",
			"schopnost spolupráce ",
			"usilování o moc ",
			"pocity méněcennosti ",
			"pudovou energii ",
			"pudovou energii ");
	pridejOtazku(
			"Mezi aplikované psychologické obory nepatří:",
			"klinická psychologie ",
			"pedagogická psychologie ",
			"psychologie práce a organizace ",
			"psychologie osobnosti ",
			"psychologie osobnosti ");
	pridejOtazku(
			"Mezi speciální psychologické obory, pokrývající mezioborové problémy, nepatří:",
			"psychologie sportu ",
			"psychologie v umění ",
			"psychologie obecná ",
			"psychologie forenzní ",
			"psychologie obecná ");
	pridejOtazku(
			"Vnitřní strukturu a dynamiku psychických procesů jedince zkoumá",
			"sociální psychologie ",
			"pedagogická psychologie ",
			"psychologie osobnosti ",
			"vývojová psychologie ",
			"psychologie osobnosti ");
	pridejOtazku(
			"Změny projevující se úbytkem funkcí a schopností se označují termínem",
			"evoluce ",
			"involuce ",
			"evaluace ",
			"demence ",
			"involuce ");
	pridejOtazku(
			"Druh sociálního učení, ve kterém se jedinec učí chovat tak, jak to od něho v jeho roli očekávají ostatní, se nazývá:",
			"učení se identifikací ",
			"anticipační učení ",
			"učení vhledem ",
			"učení se napodobováním ",
			"anticipační učení ");
	pridejOtazku(
			"Známkou zdravé dospělé osobnosti je podle psychoanalytiků dobře rozvinuté:",
			"Id ",
			"Alterego ",
			"Superego ",
			"Ego ",
			"Ego ");
	pridejOtazku(
			"Při příliš silném ohrožení ega na určitém vývojovém stupni, vrátí se lidé chováním do doby, kdy byli v bezpečí. Jde o :",
			"racionalizace ",
			"vytěsnění ",
			"sublimace ",
			"regrese ",
			"regrese ");
	pridejOtazku(
			"Velmi známé jsou experimentální práce se šimpanzi W. Kohlera, který formuloval tvůrčí řešení problémů",
			"vhledem ",
			"metodou brainstormingu ",
			"metodou pokusů a omylů ",
			"metodou racionalizace ",
			"vhledem ");
	pridejOtazku(
			"Adler považuje za rozhodující pro vývoj osobnosti především vztahy mezi sourozenci, nikoliv",
			"schopnost spolupráce ",
			"pocity méněcennosti ",
			"pudovou energii ",
			"usilování o moc ",
			"pudovou energii ");
	pridejOtazku(
			"Při nezvládnutí vývojového konfliktu v mladším školním období, je dítě podle Eriksona ohroženo možností vzniku",
			"snížené adaptability na stresové situace ",
			"Oidipovského komplexu ",
			"pocitů viny ",
			"pocitů méněcennosti ",
			"pocitů méněcennosti ");
	pridejOtazku(
			"Mezi asociační zákony nepatří:",
			"zákon podobnosti ",
			"zákon dotyku v prostoru a čase ",
			"zákon nabídky a poptávky ",
			"zákon kontrastu ",
			"zákon nabídky a poptávky ");
	pridejOtazku(
			"Behavioristé nezkoumají",
			"naučená chování ",
			"vnější vlivy na chováni ",
			"reakce na podněty ",
			"sny ",
			"sny ");
	pridejOtazku(
			"Ego-obranný mechanismus, nahrazující nevědomé motivy našich činnů společensky vhodnějšími je",
			"regrese ",
			"sublimace ",
			"racionalizace ",
			"vytěsnění ",
			"racionalizace ");
	pridejOtazku(
			"Psychologie práce a organizace jako aplikovaná psychologická disciplína, a ani její subdisciplíny se nezabývají:",
			"pracovními podmínkami, požadavky lidské obsluhy technických systémů ",
			"mezilidskými vztahy na pracovišti, sociálním klimatem, neformálním sociálním skupinám ",
			"problémy z oblasti člověk - práce, člověk - stroj, člověk - ostatní lidé ",
			"problémy jedinců a malých skupiny, psychoterapií, psychodiagnostikou a léčbou psychologickými prostředky ",
			"problémy jedinců a malých skupiny, psychoterapií, psychodiagnostikou a léčbou psychologickými prostředky ");
	pridejOtazku(
			"Za zakladatele druhé vídeňské psychologické školy je považován:",
			"A. Adler ",
			"S. Freud ",
			"C. G. Jung ",
			"C. Rogers ",
			"A. Adler ");
	pridejOtazku(
			"Obecné zákonitosti fylogeneze, chování jednotlivých druhů a jejich srovnávání, včetně člověka, zkoumá:",
			"psychologie osobnosti ",
			"sociální psychologie ",
			"obecná psychologie ",
			"srovnávací psychologie ",
			"srovnávací psychologie ");
	pridejOtazku(
			"Pro předškolní období je podle Eriksona typické:",
			"vlastní tvořivost a iniciativa ",
			"vytváření rituálů ",
			"vytváření vlastní integrity ",
			"pocity strádání ",
			"vlastní tvořivost a iniciativa ");
	pridejOtazku(
			"Mezi psychologické metody nepatří",
			"introspekce ",
			"experimet ",
			"inkubace ",
			"extrospekce ",
			"inkubace ");
	pridejOtazku(
			"Kojenecké období trvá",
			"od početí do dvanáctého týdne ",
			"od narození dítěte do tří let věku dítěte ",
			"první rok života, přibližně do jednoho roku věku dítěte ",
			"kvůli jediný posraný otázce s 3 odpověďmi nebudu předělávat celej formulář",
			"první rok života, přibližně do jednoho roku věku dítěte ");
	pridejOtazku(
			"Útěkem od pro nás nepřijatelných myšlenek, většinou nepřijatelných sexuálních přání, je ego-obranný mechanismus",
			"racionalizace ",
			"sublimace ",
			"vytěsnění ",
			"regrese ",
			"vytěsnění ");
	pridejOtazku(
			"Rozhovor jako psychologická metoda má různé podoby, nepatří mezi ně:",
			"řízený rozhovor ",
			"anamnestický rozhovor ",
			"přijímací rozhovor ",
			"dabování ",
			"dabování ");
	pridejOtazku(
			"Tendence být tím, kým může jedinec být, se v humanistické psychologii nazývá:",
			"transcendence ",
			"empatie ",
			"sebeaktualizace ",
			"kongruence ",
			"sebeaktualizace ");
	pridejOtazku(
			"Po otci Hippokrates zdědil po generace předávané povolání, byl nejproslulejší řecký",
			"řečník ",
			"filosof ",
			"lékař ",
			"spisovatel ",
			"lékař ");
	pridejOtazku(
			"Mezi čtyři mohutnosti či psychické funkce dle C. G. Junga nepatří:",
			"intuice ",
			"paměť ",
			"myšlení ",
			"smyslové vnímání ",
			"paměť ");
	pridejOtazku(
			"Osobní morálku jedince, která zahrnuje jak vědomě uznávané principy, tak i pravidla chování naučená v dětství představuje",
			"Ego ",
			"Id ",
			"Nevědomí ",
			"Superego ",
			"Superego ");
	pridejOtazku(
			"Introspekce je",
			"návštěva v organizaci ",
			"pozorování chování ostatních ",
			"vnitřní vztahy ve skupině ",
			"pozorování vlastních psychických procesů ",
			"pozorování vlastních psychických procesů ");
	pridejOtazku(
			"Mezi aplikované obory psychologie nepatří",
			"klinická psychologie ",
			"inženýrská psychologie ",
			"pedagogická psychologie ",
			"vývojová psychologie ",
			"vývojová psychologie ");
	pridejOtazku(
			"Mezi vrstvy osobnosti u S. Freuda nepatří:",
			"nevědomí ",
			"podvědomí ",
			"vědomí ",
			"předvědomí ",
			"podvědomí ");
	pridejOtazku(
			"Který přístup se zabývá vnímáním figur na pozadí, dobrým tvarem, cílovou zaměřeností, která řídí myšlenkový proces?",
			"tvarová psychologie ",
			"humanistická psychologie ",
			"behaviorální psychologie ",
			"hlubinná psychologie ",
			"tvarová psychologie ");
	pridejOtazku(
			"Při nezvládnutí vývojového konfliktu v mladším školním období, je dítě podle Eriksona ohroženo možností vzniku",
			"pocitů méněcennosti ",
			"Oidipovského komplexu ",
			"pocitů viny ",
			"snížené adaptability na stresové situace ",
			"pocitů méněcennosti ");
	pridejOtazku(
			"Během vývoje se vždy uplatňují dvě protichůdné tendence, rozvojová a ......:",
			"konstituční ",
			"evoluční ",
			"akomodace ",
			"involuční ",
			"involuční ");
	pridejOtazku(
			"Kojenecké období trvá:",
			"první rok života, přibližně do jednoho roku věku dítěte ",
			"od narození dítěte do tří let věku dítěte ",
			"od početí do dvanáctého týdne ",
			"od narození dítěte přibližně jeden měsíc ",
			"první rok života, přibližně do jednoho roku věku dítěte ");
	pridejOtazku(
			"Při příliš silném ohrožení ega na určitém vývojovém stupni, vrátí se lidé chováním do doby, kdy byli v bezpečí. Jde o :",
			"racionalizace ",
			"vytěsnění ",
			"sublimace ",
			"regrese ",
			"regrese ");
	pridejOtazku(
			"V koncepci temperamentu Hippokrata a Galena nenalezneme tuto tělesnou šťávu:",
			"mozgovo-míšný mok ",
			"žlutá žluč ",
			"krev ",
			"hlen ",
			"mozgovo-míšný mok ");
	pridejOtazku(
			"Aristoteles rozlišuje tři stupně duše. Nepatří mezi ně",
			"duše osobní ",
			"duše rozumová ",
			"duše senzitivní ",
			"duše vegetativní ",
			"duše osobní ");
	pridejOtazku(
			"Na konvenční úrovni morálního vývoje se setkáváme se stadiem:",
			"účelového myšlení ",
			"orientace na společnost ",
			"morálky dané zásadami vlastního svědomí, respektování druhých a abstraktních etických principů",
			"odměny - trestu ",
			"orientace na společnost ");
	pridejOtazku(
			"Jako celek se superego řídí:",
			"principem slasti ",
			"principem reality ",
			"principem dokonalosti ",
			"principem rozumu ",
			"principem dokonalosti ");
	pridejOtazku(
			"Mezi speciální psychologické obory, pokrývající mezioborové problémy, nepatří:",
			"psychologie sportu ",
			"psychologie obecná ",
			"psychologie v umění ",
			"psychologie forenzní ",
			"psychologie obecná ");
	pridejOtazku(
			"Podle Freuda se jednotlivá stadia vývoje dítěte odlišují:",
			"úrovní vývoje myšlení ",
			"způsoby komunikace ",
			"místem uspokojování sex.pudu ",
			"intenzitou touhy po moci ",
			"místem uspokojování sex.pudu ");
	pridejOtazku(
			"Při nezvládnutí vývojového konfliktu v mladším školním období, je dítě podle Eriksona ohroženo možností vzniku",
			"pocitů viny ",
			"pocitů méněcennosti ",
			"Oidipovského komplexu ",
			"snížené adaptability na stresové situace ",
			"pocitů méněcennosti ");
	pridejOtazku(
			"Extrospekce je",
			"vnitřní vztahy ve skupině ",
			"pozorování vlastních psychických procesů ",
			"pozorování chování ostatních ",
			"potřeba ovládat někoho ",
			"pozorování chování ostatních ");
	pridejOtazku(
			"Psychologie je věda",
			"o lidech a společnosti ",
			"lidské psychice, jednání a prožívání ",
			"o funkcích CNS ",
			"o duševních nemocech ",
			"lidské psychice, jednání a prožívání ");
	pridejOtazku(
			"Rozhovor jako psychologická metoda má různé podoby, nepatří mezi ně:",
			"přijímací rozhovor ",
			"řízený rozhovor ",
			"dabování ",
			"Kvůli pár tří-odpověďovým otázkám nebudu dělat speciální funkci!!!",
			"dabování ");
	pridejOtazku(
			"Mezi představitele hlubinné psychologie nepatří:",
			"C. G. Jung ",
			"S. Freud ",
			"C. Rogers ",
			"A. Adler ",
			"C. Rogers ");
	pridejOtazku(
			"Energie uvolněná sexuálním přáním převedená do jiné, často tvořivé, umělecké činnosti, kterou si společnost cení. Jedná se o popis mechanizmu:",
			"racionalizace ",
			"regrese ",
			"sublimace ",
			"vytěsnění ",
			"sublimace ");
	pridejOtazku(
			"Extrospekce je",
			"potřeba ovládat někoho ",
			"vnitřní vztahy ve skupině ",
			"pozorování vlastních psychických procesů ",
			"pozorování chování ostatních ",
			"pozorování chování ostatních ");
	pridejOtazku(
			"Známkou zdravé dospělé osobnosti je podle psychoanalytiků dobře rozvinuté:",
			"Ego ",
			"Id ",
			"Superego ",
			"Alterego ",
			"Ego ");
	pridejOtazku(
			"Kterou složku nezahrnuje vnitřní výbava jedince v průběhu jeho zrání?",
			"konstituční výbavu, zahrnující i účinky prostředí ",
			"genovou výbavu převzatou od rodičů ",
			"introspektivní sledování vlastního vývoje ",
			"vrozenou výbavu, která zahrnuje i vývoj plodu v děloze matky ",
			"introspektivní sledování vlastního vývoje ");
	pridejOtazku(
			"Maslow pokládá jedince za integrovaný celek, od nejnižších potřeb až po tendenci být tím, kým být mohu, tendenci k",
			"sebeaktualizaci ",
			"získání majetku ",
			"prosazení se v práci ",
			"získání společenského postavení ",
			"sebeaktualizaci ");
	pridejOtazku(
			"Na prekonvenčí úrovni morálního vývoje se potkáváme se stadiem:",
			"sociální smlouvy ",
			"orientace na společnost ",
			"shody s ostatními ",
			"účelového myšlení ",
			"účelového myšlení ");
	pridejOtazku(
			"Metody rozvíjející samostatné myšlení, učení se formálně logickým a deduktivním postupům jsou",
			"vědomostní učení ",
			"nahodilé učení ",
			"učení se metodám řešení ",
			"sociální učení ",
			"učení se metodám řešení ");
	pridejOtazku(
			"Kojenecké období trvá:",
			"od narození dítěte přibližně jeden měsíc ",
			"od narození dítěte do tří let věku dítěte ",
			"první rok života, přibližně do jednoho roku věku dítěte ",
			"od početí do dvanáctého týdne ",
			"první rok života, přibližně do jednoho roku věku dítěte ");
	pridejOtazku(
			"Období, kdy se pozornost dítěte při vstupu do školy přechodně odvrací od vlastního těla k novým úkolům je",
			"falické stadium ",
			"stadium anální ",
			"genitální období ",
			"období latence ",
			"období latence ");
	pridejOtazku(
			"Kterou složku nezahrnuje vnitřní výbava jedince v průběhu jeho zrání?",
			"vrozenou výbavu, která zahrnuje i vývoj plodu v děloze matky ",
			"introspektivní sledování vlastního vývoje ",
			"genovou výbavu převzatou od rodičů ",
			"konstituční výbavu, zahrnující i účinky prostředí ",
			"introspektivní sledování vlastního vývoje ");
	pridejOtazku(
			"Změny projevující se úbytkem funkcí a schopností se označují termínem",
			"evoluce ",
			"evaluace ",
			"demence ",
			"involuce ",
			"involuce ");
	pridejOtazku(
			"Za zakladatele druhé vídeňské psychologické školy je považován:",
			"C. Rogers ",
			"C. G. Jung ",
			"A. Adler ",
			"S. Freud ",
			"A. Adler ");
	pridejOtazku(
			"Mezi formy sociálního učení nepatří",
			"zpevňování odměna-trest ",
			"senzomotorické učení ",
			"zástupné učení ",
			"učení se identifikací ",
			"senzomotorické učení ");
	pridejOtazku(
			"Klinická psychologie se nezabývá",
			"řízením lidských zdrojů ",
			"psychodiagnostikou ",
			"vztahy mezi nemocí a psychikou jedince ",
			"psychoterapií ",
			"řízením lidských zdrojů ");
	pridejOtazku(
			"Mezi asociační zákony nepatří",
			"zákon nabídky a poptávky ",
			"zákon podobnosti ",
			"zákon kontrastu ",
			"zákon dotyku v prostoru a čase ",
			"zákon nabídky a poptávky ");
	pridejOtazku(
			"Psychologie práce a organizace se nevěnuje otázkám",
			"člověk - práce ",
			"člověk - rodina ",
			"člověk - ostatní lidé ",
			"člověk - stroj ",
			"člověk - rodina ");
	pridejOtazku(
			"Mezi základní teoretické obory psychologie nepatří",
			"sociální psychologie ",
			"obecná psychologie ",
			"srovnávací psychologie ",
			"forenzní psychologie ",
			"forenzní psychologie ");
	pridejOtazku(
			"Pozorování můžeme dělit podle různých hledisek, nepatří mezi ně:",
			"podle finančních nákladů ",
			"podle situace ",
			"podle zaměřenosti ",
			"podle délky ",
			"podle finančních nákladů ");
	pridejOtazku(
			"Obecné zákonitosti fylogeneze, chování jednotlivých druhů a jejich srovnávání, včetně člověka, zkoumá",
			"sociální psychologie ",
			"psychologie osobnosti ",
			"obecná psychologie ",
			"srovnávací psychologie ",
			"srovnávací psychologie ");
	pridejOtazku(
			"Metody rozvíjející samostatné myšlení, učení se formálně logickým a deduktivním postupům jsou",
			"vědomostní učení ",
			"učení se metodám řešení ",
			"sociální učení ",
			"nahodilé učení ",
			"učení se metodám řešení ");
	pridejOtazku(
			"Německý psycholog, který vycházel z asocianizmu a zkoumal učení a paměť pro slovní látku, se jmenoval:",
			"S. Freud ",
			"W. Wundt ",
			"H. Ebbinghaus ",
			"F. Kohler ",
			"H. Ebbinghaus ");
	pridejOtazku(
			"C. G. Jung byl žákem Freuda, ale jeho teorie přepracoval, a některé termíny přidal nově např.:",
			"sublimace ",
			"předvědomí ",
			"kolektivní nevědomí ",
			"princip slasti ",
			"kolektivní nevědomí ");
	pridejOtazku(
			"Která z uvedených charakteristik neplatí pro ego dle S. Freuda?",
			"je to rovina osobnosti, řídící se principem reality ",
			"ukládá do předvědomí osobní zážitky ",
			"zajišťuje osobní morálku jednotlivce ",
			"dobře rozvinuté ego je známkou zdravé dospělé osobnosti ",
			"zajišťuje osobní morálku jednotlivce ");
	pridejOtazku(
			"Které z experimentů nerealizovali představitelé tvarové psychologie",
			"experimenty s vnímáním nedokončených figur ",
			"experimenty se psy ",
			"experimenty s vnímáním figur na pozadí ",
			"experimenty se šimpanzi ",
			"experimenty se psy ");
	pridejOtazku(
			"Mezi aplikované obory psychologie nepatří",
			"klinická psychologie ",
			"pedagogická psychologie ",
			"inženýrská psychologie ",
			"vývojová psychologie ",
			"vývojová psychologie ");
	pridejOtazku(
			"Ve druhém období vývoje podle Eriksona si jedinec vytváří",
			"pocity méněcennosti ",
			"vlastní identitu ",
			"Oidipovský komplex ",
			"vědomí vlastní autonomie ",
			"vědomí vlastní autonomie ");
	pridejOtazku(
			"V období mladé dospělosti by měl být jedinec připraven k",
			"vytváření vlastní tvořivosti ",
			"vytváření rituálů ",
			"vytvoření intimního vztahu ",
			"vytvoření vlastní identity ",
			"vytvoření intimního vztahu ");
	pridejOtazku(
			"Mezi představitelé tvarové psychologie nepatří",
			"K. Koffka ",
			"M. Wertheimer ",
			"H. Ebbinghaus ",
			"W. Kohler ",
			"H. Ebbinghaus ");
	pridejOtazku(
			"Obecné zákonitosti fylogeneze, chování jednotlivých druhů a jejich srovnávání, včetně člověka, zkoumá",
			"srovnávací psychologie ",
			"psychologie osobnosti ",
			"sociální psychologie ",
			"obecná psychologie ",
			"srovnávací psychologie ");
	pridejOtazku(
			"Ego-obranný mechanismus, kdy jde o přesun energie do sociálně přijatelných rituálů a obřadů nazval Jung",
			"sny ",
			"racionalizace ",
			"intuice ",
			"symbolizace ",
			"symbolizace ");
	pridejOtazku(
			"Introspekci jako hlavní metodu zkoumání používá",
			"hlubinná psychologie ",
			"vývojová psychologie ",
			"experimentální psychologie ",
			"tvarová psychologie ",
			"hlubinná psychologie ");
	pridejOtazku(
			"Která z uvedených charakteristik neplatí pro ego dle S. Freuda?",
			"dobře rozvinuté ego je známkou zdravé dospělé osobnosti",
			"ukládá do předvědomí osobní zážitky ",
			"je to rovina osobnosti, řídící se principem reality ",
			"zajišťuje osobní morálku jednotlivce ",
			"zajišťuje osobní morálku jednotlivce ");
	pridejOtazku(
			"Piaget rozlišuje ve vývoji člověka stadia podle úrovně",
			"psychosociálního vývoje ",
			"morálního vývoje ",
			"kognitivního vývoje ",
			"psychosexuálního vývoje ",
			"kognitivního vývoje ");
	pridejOtazku(
			"Význam mezilidských vztahů na pracovišti zjistil Elton Mayo ve výzkumu známém jako",
			"Eltonská studie ",
			"Hawthornská studie ",
			"Mayská studie ",
			"Fordovská studie ",
			"Hawthornská studie ");
	pridejOtazku(
			"Vyjímeční lidé, kteří dosáhli seberealizace jsou",
			"uzavření ",
			"obratní manipulanti ",
			"nadprůměrně inteligentní ",
			"tvořiví ",
			"tvořiví ");
	pridejOtazku(
			"Při nezvládnutí vývojového konfliktu v mladším školním období, je dítě podle Eriksona ohroženo možností vzniku",
			"pocitů méněcennosti ",
			"pocitů viny ",
			"snížené adaptability na stresové situace ",
			"Oidipovského komplexu ",
			"pocitů méněcennosti ");
	pridejOtazku(
			"Maslow pokládá jedince za integrovaný celek, od nejnižších potřeb až po tendenci být tím, kým být mohu, tendenci k",
			"získání společenského postavení ",
			"získání majetku ",
			"prosazení se v práci ",
			"sebeaktualizaci ",
			"sebeaktualizaci ");
	pridejOtazku(
			"Aristoteles rozlišuje tři stupně duše. Nepatří mezi ně",
			"duše osobní ",
			"duše senzitivní ",
			"duše vegetativní ",
			"duše rozumová ",
			"duše osobní ");
	pridejOtazku(
			"Introspekci jako hlavní metodu zkoumání používá:",
			"humanistická psychologie ",
			"vývojová psychologie ",
			"srovnávací psychologie ",
			"behaviorální psychologie ",
			"srovnávací psychologie ");
	pridejOtazku(
			"Behavioristé nezkoumají",
			"reakce na podněty ",
			"sny ",
			"naučená chování ",
			"vnější vlivy na chováni ",
			"sny ");
	pridejOtazku(
			"Rozhovor jako psychologická metoda má různé podoby, nepatří mezi ně:",
			"řízený rozhovor ",
			"přijímací rozhovor ",
			"anamnestický rozhovor ",
			"dabování ",
			"dabování ");
	pridejOtazku(
			"Mezi humanistické psychology nepatří",
			"V. E. Frankl ",
			"Carl R. Rogers ",
			"Carl Gustav Jung ",
			"Abraham Maslow ",
			"Carl Gustav Jung ");
	pridejOtazku(
			"Mezi aplikované psychologické obory nepatří:",
			"klinická psychologie ",
			"pedagogická psychologie ",
			"psychologie práce a organizace ",
			"psychologie osobnosti ",
			"psychologie osobnosti ");
	pridejOtazku(
			"V koncepci temperamentu Hippokrata a Galena nenalezneme tuto tělesnou šťávu:",
			"mozgovo-míšný mok ",
			"hlen ",
			"krev ",
			"žlutá žluč ",
			"mozgovo-míšný mok ");
	pridejOtazku(
			"Druh sociálního učení, ve kterém se jedinec učí chovat tak, jak to od něho v jeho roli očekávají ostatní, se nazývá:",
			"anticipační učení ",
			"učení se identifikací ",
			"učení vhledem ",
			"učení se napodobováním ",
			"anticipační učení ");
	pridejOtazku(
			"Mezi základní teoretické obory psychologie nepatří",
			"forenzní psychologie ",
			"srovnávací psychologie ",
			"obecná psychologie ",
			"sociální psychologie ",
			"forenzní psychologie ");
	pridejOtazku(
			"Ego-obranný mechanismus, kdy jde o přesun energie do sociálně přijatelných rituálů a obřadů nazval Jung",
			"intuice ",
			"symbolizace ",
			"sny ",
			"racionalizace ",
			"symbolizace ");
	pridejOtazku(
			"Introspekci jako hlavní metodu zkoumání používá:",
			"humanistická psychologie ",
			"srovnávací psychologie ",
			"behaviorální psychologie ",
			"vývojová psychologie ",
			"srovnávací psychologie ");
	pridejOtazku(
			"Kterou složku nezahrnuje vnitřní výbava jedince v průběhu jeho zrání?",
			"konstituční výbavu, zahrnující i účinky prostředí ",
			"introspektivní sledování vlastního vývoje ",
			"genovou výbavu převzatou od rodičů ",
			"vrozenou výbavu, která zahrnuje i vývoj plodu v děloze matky ",
			"introspektivní sledování vlastního vývoje ");
	pridejOtazku(
			"V období zralé dospělosti se podle Eriksona rozvíjí potřeba",
			"navazovat nové sexuální vztahy ",
			"vyhýbat se pocitům viny ",
			"uplatňovat vlastní iniciativu ",
			"pečovat o potomky ",
			"pečovat o potomky ");
	pridejOtazku(
			"Při příliš silném ohrožení ega na určitém vývojovém stupni, vrátí se lidé chováním do doby, kdy byli v bezpečí. Jde o :",
			"regrese ",
			"sublimace ",
			"racionalizace ",
			"vytěsnění ",
			"regrese ");
	pridejOtazku(
			"Přežití v psychologickém smyslu zajišťují sociální potřeby, jsou to",
			"mít někoho na pomoc v domácnosti ",
			"potřeba lásky a sounáležitosti ",
			"potřeba ovládat někoho ",
			"potřeba mít sponzora ",
			"potřeba lásky a sounáležitosti ");
	pridejOtazku(
			"Erikson rozlišuje ve vývoji člověka stadia podle úrovně",
			"psychosociálního vývoje ",
			"morálního vývoje ",
			"psychosexuálního vývoje ",
			"sociálního vývoje ",
			"psychosociálního vývoje ");
	pridejOtazku(
			"Období předškolní je spojeno s objevováním rozdílu mezi pohlavími, bývá označováno",
			"stadium sexuální zvídavosti ",
			"falické stadium ",
			"latentní stadium ",
			"rozvinuté genitální stadium ",
			"falické stadium ");
	pridejOtazku(
			"Kterou z uvedených problematik se nezabývá klinická neuropsychologie?",
			"vztahy mezi onemocněním mozku a změnami psychiky jedince ",
			"sociálními důsledky onemocnění mozku ve vztahu k psychice jedince ",
			"působením úrazů nebo zánětů mozku na psychiku jedince ",
			"zkoumáním psychických poruch na obecné úrovni, jejich vznikem a vývojem ",
			"zkoumáním psychických poruch na obecné úrovni, jejich vznikem a vývojem ");
	pridejOtazku(
			"Metody rozvíjející samostatné myšlení, učení se formálně logickým a deduktivním postupům jsou",
			"sociální učení ",
			"vědomostní učení ",
			"nahodilé učení ",
			"učení se metodám řešení ",
			"učení se metodám řešení ");
	pridejOtazku(
			"Kohlberg rozlišuje ve vývoji člověka stadia podle úrovně",
			"psychosexuálního ",
			"morálního vývoje ",
			"psychosociálního vývoje ",
			"kognitivního vývoje ",
			"morálního vývoje ");
	pridejOtazku(
			"Jako celek se superego řídí:",
			"principem rozumu ",
			"principem slasti ",
			"principem dokonalosti ",
			"principem reality ",
			"principem dokonalosti ");	
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