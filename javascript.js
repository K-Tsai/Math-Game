let playing= false;
let score;
let time;
//if we click on the start/reset
document.getElementById("startreset").onclick=
function () {
  if (playing == true) { //if we are playing
    location.reload(); //reload page
  } else { //if we are not playing
    playing = true;
    score = 0; //set score to 0
    document.getElementById("scorevalue").innerHTML= score; //set scorevalue to score
    show("timeremaining");//show countdown box
    time = 60;
    document.getElementById('timeremainingvalue').innerHTML = time;
    hide("gameOver");
    document.getElementById('startreset').innerHTML= "Reset Game" //change button to reset
    startCountdown()
    generateQA()
  }
}
    //generate new Q&A

  //if we click on answer box
    //if we are playing
      //correct?
        //yes
          //increase score 
          //show correct box for 1 second
          //generate new Q&A
        //no
          //show try again box for 1 second
function startCountdown() {
  action = setInterval(function() {
    time -= 1; //reduce time by 1sec in loops
    //timeleft?
    document.getElementById('timeremainingvalue').innerHTML = time;
    if (time == 0) { //no ->gameover
      stopCountdown();
      show("gameOver"); //display gameover
      document.getElementById('gameOver').innerHTML= 
      "<p>Game Over </p><p>your score is " + score + ".</p>";
      hide("timeremaining");
      hide("correct");
      hide("wrong");
      playing = false;
      document.getElementById("startreset").innerHTML="Start Game";
    }
  }, 1000)
}

function stopCountdown() {
  clearInterval(action); //stops the timer
}

function hide(Id) {
  document.getElementById(Id).style.display= "none";
}

function show(Id) {
  document.getElementById(Id).style.display= "block";
}

function setAnswer(Id) {
  let answerNum= Math.floor(Math.random() * 101);
  document.getElementById(Id).innerHTML = answerNum
}


function generateQA() {
  let x = Math.round((Math.random() * 9) + 1);
  let y = Math.round((Math.random() * 9) + 1);
  let correctAnswer = x * y;
  document.getElementById("question").innerHTML= x + "x" + y;
  let position = Math.floor((Math.random() * 3) + 1);
  document.getElementById("box" + position).innerHTML= correctAnswer; //fill one box with correct answer
  for (let i = 1; i < 5; i++) {
    if (i !== position) {
      let wrongAnswer;
      do {
        wrongAnswer = Math.round((Math.random() * 9) + 1) * Math.round((Math.random() * 9) + 1);
      }
      while(wrongAnswer == correctAnswer) 
      document.getElementById("box" + i).innerHTML=wrongAnswer;
    }
  }
}