//I have created a design inspired by Tiffany & Co,its a simple diamond designs with tiffany blue background
function setup() {
  createCanvas(2000, 2000); 
  background(129, 216, 208); 
  let spacing = 150; 
  let largeDiamondSize = 100; 
  let smallDiamondSize = 50; 
  for (let y = 0; y < height; y += spacing)
     { 
    for (let x = 0; x < width; x += spacing)
       { 
      let xOffset = (y / spacing) % 2 === 0 ? spacing / 2 : 0;
      Diamond(x + xOffset, y, largeDiamondSize);
      Diamond(x + xOffset, y - spacing / 2, smallDiamondSize);
    }
  }
}
function Diamond(x, y, size) 
{
  fill(255); 
  noStroke(); 
  push(); 
  translate(x, y); 
  rotate(PI / 4); 
  rect(0, 0, size, size); 
  pop(); 
}
function draw() {
  
}
