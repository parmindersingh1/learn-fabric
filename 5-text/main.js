let c = new fabric.Canvas("c");

let xc = c.width / 2;
let yc = c.height / 2;

let xl = 24;
let xr = c.width - 24;

let yt = 24;
let yb = c.height - 24;

let input = "aaaaaaaaaaaaaaaaaaaaa";

text = new fabric.Textbox(input);

text.fontSize = 32;
text.backgroundColor = "rgba(0,0,0,.8)";
text.fill = "white";

c.add(text);
// setTimeout(function () {
//   console.log(text.__charBounds);
// }, 10);
c.on("after:render", function (e) {
  console.log(text.__charBounds);
});
