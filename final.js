
function generateComputerNum() {
  var computer = [1,2,3];
  var random = computer[Math.floor(Math.random()*computer.length)];
    if (random === 1){
    computer = "Rock!";
    }else if (random === 2){
    computer = "Paper!";
    }else {
    computer = "Scissor!";
    }
    document.getElementById('computer-display').value = computer;
}


function rockSelect() {
    document.getElementById('user-display').value = "Rock!";
    generateComputerNum();
}
function paperSelect() {
    document.getElementById('user-display').value = "Paper!";
    generateComputerNum();
}
function scissorsSelect() {
    document.getElementById('user-display').value = "Scissors!";
    generateComputerNum();
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