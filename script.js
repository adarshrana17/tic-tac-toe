let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".rstbtn");
let newbutton = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let info = document.querySelector(".info");
let msg = document.querySelector("#msg");
let turnX = true;
let turn = "X";
let count = 0;

const winPatterns = [
[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
const changeTurn = () =>{
  return turn === "X"?"O":"X";
}
const resetGame = () =>{
  turnX=true;
  enableBoxes();
  msgcontainer.classList.add("hide");
  if(turn=== "O"){
    info.innerText= "X";
  }
}
boxes.forEach((box) => {
  box.addEventListener("click" ,() =>{
    if(turnX){
    box.innerText="X";
    turnX=false;
    }
    else{
      box.innerText="O";
      turnX=true;
    }
    count +=1;
    if(count == 9)
{
  drawFunction();
}    box.disabled="true";

    checkWinner();
    turn=changeTurn();
    document.getElementsByClassName("info")[0].innerText=""+turn+"";
  });
});

const disableBoxes = () => {
  for( let box of boxes){
box.disabled=true;
  }
};
const enableBoxes = () => {
  for( let box of boxes){
box.disabled=false;
box.innerText = "";
  }
};
const showWinner = (winner) =>{
msg.innerText = `Congratulation, Winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();
};
const drawFunction = () =>{
  msg.innerText = `It's a draw`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
}
const checkWinner = () =>{
  for( let pattern of winPatterns){
   let pos1value = boxes[pattern[0]].innerText;
   let pos2value = boxes[pattern[1]].innerText;
   let pos3value = boxes[pattern[2]].innerText;

   if(pos1value != "" && pos2value != "" && pos3value != ""){
    if(pos1value === pos2value && pos2value === pos3value){
      showWinner(pos1value);
    }     
   }
   
  }
};

// resetbtn.addEventListener("click", resetGame);
newbutton.addEventListener("click", resetGame);
 