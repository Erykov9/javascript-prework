function printMessage(msg){
	let div = document.createElement('p');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function result() {
	let pc = document.getElementById('pc-win')
    let play = document.getElementById('player-win')
    pc.innerHTML = computerWin;
    play.innerHTML = playerWin;
}
