const answer = Math.floor(Math.random()*10000 + 1);
let guessn = 0;

document.getElementById("myBtn").onclick = function guessTry() {
    
    let guess = document.getElementById("myInput").value;
    guessn += 1;

    if(guess == answer){
        setTimeout(function() {
            document.getElementById("myAnswer").classList.remove("animationLabel2");
            document.getElementById("restart").classList.remove("animationRestart");
        }, 1000)

        document.getElementById("restart").style.visibility = "visible";

        document.getElementById("myAnswer").classList.add("animationLabel2");
        document.getElementById("restart").classList.add("animationRestart");

        document.getElementById("myAnswer").textContent = 
        `The aswer is ${answer}, it took you ${guessn} guesses.`;

    }
    else if(guess < answer){
        setTimeout(function() {
            document.getElementById("myAnswer").classList.remove("animationLabel1");
        }, 1000)
        document.getElementById("myAnswer").classList.add("animationLabel1");
        document.getElementById("myAnswer").textContent = "More !"; 

    }
    else{
        setTimeout(function() {
            document.getElementById("myAnswer").classList.remove("animationLabel1");
        }, 1000)
        document.getElementById("myAnswer").classList.add("animationLabel1");
        document.getElementById("myAnswer").textContent = "Less !";

    }
}
