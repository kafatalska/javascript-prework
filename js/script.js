function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  else if(argMoveId == 2){
    return 'papier';
  }
  else if(argMoveId == 3){
    return 'nożyce';
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

function displayResult( computerMove, playerMove){
  if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
  }
  else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }
  else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  }
  else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
  else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  }
  else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  }
  else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
  }
  else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  }
  else if( playerMove == 'nieznany ruch'){
    printMessage('Wybrałeś nieznany ruch!');
  }
}
console.log('moves:', computerMove, playerMove);

displayResult (computerMove, playerMove);