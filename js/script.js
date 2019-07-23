function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


var stone = 'kamień';
var paper = 'papier';
var scissors = 'nożyczki';

printMessage('Zagrałem ' + stone + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + paper + '! Jeśli Twój ruch to nożyczki, to wygrywasz!');
printMessage('Zagrałem ' + scissors + '! Jeśli Twój ruch to kamień, to wygrywasz!');


var computerMove;

computerMove = stone;
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove = paper;

printMessage('Zagrałem ' + playerMove + '! Wygrałem!');







// ruch komputera


var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);
console.log('wylosowana liczba to: ' + randomNumber);

if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
	computerMove = paper;
} else {
  computerMove = scissors;
}
printMessage('Mój ruch: ' + computerMove);