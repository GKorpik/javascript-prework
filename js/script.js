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


var compoterMove;

compoterMove = stone;
printMessage('Zagrałem ' + compoterMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove = paper;

printMessage('Zagrałem ' + playerMove + '! Wygrałem!');
