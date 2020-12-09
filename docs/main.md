make something not editable

```js
editable: false,
hasControls: false,
hasBorders: false,
lockMovementX: true,
lockMovementY: true,
lockRotation: true,
selectable: false,
hoverCursor: "arrow",
```

animate

```js
rect.animate("left", 100, {
  onChange: canvas.renderAll.bind(canvas),
});
```

webfont

```js
fontFamily: "Nunito",
```

access property after render

```js
canvas.on("after:render", function (e) {
  console.log(text.\_measureLine(1));
});
```
