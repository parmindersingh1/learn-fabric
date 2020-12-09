private setCaption() {
  // Position
  // this.scene.caption.position (1-9)
  
  // Font Size
  // this.scene.caption.size (s16,m24,l30,xl48)
  // this.scene.caption.size (s,m,l,xl)
  
  let fontSize;
  switch(this.scene.caption.size) {
    case 's':
    fontSize = 16;
    break;
    
    case 'm':
    fontSize = 24;
    break;
    
    case 'l':
    fontSize = 30;
    break;
    
    case 'xl':
    fontSize = 48;
    break;
  }
  
  const text = new fabric.Text(this.scene.caption.text, {
    left: 100,
    top: 100,
    fontFamily: 'Comic Sans',
    fontSize: fontSize
  });
  
  this.fabricCanvas.add(text);
}