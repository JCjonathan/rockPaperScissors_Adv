var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    myArray = ['rock', 'paper', 'scissors'];
  var random_num = Math.random() * 3;
  var random_dice_side = Math.floor(random_num + 0);
  return myArray[random_dice_side];
    
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner

    if (userValue == aiValue) {
        return 'draw'
    }
    
    if ((userValue == 'scissors' && aiValue == 'paper' )
    || (userValue == 'paper' && aiValue == 'rock')
    || (userValue == 'rock' && aiValue == 'scissors')) {
      return 'user';
}

   if (( userValue == 'rock' && aiValue == 'paper' ) 
   || ( userValue == 'paper' && aiValue == 'scissors' )
   || ( userValue == 'scissors' && aiValue == 'rock' )) {
       return 'ai';
   }
}
   
 

// This function sets the scoreboard with the correct points
function setScore() {
    $("#userPoint").text(userPoint);
    $("#aiPoint").text(aiPoint);
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, opponet choose '+ aiValue);
        userPoint++;
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, opponet choose '+ aiValue);
        aiPoint++;
    }
    setScore();
}

// This function runs on page load
$(document).ready(function(){
    $( ".token" ).click(function(e) {
        evaluate(e);
    });


});