function textPosition(el, position) {
  let xMid = canvas.width / 2;
  let yMid = canvas.height / 2;
  let xLeft = 24;
  let xRight = canvas.width - 24;
  let yTop = 24;
  let yBottom = canvas.height - 24;
  switch (position) {
    case 1:
      el.originX = "left";
      el.originY = "top";
      el.left = xLeft;
      el.top = yTop;
      el.textAlign = "left";
      break;
    case 2:
      el.originX = "center";
      el.originY = "top";
      el.left = xMid;
      el.top = yTop;
      el.textAlign = "center";
      break;
    case 3:
      el.originX = "right";
      el.originY = "top";
      el.left = xRight;
      el.top = yTop;
      el.textAlign = "right";
      break;
    // ------------------------------
    case 4:
      el.originX = "left";
      el.originY = "center";
      el.left = xLeft;
      el.top = yMid;
      el.textAlign = "left";
      break;
    case 5:
      el.originX = "center";
      el.originY = "center";
      el.left = xMid;
      el.top = yMid;
      el.textAlign = "center";
      break;
    case 6:
      el.originX = "right";
      el.originY = "center";
      el.left = xRight;
      el.top = yMid;
      el.textAlign = "right";
      break;
    // ------------------------------
    case 7:
      el.originX = "left";
      el.originY = "bottom";
      el.left = xLeft;
      el.top = yBottom;
      el.textAlign = "left";
      break;
    case 8:
      el.originX = "center";
      el.originY = "bottom";
      el.left = xMid;
      el.top = yBottom;
      el.textAlign = "center";
      break;
    case 9:
      el.originX = "right";
      el.originY = "bottom";
      el.left = xRight;
      el.top = yBottom;
      el.textAlign = "right";
      break;
    // ------------------------------
    default:
      el.originX = "center";
      el.originY = "center";
      el.left = xMid;
      el.top = yMid;
      el.textAlign = "center";
      break;
  }
  fitText(el);
  canvas.renderAll();
}

function textSize(el, size) {
  let x;
  switch (size) {
    case "s":
      x = 16;
      break;

    case "m":
      x = 24;
      break;

    case "l":
      x = 30;
      break;

    case "xl":
      x = 48;
      break;
  }
  el.fontSize = x;
  fitText(el);
  canvas.renderAll();
}

function fitText(el) {
  canvas.on("after:render", function (e) {
    let bounds = el.__charBounds;
    let totalWidth = 0;
    for (let i = 0; i < bounds.length; i++) {
      for (let j = 0; j < bounds[i].length; j++) {
        totalWidth += bounds[i][j].width;
      }
    }
    if (totalWidth < canvas.width - 48) {
      el.width = totalWidth + 16;
    } else {
      el.width = canvas.width - 48;
    }
  });
  canvas.renderAll();
}
