const p1 = {
    name: "",
    score: 0,
    button: document.querySelector('#player1btn'),
    display: document.querySelector('#player1Display'),
    input: document.querySelector('#player1NameInput')

}

const p2 = {
    name: "",
    score: 0,
    button: document.querySelector('#player2btn'),
    display: document.querySelector('#player2Display'),
    input: document.querySelector('#player2NameInput')
}


const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.name = document.querySelector(`#${player.input.id}`).value;
            setTimeout( () => {
                alert(player.name  +  " wins!");
            }, 1000)
        }
        player.display.textContent = player.score;

    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // Clear out the input fields
    document.querySelector("#player1NameInput").value = '';
    document.querySelector("#player2NameInput").value = '';

    // Assign the input values to the name properties
    p1.name = document.querySelector("#player1NameInput").value;
    p2.name = document.querySelector("#player2NameInput").value;
}


