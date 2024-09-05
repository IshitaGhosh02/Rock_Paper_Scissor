let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");


const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const playGame=(userChoice)=>{

    console.log("user choice= ",userChoice);
    //Generate computer choice
    const compChoice=generateCompChoice();
    console.log("computer choice= ",compChoice);

    //Show Winner
    if(userChoice===compChoice){
        //draw game
        console.log("Game was draw");
        msg.innerText="Game was DRAW! Play Again";
        msg.style.backgroundColor="#081b31"
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
                userWin=compChoice==="scissors"? false:true;
        }else{
            userWin=compChoice==="rock"? false:true;
        }

        if(userWin){
            userScore++;
            userScorePara.innerText=userScore;
            msg.innerText=`You WIN! your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green"
        }else{
            compScore++;
            compScorePara.innerText=compScore;
            msg.innerText=`You LOSE! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red"
        }
    }
};

const generateCompChoice=()=>{
    //rock,paper,scissor
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});