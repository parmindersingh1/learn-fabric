$("#button").click(saveImage);

function saveImage(e) {
  console.log(e);
  this.href = canvas.toDataURL({
    format: "png",
    multiplier: 2,
  });
  this.download = "frontside@2x.png";
}
