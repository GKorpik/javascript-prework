
/**
* Zmienne
**/


var stone = 'kamień';
var paper = 'papier';
var scissors = 'nożyczki';
var argMoveId, argPlayerMove, argComputerMove, randomNumber, computerMove, argButtonName, buttonRock, buttonPaper, buttonScissors;

function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
/**
 * Guziki
 */

buttonRock = document.getElementById('button-rock');

buttonPaper = document.getElementById('button-paper');

buttonScissors = document.getElementById('button-scissors ');


function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}


/**
 * Funkcja getMoveName
 */

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return stone;
  } else if (argMoveId == 2) {
  	return paper;
  } else if (argMoveId == 3) {
  	return scissors
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Funkcja displayResult 
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == paper && argComputerMove == stone) {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == stone && argComputerMove == scissors) {
  	printMessage('Wygrywasz');
  } else if (argPlayerMove == scissors && argComputerMove == paper ) {
  	printMessage('Wygrywasz');
  } else {
    printMessage('Przegrywasz');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
var playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);


displayResult(playerMove, computerMove);


buttonRock.addEventListener('click', function(){ buttonClicked('Guzik kamień'); });

buttonPaper.addEventListener('click', function(){ buttonClicked('Guzik papier'); });

buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik nożyce'); });


