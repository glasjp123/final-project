
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
///// For Rules: considered assigning numbers to each value and using < = > but was easier to use strings at 2AM /////
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

function hiddenText() {
    var wins = parseInt(document.getElementById('win').value),
        hidden = document.getElementById('hidden').innerText,
        hiddenArray = hidden.split(" "),
        currentWinNum = parseInt(hiddenArray[1]);

        if (wins % 10 == 0 && wins > 1){
            document.getElementById('hidden').style.display = "block";
        } else if(wins % 10 != 0){
            document.getElementById('hidden').style.display = "none";
        } else if (wins > 10){
            hiddenArray[1].innerText = (currentWinNum + 10);
        } 
}


function rockSelect() {
    document.getElementById('user-display').value = "Rock!";
    generateComputerNum();
    gameRules();
    hiddenText();
}

function paperSelect() {
    document.getElementById('user-display').value = "Paper!";
    generateComputerNum();
    gameRules();
    hiddenText();
}

function scissorsSelect() {
    document.getElementById('user-display').value = "Scissors!";
    generateComputerNum();
    gameRules();
    hiddenText();
}

document.getElementById('rock-selector').onclick=rockSelect;
document.getElementById('paper-selector').onclick=paperSelect;
document.getElementById('scissors-selector').onclick=scissorsSelect;

// function resetPage() {
//     var user = document.getElementById('user-display').value,
//         computer = document.getElementById('computer-display').value,
//         wins = parseInt(document.getElementById('win').value),
//         losses = parseInt(document.getElementById('loss').value),
//         ties = parseInt(document.getElementById('tie').value);
//         if ((user).length > 0){
//         form.user = " ",
//         console.log("works");
//         } else {}
// }   
// document.getElementById('reset').onclick=resetPage;

////// Couldn't figure out how to reset the input fields so I just cheated and made the button reload the page //////
