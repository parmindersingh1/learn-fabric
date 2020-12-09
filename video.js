let canvas = new fabric.Canvas("c");
let vid = document.getElementById("vid");

let video1 = new fabric.Image(vid, {
  left: 0,
  top: 0,
  scaleX: 0.25,
  scaleY: 0.25,

  // the following lines prevent editablity
  hasControls: false,
  hasBorders: false,
  lockMovementX: true,
  lockMovementY: true,
  lockRotation: true,
  selectable: false,
  hoverCursor: "arrow",
});
canvas.add(video1);
video1.getElement().play();

let topVal = canvas.height - text.height - 24;
text.top = topVal;

fabric.util.requestAnimFrame(function render() {
  canvas.renderAll();
  fabric.util.requestAnimFrame(render);
});
