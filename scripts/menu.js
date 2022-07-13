const game = {
    mode: null,
    status: 0,
    player1: { 
        id: 1, 
        character: null
    },
    player2: {
        id: 2,
        character: null,
        difficulty: null,
    },

}

const buttons = document.getElementsByClassName('col');
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', event => {
        game.mode = event.target.id;
        localStorage.setItem('game', JSON.stringify(game));
    })
}

