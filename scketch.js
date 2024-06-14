function setup() {
    createCanvas(500, 450);
    background("white");
  }
  
  function draw() {
    stroke("orange");
    fill("blue");
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed){
    rect(mouseX,mouseY,20,30);
  }
  }