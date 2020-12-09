let canvas = new fabric.Canvas("c");

let input1 = "Small text text";
let input2 = "Double\nLine";
let input3 = "Long text that stretches across multiple lines";

text = new fabric.Textbox(input1, {
  top: 10,
  left: 10,
  fill: "white",
  backgroundColor: "rgba(0,0,0,.7)",
});

canvas.add(text);
textSize(text, "l");
textPosition(text, 5);
