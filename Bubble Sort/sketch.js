let values = [];
let w = 20;
let i = 0;
let j = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(floor(width/w));
  for(let x = 0; x < values.length; x++){
     values[x] = random(height); 
  }
}


function swap(values, x , y){
   let temp = values[x];
   values[x] = values[y];
   values[y] = temp;
}

function draw() {
  background(0);
  
  let a = values[j];
  let b = values[j+1];
  if(a > b){
     swap(values,j,j+1); 
  }
  
  if(i < values.length){
     j = j + 1;
     if(j >= values.length - i - 1){
        i = i + 1;
        j = 0;
     }
  }else{
     noLoop(); 
  }
  
  for(let x = 0; x < values.length; x++){
     stroke(0);
     fill(255);
     rect(x*w, height - values[x], w , values[x]);
  }
}
