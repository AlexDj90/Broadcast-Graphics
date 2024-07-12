const goldBar = document.querySelector(".gold-bar");
const blackBar = document.querySelector(".black-bar");
const bottomBar = document.querySelector(".bottom-bar");
const textLayer = document.querySelector(".main-bar-text");
const bottomBarText = document.querySelector(".bottom-bar .bottom-bar-text");
const logo = document.querySelector(".img-container");
const topBar = document.querySelector(".top-bar");

function runAnimationIN() {
  // Re-run animations
  logo.style.animation = "revealLeft 0.5s linear forwards";
  topBar.style.animation = "slideUpTop 0.5s ease-in forwards 0.2s";
  bottomBar.style.animation = "slideDownBottom 0.6s ease-in-out forwards 0.2s";
  blackBar.style.animation = "slideIn 0.5s ease-in-out forwards 0.2s";
  goldBar.style.animation = "slideIn 0.5s ease-in-out forwards 0.1s";
}

function runAnimationOUT() {
  // Re-run animations
  logo.style.animation = "hideLeft 0.5s linear forwards";
  topBar.style.animation = "slideDownTop 0.3s ease-in forwards";
  bottomBar.style.animation = "slideUpBottom 0.3s ease-in forwards";
  blackBar.style.animation = "slideOut 0.4s ease-in-out forwards 0.2s";
  goldBar.style.animation = "slideOut 0.4s ease-in-out forwards 0.3s";
}

// Keyboard shortcut to toggle animations
let isGraphicVisible = true;

window.addEventListener("click", (event) => {
  event.preventDefault();
  // Check if the pressed key code is 'Space' for spacebar
  if (isGraphicVisible) {
    runAnimationOUT();
    isGraphicVisible = false;
  } else {
    runAnimationIN();
    isGraphicVisible = true;
  }
});

// On Load: Adjust bar width
window.onload = () => adjustBarWidth();

//Adjust bar widths to fit text
function adjustBarWidth() {
  // Get width of main text and bottom text
  const textLayerWidth = textLayer.offsetWidth;
  const bottomBarTextWidth = bottomBarText.offsetWidth;

  // Add margin left from main text
  const textLayerStyle = window.getComputedStyle(textLayer);
  const marginLeft = parseFloat(textLayerStyle.getPropertyValue("margin-left"));

  // Use the width of main or bottom text layer, whichever is larger
  const barWidth = Math.max(textLayerWidth, bottomBarTextWidth) + marginLeft;

  // Set width of bars
  blackBar.style.width = barWidth + "px";
  bottomBar.style.width = `${barWidth + 8}px`;
  goldBar.style.width = barWidth + 15 + "px";
}
