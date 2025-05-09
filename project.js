let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-button");
let newgame_btn=document.querySelector("#newgame_btn");
let msgCOntainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");



let turnO = true;
let count = 0;

const WinPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


const resetGame = () => {
    turnO=true;
    count=0;
    enableBoxes();
    msgCOntainer.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        
        if(turnO){
            box.innerText = "O";
            turnO= false;
        }else{
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true;
        count++;
        let isWinner = checKWinner();


        if (count === 9 && !isWinner){
            gameDraw();
        }
     });
        
});

const gameDraw = () => {
    msg.innerText = 'Game was a Draw.';
    msgCOntainer.classList.remove("hide");
    DisableBoxes();
    
};



const DisableBoxes = () => {
    for( let box of boxes) {
        box.disabled = true;
    }
};


const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};

const shoWWinner = (winner) => {

    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgCOntainer.classList.remove("hide");
    DisableBoxes();
};




const checKWinner = () => {
    for( let pattern of WinPatterns){
       
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;

            if(pos1Val!="" && pos2Val!="" && pos3Val!="") {
                if(pos1Val===pos2Val && pos2Val===pos3Val){
                    console.log("winner",pos1Val);
                    shoWWinner(pos1Val);
                    return true;
                }
            }
    }
};
let turn='O';
const turnText=document.getElementById('turn');
boxes.forEach(box=>{
    box.addEventListener('click', () => {
        if(box.textContent!=""){
            box.textContent=turn;
            turn=(turn==='O')?'X':'O';
            turnText.textContent=`Turn:${turn}`;
        }
    });
});


newgame_btn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click", resetGame);

