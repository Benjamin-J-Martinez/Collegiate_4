const game = JSON.parse(localStorage.getItem('game'));

const buttons = document.getElementsByClassName('col px-auto my-4');
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', event => {
        game.player2.difficulty = event.target.id;
        localStorage.setItem('game', JSON.stringify(game));
    })
}