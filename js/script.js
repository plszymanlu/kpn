var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + 'nożyce' + '! Jeśli Twój ruch to kamień, to wygrywasz!');

var playerMove;
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
printMessage('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'kamień';
} else {
    computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

if (randomNumber == '2') {
    computerMove = 'papier';
} else {
    computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

if (randomNumber == '3') {
    computerMove = 'nożyce';
} else {
    computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

var playerMove, playerInput;
playerMove = argButtonName;
console.log('wpisana odpowiedź to: ' + playerInput);

if (playerInput == '1') {
    playerMove = 'kamień';
} else {
    playerMove = 'błędny wybór';
}
printMessage('Twój ruch: ' + playerMove);

if (playerInput == '2') {
    playerMove = 'papier';
} else {
    playerMove = 'błędny wybór';
}
printMessage('Twój ruch: ' + playerMove);

if (playerInput == '3') {
    playerMove = 'nożyce';
} else {
    playerMove = 'błędny wybór';
}
printMessage('Twój ruch: ' + playerMove);

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */

function getMoveName(argMoveId) {
    console.log('wywołano funckję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else {
        printMessage('Nie znam ruchu id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
    if (argMoveId == 2) {
        return 'papier';
    } else {
        printMessage('Nie znam ruchu id ' + argMoveId + '. Zakładam, że chodziło o "papier".');
        return 'papier';
    }
    if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu id ' + argMoveId + '. Zakładam, że chodziło o "nożyce".');
        return 'nożyce';
    }
}

/**
 * Describe this function...
 */

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funckje displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
    } else {
        printMessage('Przegrywasz :(');
    }
    if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
    } else {
        printMessage('Przegrywasz :(');
    }
    if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
    } else {
        printMessage('Przegrywasz :(');
    }
    if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
    } else {
        printMessage('Przegrywasz :(');
    }if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
    } else {
        printMessage('Przegrywasz :(');
    }
    if (argPlayerMove == 'papier' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
    } else {
        printMessage('Przegrywasz :(');
    }
    if (playerMove == computerMove) {
        printMessage('Remis!')
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displatResult(playerMove, computerMove);

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
}
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });