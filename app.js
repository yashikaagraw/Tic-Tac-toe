let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true; //playerX, playerO

//let arr = ["apple", "banana", "litchi"];

// 2D
//let arr2= [["apple", "litchi"], ["potato", "mushroom"], ["shirts", "pants"]]

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

//for adding event listeners
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        // box.innerText = "Abcd";
        if(turnO ){
            box.innerText = "O";
            turnO = false;

        } else { //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(pattern of winPatterns){
        console.log(pattern);
    }
}
