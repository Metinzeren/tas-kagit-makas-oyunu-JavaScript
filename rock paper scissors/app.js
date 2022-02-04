const game = () =>{
    let pScore = 0;
    let cScore = 0;
    //oyunu başlatma
    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    // oyun oynama fonk
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation = "";

            });
        })
        //bilgisyar 
        const computerOptions = ["rock", "paper", "scissors"];
        
        options.forEach(option =>{
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];
               
                setTimeout(() =>{
                     //durumu gösterme
                compareHands(this.textContent, computerChoise);

                // resimleri güncelleme
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoise}.png`;
                },2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            });

        });

        
    };
    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoise, computerChoise) =>{
        const winner = document.querySelector(".winner");
        //beraberlik
        if(playerChoise === computerChoise){
            winner.textContent = "It is a tie";
            return;
        }
        //rock
        if(playerChoise === "rock"){
            if(computerChoise === "scissors"){
                winner.textContent = "Player Wins"
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //paper
        if(playerChoise === "paper"){
            if(computerChoise === "scissors"){
                winner.textContent = "Computer Wins"
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //scissors
        if(playerChoise === "scissors"){
            if(computerChoise === "rock"){
                winner.textContent = "Computer Wins"
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
            }
        }

    };
    // inner fonksiyonları çalıştırma
    startGame();
    playMatch();
};

// game function çalıştırma
game();