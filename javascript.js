let playing= false;
let score;
//if we click on the start/reset
document.getElementById("startreset").onclick=
function () {
  if (playing == true) { //if we are playing
    location.reload(); //reload page
  } else { //if we are not playing
    score = 0; //set score to 0
    document.getElementById("scorevalue").innerHTML= score;
    document.getElementById("timeremaining").style.display ="block";//show countdown box
}
    //reduce time by 1sec in loops
    //timeleft?
      //yes->continue
      //no->gameover
    //change button to reset
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
