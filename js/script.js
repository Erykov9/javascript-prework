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


if (computerMove == 'kamień' && playerMove == 'kamień') {
    console.log('Remis!');
} else if (computerMove == 'kamień' && playerMove == 'papier') {
    console.log('Wygrałeś!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    console.log('Przegrałeś!');
} else if (computerMove == 'papier' && playerMove == 'papier') {
    console.log('Remis!');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
    console.log('Remis!');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
    console.log('Przegrałeś!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    console.log('Wygrałeś');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    console.log('Przegrałeś!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    console.log('Wygrałeś!');
} else if (playerMove == 'nieznany ruch') {
    console.log('Wybierz liczbę!');
}



printMessage(`Twój ruch to: ${playerMove}`)
printMessage(`Mój ruch to: ${computerMove}`)
printMessage(`Zagrałem ${computerMove}! Jeśli Twój ruch to ${playerMove}, to wygrywasz!`)