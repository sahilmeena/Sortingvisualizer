let values = [];
let w = 20;

let states = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(floor(width / w));
  states = new Array(floor(width / w));
   for (var i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }
  
  insertionSort();
}

async function swap(values,a,b){
  await sleep(81);
  var temp = values[a];
  values[a] = values[b];
  values[b] = temp;
}

async function insertionSort(){
   for(var i = 1; i < values.length; i++){
       var p = i - 1;
       states[i] = 1;
       while(p >= 0 && values[p] > values[p + 1]){
          states[p] = 0;
          states[p+1] = 0;
          await swap(values, p ,p + 1);
          states[p] = -1;
          states[p+1] = -1;
          states[i] = 1;
          p--;
          
       }
     
     for(var x = 0; x < values.length; x++){
        states[x] = -1; 
     }
   }
}

function draw() {
  background(51);
  
  
  for (var i = 0; i < values.length; i++) {
    stroke(0);
    
    if(states[i] == -1)
        fill(255);
    else if(states[i] == 0)
        fill(255,0,0);
    else
        fill(0,255,0);
    rect(i * w, height - values[i], w, values[i]);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
