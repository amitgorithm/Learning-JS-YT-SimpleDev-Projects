let score = JSON.parse(localStorage.getItem('score')) || {
          wins: 0,
          losses: 0,
          ties: 0
        }; // by using the || operator, we say that if score is not true, then reset it to the deafualt value, using the default operator || 

        updateScoreElement();

    // workflow: after we update the score,we will store that value in a localStorage using localStorag.setItem('score', JSON.stringify(score)) as localStorage only supports strings.hence convert the score object into string, using stringify.
    // after that, when we load the page, we want to store that localstorage(score) into an object using JSON.parse to convert that string back to its value of score.

      // const score = {
      //   wins: 0,
      //   losses: 0,
      //   ties: 0

      // };

      // instead of storing const score as an object with wins, losses and ties property-value pairs, we can directly store JSON.parse(localStorage.getItem('score')) into the const score so that it remember the value and doesnt become xero every time we refresh the page. In this format :

      
      // if(!score) {
      //   score = {
      //     wins: 0,
      //     losses: 0,
      //     ties: 0
      //   }
      // }


    // console.log(localStorage.getItem('score'));
    
  //  console.log(JSON.parse(localStorage.getItem('score')));
   // to convert a JSON string back to java script object.



    function playGame(playerMove) {
      const computerMove =  pickComputerMove();
      
      let result='';

      if(playerMove === 'scissors')  {
              if(computerMove==='rock'){ result = 'You Lose.'}
              else if(computerMove==='paper'){result='You Win.'}
              else if (computerMove==='scissors'){result='Tie.'}

      } else if (playerMove === 'paper') {
            if(computerMove==='rock'){ result = 'You Win.'}
            else if(computerMove==='paper'){result='Tie.'}
            else if (computerMove==='scissors'){result='You Lose.'}
      

      } else if (playerMove === 'rock') {
            if(computerMove==='rock'){ result = 'Tie.'}
            else if(computerMove==='paper'){result='You Lose.'}
            else if (computerMove==='scissors'){result='You Win.'}
      };

     

     
     if(result === 'You Win.') {
      score.wins +=1;

     }else if (result === 'You Lose.') {
      score.losses +=1;

     } else if (result === 'Tie.') {
      score.ties += 1;

     };
     
     localStorage.setItem('score', JSON.stringify(score)); //converting the javascript object 'score' into a string format to be supported by  the localStorage  method

     updateScoreElement();





      document.querySelector('.js-result').innerHTML = result ;

      document.querySelector('.js-moves')
          .innerHTML = `You. 
    <img src="images/${playerMove}-emoji.png" class="move-icon" >
    
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
     
     
    }

    function updateScoreElement () {
       document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses},    Ties: ${score.ties}`;

    }
  
    

     function pickComputerMove(){

      const randomNumber =  Math.random();
      let computerMove = '';

      if(randomNumber >= 0 && randomNumber < 1/3 ) 
        {
        computerMove= 'rock';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove= 'paper';

      } else if (randomNumber >= 2/3 && randomNumber < 1) { 
       computerMove= 'scissors';

      }

      return computerMove;

      // console.log('after'); // nothing is working after return statement

    }