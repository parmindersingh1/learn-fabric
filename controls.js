let positionButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < positionButtons.length; i++) {
  const element = positionButtons[i];
  document.getElementById(element).onclick = function () {
    textPosition(text, element);
    canvas.renderAll();
  };
}

let sizeButtons = ["s", "m", "l", "xl"];

for (let i = 0; i < sizeButtons.length; i++) {
  const element = sizeButtons[i];
  document.getElementById(element).onclick = function () {
    textSize(text, element);
    canvas.renderAll();
  };
}
