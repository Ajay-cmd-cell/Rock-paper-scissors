let userScore = 0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ["rock","paper","scissors"];
    // const randIdx = Math.floor(Math.random() * 3)+1;
    // return options[randIdx];

    const randomValue = Math.floor(Math.random() * 3);
    // console.log(randomValue);
    return options[randomValue];
}

const drawGAme = () => {
    console.log("Game was draw");
    msg.innerText ="Draw... Please play again"
    msg.style.background="#780000";
};

const showWinner = (userwin,userchoice,compChoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText= 'You win! ';
        msg.style.background = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;

        console.log("You lose...");
        msg.innerText='You lose..';
        msg.style.background = "red";
    }
}

const playgame = (userchoice) =>
{
    console.log("user choice =",userchoice);
    const compChoice = genCompchoice();
    console.log("comp choice =",compChoice);

    if(userchoice === compChoice) {
        drawGAme();
    }
    else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userchoice==="paper") {
           userwin =compChoice === "scissors" ? false  : true ;
        }
        else{
            userwin = compChoice === "rock" ? false : true; 
        }
        showWinner(userwin,userchoice,compChoice);
    }
   
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>
    {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});




