//call elements
let btns = document.querySelectorAll(".button");
let winnermsg = document.querySelector(".winnermsg");
let wellText=document.querySelector(".wellcomeText");
let newGame=document.querySelector(".newGame");
let resetBtn=document.querySelector(".reset");
let afterWin=document.querySelector("#afterWin");

//call elements

let turnO = "true";


//winning pattren array
const winPattren = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 5, 6],
    [6, 7, 8]
];
//winning pattren array

//reset btns
const resetgame=()=>{
    enable();
    turnO="true";
    afterWin.classList.add("hide");
    wellText.classList.remove("hide");
}

//reset btns

// for each loop for array

btns.forEach(

    (btns) => {
        btns.addEventListener("click", () => {
            console.log("btn was clicked");

            if (turnO === "true") {

                btns.innerText = "O";
                turnO = "false";
                console.log("o");
            }
            else {

                btns.innerText = "X";
                turnO = "true";
                console.log("x");
            }
            btns.disabled=true;
            checkWinner();
            
        })
       
    })        
//for each loop for array
//disable btns

const disableBtns=()=>{
    for(let disab of btns){
        disab.disabled=true;
    }
    wellText.classList.add("hide");
    afterWin.classList.remove("hide");
}

//disable btns

//enabled btns
const enable=()=>{
    for(let i of btns){
        i.disabled=false;
        i.innerText="";
    }
  
}


//enabled btns
        
//winnerMsg

const winnerMsg=(winner)=>{
    winnermsg.innerText=`Congratulation, Winner is  ${winner} `;
winnermsg.classList.remove("hide");
newGame.classList.remove("hide");
disableBtns();
}

//winnerMsg



//checking winning pattren
let checkWinner=()=>{
    for(let patt of winPattren){
        let possition1 = btns[patt[0]].innerText;
        let possition2 = btns[patt[1]].innerText;
        let possition3 = btns[patt[2]].innerText;
        
    if(possition1 !=="" && possition2 !=="" && possition3 !==""){
        if(possition1===possition2 && possition2===possition3){
            console.log("winner is",possition1);
            winnerMsg(possition1);
        }
    }
    }

};
resetBtn.addEventListener("click",resetgame);
newGame.addEventListener("click",resetgame);

//checking winning pattren
