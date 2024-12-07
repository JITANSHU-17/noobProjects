// Scientific Calculator functionality
function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  function calculateResult() {
    let displayValue = document.getElementById("display").value;
    try {
      document.getElementById("display").value = eval(displayValue);
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }
  
  // Unit Converter functionality
  function convert1() {
    let meters = document.getElementById("meters").value;
    let feet = meters * 3.28084; // Conversion factor
    document.getElementById("result1").innerText = `Result: ${feet.toFixed(2)} feet`;
  }
  function convert2() {
    let feet = document.getElementById("feet").value;
    let meters = feet / 3.28084; // Conversion factor
    document.getElementById("result2").innerText = `Result: ${meters.toFixed(2)} meters`;
  }
  function convert3() {
    let kg = document.getElementById("kg").value;
    let pounds = kg*2.20462; // Conversion factor
    document.getElementById("result3").innerText = `Result: ${pounds.toFixed(2)} pounds`;
  }

  function convert5() {
    let celcius = document.getElementById("celcius").value;
    let fahrenheit = (celcius*9/5)+32; // Conversion factor
    document.getElementById("result5").innerText = `Result: ${fahrenheit.toFixed(2)} fahrenheit`;
  }
  function convert6() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celcius = (fahrenheit-32)*(5/9); // Conversion factor
    document.getElementById("result6").innerText = `Result: ${celcius.toFixed(2)} degree`;
  }
  
  // Contact form functionality
  /*
  document.getElementById("supportForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent to support team!");
  });
  */
const statusDisplay = document.querySelector('.game--status');

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
    for(let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = gameState[winCondition[0]];
        const b = gameState[winCondition[1]];
        const c = gameState[winCondition[2]];
        if(a === '' || b === '' || c === '')
            continue;
        if(a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if(roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    const roundDraw = !gameState.includes("");
    if(roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if(gameState[clickedCellIndex] !== "" || !gameActive)
        return;

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}


document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

  
