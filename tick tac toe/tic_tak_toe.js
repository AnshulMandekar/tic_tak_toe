const boxes = document.querySelectorAll(".box");
const header = document.querySelector(".header");
const resetbtn = document.querySelectorAll(".reset"); // Use querySelectorAll for multiple buttons



let turnO = false;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}


const showWinner = (winner) => {
  const winnerElement = document.querySelector("#winner"); // Rename the variable
  winnerElement.innerText = `Winner of the game is ${winner}`;
  header.classList.remove("hide");
};

const enableGame = () => {
  for (let box of boxes) {
    box.disabled = false;     // Enable all boxes
    box.innerText = "";       // Clear text inside the boxes
  }
  const winnerElement = document.querySelector("#winner");
  winnerElement.innerText = ""; // Clear winner message
  header.classList.add("hide"); // Hide the header
  turnO = false;                // Reset turn to player X
};


const checkWinner = () => {
  for(let patten of winPatterns){
    let innerElement1 = boxes[patten[0]].innerText;
    let innerElement2 = boxes[patten[1]].innerText;
    let innerElement3 = boxes[patten[2]].innerText;

    if( innerElement1 != "" && innerElement2 != "" && innerElement3 != ""){
      if(innerElement1 == innerElement2 && innerElement2 == innerElement3){
        console.log("Winner" , innerElement1);
        showWinner(innerElement1);
        disableBoxes();
      }
    }
  }
  return;
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
      box.disabled = true;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
      box.disabled = true;
    }
    checkWinner();
  });
});

resetbtn.forEach((btn) => {
  btn.addEventListener("click", enableGame); // Loop through and add event listeners
});
