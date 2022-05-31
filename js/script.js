function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let computerMove = 'nieznany ruch';
let playerMove = 'nieznany ruch';
let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt(`Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce`)



if(randomNumber == 1) {
    computerMove = 'kamień'
} else if (randomNumber == 2) {
    computerMove = 'papier'
} else if (randomNumber == 3) {
    computerMove = 'nożyce'
}

if(playerInput == 1) {
    playerMove = 'kamień'
} else if (playerInput == 2) {
    playerMove = 'papier'
} else if (playerInput == 3) {
    playerMove = 'nożyce'
}


console.log(`Komputer: ${computerMove}`);
console.log(`Gracz: ${playerMove}`);

printMessage(`Twój ruch to: ${playerMove}`)
printMessage(`Mój ruch to: ${computerMove}`)

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
} else if (playerMove == 'nieznany ruch') {
    printMessage('Wybierz liczbę!');
}
