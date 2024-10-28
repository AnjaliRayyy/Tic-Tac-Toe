console.log("Welcome to Tic Tac Toe")
let turn="X";
let gameover=false;

//Function to change the turn
const changeTurn=(turn)=>{
    return turn === "X"?"0":"X"
}

//Function to check for a win
const checkWin=()=>{
    let wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    let boxtexts=document.getElementsByClassName("content-box")
    wins.forEach(e=>{
        if(boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML  && boxtexts[e[1]].innerHTML===boxtexts[e[2]].innerHTML && boxtexts[e[0]].innerHTML!==''){
            gameover=true;
            document.getElementById("turn").innerText=boxtexts[e[0]].innerHTML + " Won!!!"
            document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.width="200px"
        }
    })
}

//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext=element.querySelector('.content-box');
    element.addEventListener("click",function(){
        if(boxtext.innerText=== ''){
            boxtext.innerText= turn;
            turn=changeTurn(turn);
            checkWin();
            if (gameover==false){
            document.getElementById("turn").innerText="Turn for "+turn;
            }
        }
    })
})

//Adding onClick listerner to Reset button
let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    let boxtexts=Array.from(document.getElementsByClassName("content-box"))
    boxtexts.forEach((element)=>{
        element.innerText='';
    })
    document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.width="0px"
    gameover=false;
    if (gameover==false){
        document.getElementById("turn").innerText="Turn for "+turn;
    }
})

