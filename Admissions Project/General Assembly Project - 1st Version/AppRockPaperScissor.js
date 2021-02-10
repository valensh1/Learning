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
          let randomNum = Math.floor(Math.random()*3)
          let computerChoice = totalChoices[randomNum]
          let rock_button = document.getElementById('rock');
          let paper_button = document.getElementById('paper');
          let scissors_button = document.getElementById('scissors');
          let resultNarrative = document.getElementById('resultNarrative')
          

          
                //Breaking out into Function
                const computerChooses = () => {
                    return computerChoice
                }
                

                //Breaking out into Function
                const compareChoices = (player) => {
                    console.log(computerChoice)
                    console.log(player)
                    if(computerChoice===totalChoices[0]){
                        if(player === totalChoices[1]){
                            narrative ("The Player wins! The computer chose "+totalChoices[0]+" and the player chose "+ totalChoices[1])
                        }
                        else if (player === totalChoices[2]){
                            narrative ("The computer wins! The computer chose "+totalChoices[0]+" and the player chose "+ totalChoices[2])
                        }
                        }
                        if(computerChoice===totalChoices[1]){
                          if(player === totalChoices[2]){
                            narrative ("The Player wins! The computer chose "+totalChoices[1]+" and the player chose "+ totalChoices[2])
                          }
                          else if (player === totalChoices[0]){
                            narrative ("The computer wins! The computer chose "+totalChoices[1]+" and the player chose "+ totalChoices[0])
                          }
                          }
                          if(computerChoice===totalChoices[2]){
                              if(player === totalChoices[0]){
                                narrative ("The Player wins! The computer chose "+totalChoices[2]+" and the player chose "+ totalChoices[0])
                              }
                              else if (player === totalChoices[1]){
                                narrative ("The computer wins! The computer chose "+totalChoices[2]+" and the player chose "+ totalChoices[1])
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
            
            

        let narrative = (result)=> {
            resultNarrative.innerHTML = result
        }

        //narrative();

        
