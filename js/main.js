class Result {

    static winner(boxes, moves, winners) {



        //      ----------  X   ---------

        if (boxes[0][0] == 'X' && boxes[0][1] == 'X' && boxes[0][2] == 'X') {
            winners.push('X');
            return {
                winners,
                win: true
            };
        } else if (boxes[1][0] == 'X' && boxes[1][1] == 'X' && boxes[1][2] == 'X') {
            winners.push('X');
            return {
                winners,
                win: true
            };
        } else if (boxes[2][0] == 'X' && boxes[2][1] == 'X' && boxes[2][2] == 'X') {
            winners.push('X');
            return {
                winners,
                win: true
            };
        } else if (boxes[0][0] == 'X' && boxes[1][0] == 'X' && boxes[2][0] == 'X') {
            winners.push('X');
            return {
                winners,
                win: true
            };
        } else if (boxes[0][1] == 'X' && boxes[1][1] == 'X' && boxes[2][1] == 'X') {
            winners.push('X');
            return {
                winners,
                win: true
            };
        } else if (boxes[0][2] == 'X' && boxes[1][2] == 'X' && boxes[2][2] == 'X') {
            winners.push('X');
            return {
                winners,
                win: true
            };
        } else if (boxes[0][0] == 'X' && boxes[1][1] == 'X' && boxes[2][2] == 'X') {
            winners.push('X');
            return {
                winners,
                win: true
            };
        } else if (boxes[2][0] == 'X' && boxes[1][1] == 'X' && boxes[0][2] == 'X') {
            winners.push('X');
            return {
                winners,
                win: true
            };
        }

        //      ----------  O   ---------
        else if (boxes[0][0] == 'O' && boxes[0][1] == 'O' && boxes[0][2] == 'O') {
            winners.push('O');
            return {
                winners,
                win: true
            };
        } else if (boxes[1][0] == 'O' && boxes[1][1] == 'O' && boxes[1][2] == 'O') {
            winners.push('O');
            return {
                winners,
                win: true
            };
        } else if (boxes[2][0] == 'O' && boxes[2][1] == 'O' && boxes[2][2] == 'O') {
            winners.push('O');
            return {
                winners,
                win: true
            };
        } else if (boxes[0][0] == 'O' && boxes[1][0] == 'O' && boxes[2][0] == 'O') {
            winners.push('O');
            return {
                winners,
                win: true
            };
        } else if (boxes[0][1] == 'O' && boxes[1][1] == 'O' && boxes[2][1] == 'O') {
            winners.push('O');
            return {
                winners,
                win: true
            };
        } else if (boxes[0][2] == 'O' && boxes[1][2] == 'O' && boxes[2][2] == 'O') {
            winners.push('O');
            return {
                winners,
                win: true
            };
        } else if (boxes[0][0] == 'O' && boxes[1][1] == 'O' && boxes[2][2] == 'O') {
            winners.push('O');
            return {
                winners,
                win: true
            };
        } else if (boxes[2][0] == 'O' && boxes[1][1] == 'O' && boxes[0][2] == 'O') {
            winners.push('O');
            return {
                winners,
                win: true
            };
        } else if (moves == 9) {
            winners.push('T');
            return {
                winners,
                win: true
            };
        }

        return {
            winners,
            win: false
        };
    }
}

class Score {
    constructor(winners) {
        let winsX = 0,
            winsO = 0,
            ties = 0;

        console.log('Score array: ', winners.winners);

        winners.winners.forEach(winner => {
            if (winner === 'X') winsX++;
            else if (winner === 'O') winsO++;
            else if (winner === 'T') ties++;
        });
        const showScore = () => {
            const result__cross = document.querySelector('.result__cross');
            const result__circle = document.querySelector('.result__circle');
            const result__tie = document.querySelector('.result__tie');

            result__cross.textContent = `X - ${winsX}`;
            result__circle.textContent = `O - ${winsO}`;
            result__tie.textContent = `TIE - ${ties}`;
        }

        showScore();


    }
}

class Board {
    constructor(boxes, winners) {
        const boxesElements = document.querySelectorAll('.board__block');
        let moves = 0;
        let playerX = true;
        let winnersArray2 = [];



        const markMove = (e) => {
            moves++;

            if (playerX) {
                e.target.innerHTML = '<i class="fas fa-times"></i>';
                boxes[e.target.dataset.x][e.target.dataset.y] = 'X';
            } else {
                e.target.innerHTML = '<i class="far fa-circle"></i>';
                boxes[e.target.dataset.x][e.target.dataset.y] = 'O';
            }

            playerX = !playerX;
            e.target.removeEventListener('click', markMove);


            let winnersArray = Result.winner(boxes, moves, winners);
            console.log('if win ', winnersArray.win);

            const currentScore = new Score(winnersArray);



            //     block clicking
            if (winnersArray.win) {
                boxesElements.forEach(box => {

                    box.removeEventListener('click', markMove);
                })
            }
            //console.log(winnersArray, boxes, moves);


        }
        //console.log('again');
        boxesElements.forEach(e => {
            e.addEventListener('click', markMove);
            e.innerHTML = '';
        })
    }
}

class Game {
    constructor() {
        let winners = new Array();
        this.boxes = new Array(3);
        this.startGame = () => {

            for (let i = 0; i < 3; i++) {
                this.boxes[i] = new Array(3);
                for (let j = 0; j < 3; j++) {
                    this.boxes[i][j] = "[" + i + "," + j + "]"
                }
            }
            // console.log(this.boxes);

            const newGame = new Board(this.boxes, winners);
        }

        this.startGame();
        const playAgain = document.querySelector('.play-again');
        playAgain.addEventListener('click', this.startGame);

    }

}

const game = new Game();