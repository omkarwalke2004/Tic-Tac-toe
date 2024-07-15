let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".l");
let newgame=document.querySelector(".new");
let m=document.querySelector(".msg-container");
let p=document.querySelector("#msg");





let turn=true;
let count=0;
const winpattern=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],[3,4,5],
    [6,7,8],
];
const restGame=() =>{
    turn = true;
    count=0;
    enableboxes();   
   
      m.classList.add("hide");
};
boxes.forEach((box)=>{

    box.addEventListener("click",()=>{
        
        console.log("box was clicked");
        if(turn){
            box.innerText="O";
            
            turn=false;
        }
        else{
            box.innerText="X";
            
            turn=true;

        }
        box.disabled=true;
        count=count+1;
        console.log(count);
        
     
        let c=check();
        if(count === 9 && !c){
            gameDraw();
        }
        
    });
    
});
const gameDraw=()=>{
    p.innerText="Game Has Been Draw";
    m.classList.remove("hide");
    disableBoxes();

};
const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};
const showwinner=(winne)=>{
   
   p.innerText="Congratualations Wineer is"+ winne;
    m.classList.remove("hide");
   
       
    
    disableBoxes();
};

const check=()=>{
for(let i of winpattern){
 let pos1=boxes[i[0]].innerText;
 let pos2=boxes[i[1]].innerText;
 let pos3=boxes[i[2]].innerText;
 if(pos1 != "" && pos2 != "" && pos3 != ""){
    if(pos1 === pos2 && pos2===pos3){
        console.log("winner",pos1);
        showwinner(pos1);
        return true;
    }
 }
}
};

newgame.addEventListener("click",restGame);
reset.addEventListener("click",restGame);

















