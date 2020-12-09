let canvas = new fabric.Canvas("c");
let words = [
  "Your amazing product",
  "Shop amazon now",
  "Get a special discount",
  "Use a coupon",
];
texts = [];
for (let i = 0; i < words.length; i++) {
  texts[i] = new fabric.Text(words[i], {
    left: 100,
    fontSize: 32,
    width: 200,
    opacity: 0,
    selectable: false,
    hasBorders: false,
    hasControls: false,
  });
  texts[i].top =
    canvas.height - words.length * texts[0].height - 24 + i * texts[i].height;
  canvas.add(texts[i]);
  setTimeout(function () {
    texts[i].animate("left", 24, {
      duration: 1000,
      easing: fabric.util.ease.easeInOutQuad,
    });
    texts[i].animate("opacity", 1, {
      duration: 1000,
    });
  }, i * 200);
}
(function render() {
  canvas.renderAll();
  fabric.util.requestAnimFrame(render);
})();
