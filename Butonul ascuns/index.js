function generateButtons() {
  const numButtons = parseInt(document.getElementById('num-buttons').value);
  if (!isNaN(numButtons) && numButtons > 0) {
    const buttonsContainer = document.getElementById('buttons-container');
    buttonsContainer.innerHTML = '';
    const winningButtonIndex = Math.floor(Math.random() * numButtons);
    for (let i = 0; i < numButtons; ++i) {
      const button = document.createElement('button');
      button.textContent = 'Button ' + (i + 1);
      button.classList.add('btn', 'btn-primary');
      button.addEventListener('click', () => {
        showMessage(i, winningButtonIndex);
      });
      buttonsContainer.appendChild(button);
    }
  }
}

function showMessage(isWinner) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = isWinner ? 'You won!' : 'You lose!';
}

const generateButtonsButton = document.getElementById('generate-buttons');
generateButtonsButton.addEventListener('click', generateButtons);
