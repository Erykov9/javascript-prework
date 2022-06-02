let computerWin = 0;
let playerWin = 0;


function playGame(playerInput) {
    clearMessages()
    console.log(playerInput);

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);


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
            playerWin++;
        } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
            printMessage('Przegrałeś!');
            computerWin++;
        } else if (computerMove == 'papier' && playerMove == 'papier') {
            printMessage('Remis!');
        } else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
            printMessage('Remis!');
        } else if (computerMove == 'nożyce' && playerMove == 'papier') {
            printMessage('Przegrałeś!');
            computerWin++;
        } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
            printMessage('Wygrałeś!');
            playerWin++;
        } else if (computerMove == 'papier' && playerMove == 'kamień') {
            printMessage('Przegrałeś!');
            computerWin++;
        } else if (computerMove == 'papier' && playerMove == 'nożyce') {
            printMessage('Wygrałeś!');
            playerWin++;
        } else if (playerMove == 'error'){
            printMessage('BŁĄD')
        }
    }
    displayResult(computerMove, playerMove)
    result()
}

document.getElementById('play-rock').addEventListener('click', function() { playGame(1) })
document.getElementById('play-paper').addEventListener('click', function() { playGame(2) })
document.getElementById('play-scissors').addEventListener('click', function() { playGame(3) })
