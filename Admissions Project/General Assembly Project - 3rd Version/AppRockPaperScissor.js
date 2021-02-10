      //General Assembly - Rock Paper Scissor Project
          const totalChoices = ['rock','paper','scissors'];
          let player1 = {
              name: 'Shaun Valentine',
              age: 43,
              location: 'Trabuco Canyon'
          };
          let playerComputer = {
              name: 'iMac Computer',
              age: 1,
              location: 'Los Angeles'
          };
          
          //console.log(computerChoice)
          let rock_button = document.getElementById('rock');
          let paper_button = document.getElementById('paper');
          let scissors_button = document.getElementById('scissors');
          let resultNarrative = document.getElementById('resultNarrative')
          let userScorePath = document.getElementById('playerScore');
          let computerScorePath = document.getElementById('computerScore');
          let playerScore = 0;
          let computerScore = 0;
          
          
          
                //Breaking out into Function
                const computerChooses = () => {
                    return computerChoice
                }
                

                //Breaking out into Function
                const compareChoices = (player) => {
                    let randomNum = Math.floor(Math.random()*3)
                    let computerChoice = totalChoices[randomNum]
                    console.log(computerChoice)
                    console.log(player)
                    if(computerChoice===totalChoices[0]){
                        if(player === totalChoices[1]){
                            narrative ("The Player wins! The computer chose "+totalChoices[0]+" and the player chose "+ totalChoices[1]) 
                            playerPoint(++playerScore);
                            console.log(playerScore);
                        }
                        else if (player === totalChoices[2]){
                            narrative ("The computer wins! The computer chose "+totalChoices[0]+" and the player chose "+ totalChoices[2]) 
                            computerPoint(++computerScore);
                            console.log(computerScore);
                        }
                        }
                        if(computerChoice===totalChoices[1]){
                          if(player === totalChoices[2]){
                            narrative ("The Player wins! The computer chose "+totalChoices[1]+" and the player chose "+ totalChoices[2])
                            playerPoint(++playerScore);
                            console.log(playerScore);
                          }
                          else if (player === totalChoices[0]){
                            narrative ("The computer wins! The computer chose "+totalChoices[1]+" and the player chose "+ totalChoices[0])
                            computerPoint(++computerScore);
                            console.log(computerScore);
                          }
                          }
                          if(computerChoice===totalChoices[2]){
                              if(player === totalChoices[0]){
                                narrative ("The Player wins! The computer chose "+totalChoices[2]+" and the player chose "+ totalChoices[0])
                                playerPoint(++playerScore);
                                console.log(playerScore);
                              }
                              else if (player === totalChoices[1]){
                                narrative ("The computer wins! The computer chose "+totalChoices[2]+" and the player chose "+ totalChoices[1])
                                computerPoint(++computerScore);
                                console.log(computerScore);
                              }
                              }
                          if (computerChoice === player){
                            narrative ("There is a tie! The computer chose "+ computerChoice + " and the player chose "+ player)
                          }
                }
           

                function main () {
                rock_button.addEventListener('click', function(){
                    player = compareChoices('rock');
                    console.log('you chose Rock') 
                    
                })
                paper_button.addEventListener('click', function(){
                    player = compareChoices('paper');
                    console.log('you chose Paper')  
                })
                scissors_button.addEventListener('click', function(){
                    player = compareChoices('scissors');
                    console.log('you chose Scissors')  
                })
            }

            main()

            function playerPoint (point) {
                userScorePath.innerHTML = point;
                console.log(point);
            }
    
            function computerPoint (point) {
                computerScorePath.innerHTML = point;
                console.log(point);
            } 

        let narrative = (result)=> {
            resultNarrative.innerHTML = result
        }

        document.getElementById('rockPic').addEventListener('click', function(){
            console.log("You chose the rock image");
        })

        document.getElementById('paperPic').addEventListener('click', function(){
            console.log("You chose the paper image");
        })

        document.getElementById('scissorsPic').addEventListener('click', function(){
            console.log("You chose the scissors image");
        })
                
          
        

        

        
