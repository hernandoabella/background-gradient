// Function to generate a random hex color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to generate a random gradient
  function generateRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360); // Random angle between 0 and 360
    const randomGradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    document.getElementById("gradientBox").style.background = randomGradient;
  }
  
  // Event listener for the button click
  document.getElementById("generateButton").addEventListener("click", generateRandomGradient);
  