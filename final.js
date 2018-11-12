
function generateComputerNum() {
  var computer = [1,2,3];
  var random = computer[Math.floor(Math.random()*computer.length)];
    if (random === 1){
    computer = "Rock!";
    } else if (random === 2){
    computer = "Paper!";
    } else {
    computer = "Scissors!";
    }
    document.getElementById('computer-display').value = computer;
}

function gameRules() {
    var user = document.getElementById('user-display').value,
        computer = document.getElementById('computer-display').value,
        wins = parseInt(document.getElementById('win').value),
        losses = parseInt(document.getElementById('loss').value),
        ties = parseInt(document.getElementById('tie').value);

    if (user==="Rock!" && computer==="Rock!"){
    document.getElementById('tie').value=(ties=ties+1);
    } else if (user==="Rock!" && computer==="Paper!"){
    document.getElementById('loss').value=(losses=losses+1);
    } else if (user==="Rock!" && computer==="Scissors!"){
    document.getElementById('win').value=(wins=wins+1);
    } else if (user==="Paper!" && computer==="Paper!"){
    document.getElementById('tie').value=(ties=ties+1);
    } else if (user==="Paper!" && computer==="Rock!"){
    document.getElementById('win').value=(wins=wins+1);
    } else if (user==="Paper!" && computer==="Scissors!"){
    document.getElementById('loss').value=(losses=losses+1);
    } else if (user==="Scissors!" && computer==="Scissors!"){
    document.getElementById('tie').value=(ties=ties+1);
    } else if (user==="Scissors!" && computer==="Paper!"){
    document.getElementById('win').value=(wins=wins+1);
    } else if (user==="Scissors!" && computer==="Rock!"){
    document.getElementById('loss').value=(losses=losses+1);
    }
}

function rockSelect() {
    document.getElementById('user-display').value = "Rock!";
    generateComputerNum();
    gameRules();
}
function paperSelect() {
    document.getElementById('user-display').value = "Paper!";
    generateComputerNum();
    gameRules();
}
function scissorsSelect() {
    document.getElementById('user-display').value = "Scissors!";
    generateComputerNum();
    gameRules();
}


document.getElementById('rock-selector').onclick=rockSelect;
document.getElementById('paper-selector').onclick=paperSelect;
document.getElementById('scissors-selector').onclick=scissorsSelect;

// document.getElementById('rock-selector').onclick = userPlaySelect;
// function computerNumSet() {
// }

// }






// });



//Set buttons to a value  --- done
//
//Set game rules
//
//Random Generator --- done 
//
//
//Track wins, losses and ties
//
//Reset button