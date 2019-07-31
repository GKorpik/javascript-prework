/**
* Zmienne
**/
const stone = 'kamień',
      paper = 'papier',
      scissors = 'nożyczki';




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

const buttonRock = document.getElementById('button-rock'),
      buttonPaper = document.getElementById('button-paper'),
      buttonScissors = document.getElementById('button-scissors');


function buttonClicked(argButtonName) {
  clearMessages();
  
  const playerMove = argButtonName;
  let randomNumber, 
      computerMove;

  console.log(argButtonName + ' został kliknięty');
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);


  displayResult(playerMove, computerMove);
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
  	return scissors;
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


buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });