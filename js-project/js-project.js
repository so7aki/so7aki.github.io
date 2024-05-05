const volumeBar = document.querySelector('.volume-level-bar');
  const volumeButtons = document.querySelectorAll('.volume-button');
  
  let volumeLevel = 50;
  updateVolumeDisplay();
  
  let increaseButtonClicked = false;
  let decreaseButtonClicked = false;

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  
  volumeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const action = button.getAttribute('data-action');
      if (action === 'increase' && !increaseButtonClicked) {
        volumeLevel += getRandomInt(1,50);
        console.log("volume level increased and is:" + volumeLevel);
        increaseButtonClicked = true;
        decreaseButtonClicked = false;
      } else if (action === 'decrease' && !decreaseButtonClicked) {
        volumeLevel -= getRandomInt(1,50);
        console.log("volume level decreased and is:" +volumeLevel);
        decreaseButtonClicked = true;
        increaseButtonClicked = false;
      }
      if (volumeLevel < 0) volumeLevel = 0;
      if (volumeLevel > 100) volumeLevel = 100;
      updateVolumeDisplay();
    });
  });
  
  function updateVolumeDisplay() {
    volumeBar.style.width = `${volumeLevel}%`;
  }