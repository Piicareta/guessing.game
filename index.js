
const answer = Math.floor(Math.random()*10000 + 1);
let guessn = 0;
let guess = document.getElementById("myInput");

function guessTry() {
    
    guessn += 1;

    if(guess.value == answer){
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
    else if(guess.value < answer){
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

document.getElementById("myBtn").onclick = function () {

    if (guess.value === '') {

        alert('Preencha o campo.')
    }

    else {
        
        guessTry()
        guess.value = ''
    }
} 

document.addEventListener('keypress', function (x) {

        if (x.key === 'Enter') {

            if (guess.value === '') {

                alert('Preencha o campo.')
            }

            else {
                
                guessTry()
                guess.value = ''
            }
        } 

})