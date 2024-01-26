let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newgame = document.querySelector('#startGameBtn');

let msg = document.querySelector('.msg');

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    newgame.style.display = "none";
    msg.style.display = "none";
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turnO) {
        //Player O
      box.innerText = "O";
      turnO = false;
    } else {
        //Player X
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
};

const showWinner = (winner) => {
   msg.innerText = `Congratulation, Winner is Player ${winner}`;
   newgame.style.display = "inline-block";
   disableBoxes();
};

const checkWinner = () => {
    for( let pattern of winPatterns){        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != '' && pos2val != '' && pos3val != ''){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner " + pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newgame.addEventListener('click', resetGame)
resetBtn.addEventListener('click', resetGame)
