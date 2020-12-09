let canvas = new fabric.Canvas("c");

let xMid = canvas.width / 2;
let yMid = canvas.height / 2;
let xLeft = 24;
let xRight = canvas.width - 24;
let yTop = 24;
let yBottom = canvas.height - 24;
let input = "Your \n Amazing \n Product is";

text = new fabric.Textbox(input);
text.fontSize = 32;
text.backgroundColor = "rgba(0,0,0,.8)";
text.fill = "white";

sceneTextPos(text, 9);

// text width
let singleLineWidth = 0;
for (let i = 0; i < text.textLines.length; i++) {
  singleLineWidth += text.measureLine(i).width;
}
singleLineWidth = singleLineWidth + 32;
let textLimit = canvas.width - 48;
if (singleLineWidth < textLimit) {
  text.width = singleLineWidth;
} else {
  text.width = textLimit;
}
// END text width

canvas.add(text);

function sceneTextPos(ent, x) {
  console.log("hello");
  switch (x) {
    case 1:
      ent.originX = "left";
      ent.originY = "top";
      ent.left = xLeft;
      ent.top = yTop;
      ent.textAlign = "left";
      break;
    case 2:
      ent.originX = "center";
      ent.originY = "top";
      ent.left = xMid;
      ent.top = yTop;
      ent.textAlign = "center";
      break;
    case 3:
      ent.originX = "right";
      ent.originY = "top";
      ent.left = xRight;
      ent.top = yTop;
      ent.textAlign = "right";
      break;
    // ------------------------------
    case 4:
      ent.originX = "left";
      ent.originY = "center";
      ent.left = xLeft;
      ent.top = yMid;
      ent.textAlign = "left";
      break;
    case 5:
      ent.originX = "center";
      ent.originY = "center";
      ent.left = xMid;
      ent.top = yMid;
      ent.textAlign = "center";
      break;
    case 6:
      ent.originX = "right";
      ent.originY = "center";
      ent.left = xRight;
      ent.top = yMid;
      ent.textAlign = "right";
      break;
    // ------------------------------
    case 7:
      ent.originX = "left";
      ent.originY = "bottom";
      ent.left = xLeft;
      ent.top = yBottom;
      ent.textAlign = "left";
      break;
    case 8:
      ent.originX = "center";
      ent.originY = "bottom";
      ent.left = xMid;
      ent.top = yBottom;
      ent.textAlign = "center";
      break;
    case 9:
      ent.originX = "right";
      ent.originY = "bottom";
      ent.left = xRight;
      ent.top = yBottom;
      ent.textAlign = "right";
      break;
    // ------------------------------
    default:
      ent.originX = "center";
      ent.originY = "center";
      ent.left = xMid;
      ent.top = yMid;
      ent.textAlign = "center";
      break;
  }
  canvas.renderAll();
}

document.getElementById("1").onclick = function () {
  sceneTextPos(text, 1);
};
document.getElementById("2").onclick = function () {
  sceneTextPos(text, 2);
};
document.getElementById("3").onclick = function () {
  sceneTextPos(text, 3);
};
document.getElementById("4").onclick = function () {
  sceneTextPos(text, 4);
};
document.getElementById("5").onclick = function () {
  sceneTextPos(text, 5);
};
document.getElementById("6").onclick = function () {
  sceneTextPos(text, 6);
};
document.getElementById("7").onclick = function () {
  sceneTextPos(text, 7);
};
document.getElementById("8").onclick = function () {
  sceneTextPos(text, 8);
};
document.getElementById("9").onclick = function () {
  sceneTextPos(text, 9);
};

// all should be in the function
