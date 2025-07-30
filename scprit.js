let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;
//playerx,playery
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
let resetg =()=>{
    turno=true;
    enableboxes();
}
let enableboxes=()=>{
   for (let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgcon.classList.add("hide");
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if (turno){
            box.textContent="X";
            turno=false;

        }
        else{
            box.textContent="O";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    })
});
const showwinner=(player)=>{
    msg.innerHTML=`CONGRACHULATION ${player}  FOR WINNING`;
    msgcon.classList.remove("hide");
}
const checkwinner=()=>{
    for(parten of winpattern){
       let pos1=boxes[parten[0]].innerHTML;
       let pos2=boxes[parten[1]].innerHTML;
       let pos3=boxes[parten[2]].innerHTML;
       if (pos1 !="" &&pos2 !=""&&pos3!=""){
        if(pos1==pos2&&pos2==pos3){
            alert(`Player ${pos1} wins`);
            for (let box of boxes){
                box.disabled=true;
            }
            showwinner(pos1);
        }
       }
    }
    
};
const resetgame=()=>{

}
newbtn.addEventListener("click",resetg);
resetbutton.addEventListener("click",resetg);
