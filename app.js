let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rstbtn");
let newgameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


// playerX, playerY
let turn0 =  true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];


// main program
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box is clicked");
        if(turn0) {
            box.innerText = "0";
            turn0 = false;

        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


// for rest and new game 
newgameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame)


// function to check winner
function checkWinner() {
    for ( let pattern of winPatterns) {
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;

        if(post1 != "" && post2 != "" && post3 != ""){
            if(post1 === post2 && post2 == post3){
                showWinner(post1);

        };
    };
};
};


// function of to disabled boxes after getting winner
function disabledBoxes(){
    for (let box of boxes){
        box.disabled = true;
    };
};

//  function to display winner and disabled boxes
function showWinner(winner){
    msg.innerText = `Congratulations, Winner is  ${winner}`; 
    msgContainer.classList.remove("hide");
    disabledBoxes();

};
 

// function to enabled boxes after clicking the new Game button
function enabledBoxes(){
    for (let box of boxes){
        box.disabled = false;
        box.innerText = ""
    };
};


//function of restbutton
function resetGame() {
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

