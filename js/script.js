function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function getMoveName(argMove) {
    if(argMove == 1) {
        return 'kamień'
    } else if (argMove == 2) {
        return 'papier'
    } else if (argMove == 3) {
        return 'nożyce'
    } else if (argMove >= 4 || argMove == [undefined]) {
        return 'error'
    }
}

function displayResult(argComputerMove, argPlayerMove) {
    printMessage(`Komputer zagrał: ${argComputerMove}`)
    printMessage(`Ty zagrałeś: ${argPlayerMove}`)

    if (computerMove == 'kamień' && playerMove == 'kamień') {
        printMessage('Remis!');
    } else if (computerMove == 'kamień' && playerMove == 'papier') {
        printMessage('Wygrałeś!');
    } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
        printMessage('Przegrałeś!');
    } else if (computerMove == 'papier' && playerMove == 'papier') {
        printMessage('Remis!');
    } else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
        printMessage('Remis!');
    } else if (computerMove == 'nożyce' && playerMove == 'papier') {
        printMessage('Przegrałeś!');
    } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
        printMessage('Wygrałeś');
    } else if (computerMove == 'papier' && playerMove == 'kamień') {
        printMessage('Przegrałeś!');
    } else if (computerMove == 'papier' && playerMove == 'nożyce') {
        printMessage('Wygrałeś!');
    } else if (playerMove == 'error'){
        printMessage('BŁĄD')
    }
}

let playerInput = prompt(`Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce`)
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerMove = getMoveName(playerInput);


displayResult(computerMove, playerMove)

// console.log(`Komputer: ${computerMove}`);
// console.log(`Gracz: ${playerMove}`);

// printMessage(`Twój ruch to: ${playerMove}`)
// printMessage(`Mój ruch to: ${computerMove}`)