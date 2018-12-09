'use strict';
(function(){
	// Zacznijmy od pętli, która 3 razy wyświetli tekst na stronie:

	for( var i = 0; i < 3; i++ ){
		document.write('Loop iteration: ' + i + '<br>');
	}

	/* Pewnie już się domyślasz, jak działa pętla for. Omówmy sobie jednak szczegółowo jej składnię. Po słowie "for" w nawiasie podajemy:
	1. operację wykonywaną raz, przy pierwszym uruchomieniu pętli,
	2. warunek sprawdzany przed każdym wykonaniem pętli,
	3. operację wykonywaną po każdym wykonaniu pętli.

	Możemy to wytłumaczyć na powyższym przykładzie:
	1. definujemy zmienną i o wartości 0,
	2. przed każdym wykonaniem pętli sprawdzamy, czy i<3 jest prawdziwe, i tylko jeśli jest prawdziwe pętla zostanie wykonana,
	3. po wykonaniu pętli wykonywana jest operacja i++, czyli i jest zwiększone o 1.

	Pętla będzie wykonywana tak długo, jak długo warunek będzie prawdziwy.

	Takie zastosowanie pętli for może być przydatne, jeśli potrzebujemy wykonać jakąś operację znaną nam ilość razy. Pamiętaj jednak, że w warunku nie musimy podawać konkretnej liczby - może to też być zmienna lub... długość tablicy!

	Jeśli w powyższym przykładzie zastąpimy 3 funkcją zwracającą ilość elementów w tablicy, będziemy mogli wykonać jakąś operację na każdym jej elemencie. Spróbujmy np. wyświetlić na stronie wszystkie teksty z tablicy:
	*/

	var exampleOne = ['lorem', 123, null, 3+'c', '999'];

	for( var i = 0; i < exampleOne.length; i++ ){
		if(typeof(exampleOne[i]) == 'string'){
			document.write('Text from exampleOne at index ' + i + ' is: ' + exampleOne[i] + '<br>');
		}
	}

	/* Omówmy sobie powyższy przykład krok po kroku:
	1. Jak poprzednio, definiujemy zmienną i, która będzie iteratorem (licznikiem) wykonań pętli.
	2. Tym razem jednak, warunkiem sprawdzanym przed każdym wykonaniem pętli będzie sprawdzenie czy wartość zmiennej i jest mniejsza od ilości elementów w tablicy exampleOne.
	3. W pętli sprawdzamy typ elementu z exampleOne o indeksie i, oraz porównujemy ten typ z ciągiem znaków "string".
	4. Jeśli warunek jest prawdziwy, czyli ten element jest tekstem, to wykonujemy document.write, za pomocą którego wyświetlamy na stronie tekst zawierający zmienną i oraz element z exampleOne o indeksie i.

	ĆWICZENIE:
	1. Stwórz zmienną input, której wartością jest tablica zawierającą liczby i teksty.
	2. Stwórz zmienną sum o wartości 0.
	3. Stwórz zmienną texts zawierającą pustą tablicę.
	4. Napisz pętlę, przechodzącą przez wszystkie elementy tablicy input.
	4.1. Jeśli wartość elementu tablicy jest liczbą, dodaj ją do sumy,
	4.2. Jeśli wartość elementu tablicy jest tekstem, umieść ją jako nowy element w tablicy texts.
	5. Wyświetl na stronie sumę liczb.
	6. Napisz pętlę, przechodzącą przez wszystkie elementy tablicy texts.
	6.1. Wyświetl na stronie tekst w formacie "Text number 1 is: lorem", gdzie 1 oznacza pierwszy tekst (czyli element o indeksie 0).
	*/
	var input = ['lorem',123,'hello',777,'inspun'];
	var sum = 0;
	var text = [];
	for( var i = 0; i < input.length; i++ ) {
		if(typeof(input[i]) == 'number') {
			sum += input[i];
		}
		if(typeof(input[i]) == 'string'){
			console.log(input[i]);
			text.push(input[i]);
		}
		console.log('sum variable => ', sum);
		console.log('text array =>', text);
	}
	console.log('sum variable => ', sum);
	console.log('text array =>', text);
	document.write('The amount in sum variable is: ' + sum + '<br>');
	document.write('The content of text array is ' + text + '<br>');

})();


(function(){
	// Zacznijmy od zdefiniowania obiektu. Zastosujemy często stosowany format zapisu obiektów, w którym każdy element jest w nowej linii. Ułatwi to nam pisanie i czytanie obiektu:

	var exampleOne = {
		lorem: 'ipsum',
		foo: 'bar',
		year: 2000,
	};

	// W pętli for stosowaliśmy zmienną, którą zwyczajowo nazywa się "i". Pozwalała nam ona odwołać się do każdego kolejnego elementu. Analogicznie, w pętli for...in, mamy zmienną którą będzie przybierać wartość klucza każdego kolejnego elementu:

	for( var key in exampleOne ){
		document.write('Value at key "' + key + '" in exampleOne: ' + exampleOne[key] + '<br>');
	}

	/* Zwróć uwagę, że główna różnica jest w linii otwierającej pętlę, gdzie zamiast trzech wyrażeń mamy jedno, które mówi "niech zmienna key przybiera wartość kolejnych elementów z obiektu exampleOne".

	ĆWICZENIE:
	1. Ponownie napisz pętlę, przechodzącą przez każdy element obiektu exampleOne.
	1,1. Jeśli wartość jest tekstem, dodaj do niej tekst w formacie " (10)", gdzie 10 to liczba znaków w oryginalnej wartości tego elementu.
	1.2. Wyświetl wartość elementu.

	Podpowiedź: do tej pory nie uczyliśmy się jak sprawdzić długość tekstu. Znajdź odpowiedź w internecie za pomocą wyszukiwarki Google.
	*/
for( var key in exampleOne ) {
	if (typeof(exampleOne[key]) == 'string' ) {
		var itemLenght = exampleOne[key].length;
		/*	console.log('itemLenght value =>',itemLenght);*/
		var stringToInsert = exampleOne[key] + ' (' + itemLenght + ')';
		/*	console.log('stringToInsert => ', stringToInsert);
		console.log('key value =>', key);
		console.log('exampleOne[key] value', exampleOne[key])*/
		exampleOne[key] = stringToInsert;
	/*	console.log('exampleOne array after spilce  =>', exampleOne[key]);	*/
		document.write('The text string with added length iu curly braces ' + exampleOne[key] + '<br>');
	}
}
})();



(function(){
	/* W tym przykładzie mamy kilka boksów i chcemy aby każdy z nich:
	- w nagłówku miał swoje id,
	- po kliknięciu w nagłówek cały boks zmieniał kolor tła.

	Zacznijmy od napisania funkcji, która zmienia kolor tła boksa. Funkcja ta będzie przypięta do zdarzenia click na nagłówku boksa, więc słowo this w tej funkcji będzie oznaczało "kliknięty nagłówek".
	*/

	var headerClickCallback = function(event){
		this.parentElement.classList.toggle('box-bg');
	};
	var buttonClickCallback = function(event){
		this.parentElement.classList.toggle('hide');
	};
	var showAllClickCallback = function(event){
		console.log(this);
		for(var i=0 ; i<boxes.length ; i++){
			var box = boxes[i];
			console.log('box => ', box);
			box.classList.remove('hide');
		}
	}

	// Teraz musimy znaleźć wszystkie boksy - użyjemy do tego ich klasy. Pamiętaj, że querySelector zwraca pierwszy element pasujący do selektora, a querySelectorAll zwraca tablicę ze wszystkimi pasującymi elementami.

	var boxes = document.querySelectorAll('.box');

	for( var i = 0; i < boxes.length; i++ ){

		// Najpierw zapiszemy sobie nagłówek bieżącego boksa do zmiennej, aby nie wyszukiwać go ponownie:

		var boxHeader = boxes[i].querySelector('header');
		console.log('boxes => ', boxes);
		var button = boxes[i].querySelector('.X');
		console.log('button => ', button);

		// Następnie w treści nagłówka wpiszemy id boksa (nie nagłówka!)

		boxHeader.innerHTML = 'Box id:' + boxes[i].id;

		// I jeszcze pozostaje nam przypisać funkcję headerClickCallback do eventu click na tym boksie:

		boxHeader.addEventListener('click', headerClickCallback);
		button.addEventListener('click', buttonClickCallback);
	}

		var showAll = document.getElementById('show-all');
		showAll.addEventListener('click', showAllClickCallback);
		console.log('showAll => ', showAll);

	/* Jak widzisz, cały ten kod jest bardzo podobny do przykładów z poprzedniego modułu. Jedyna różnica, to użycie pętli, która wykonuje te same operacje dla wielu elementów.

	ĆWICZENIE:
	1. W kodzie CSS dodaj deklarację, która dla elementów z klasą "hide" będzie nadawała styl display:none;
	2. W kodzie HTML do każdego boksa dodaj button z klasą "close" i treścią "x".
	3. Zmień powyższy kod w taki sposób, aby klikanie tego guzika dodawało klasę "hide" dla boksa, w którym został kliknięty guzik.
	4. W kodzie HTML pod boksami dodaj guzik "Show all".
	5. Dodaj poniżej kod, dzięki któremu kliknięcie guzika "Show all" będzie usuwać klasę "hide" ze wszystkich boksów.

	Zwróć uwagę, że pkt. 3 będzie wymagał dodania wewnątrz pętli przywiązania funkcji do kliknięcia na guziku w boksie.

	Pkt. 5 będzie wymagał dodania poza pętlą przywiązania funkcji do kliknięcia na jednym guziku - ale wewnątrz tej funkcji będzie musiała znalęźć się pętla, która wykona operację dla każdego boksa.
	*/
})();
