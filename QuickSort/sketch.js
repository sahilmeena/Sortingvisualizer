let values = [];
let w = 10;

function setup(){
  createCanvas(windowWidth,windowHeight);
  values = new Array(floor(width/w));
  
  for(let i = 0; i < values.length; i++){
     values[i] = random(1,height); 
  }
  
  quickSort(values,0,values.length - 1);
}


async function quickSort(values,start,end){
  if(start >= end) return;
  let index = await partition(values,start,end);
  
  await Promise.all([
    quickSort(values,start,index-1),
    quickSort(values,index+1,end)
  ]);

}


async function partition(values, start, end){
  let i = start - 1;
  let pivot = values[end];
  for(let j = start; j < end; j++){
     if(values[j] <= pivot){ 
        i++;
        await swap(values,i,j);

     }
  }
  await swap(values,end,i+1);
  return i+1;
}

function draw(){
  background(0);
  for(let i = 0; i < values.length; i++){
    stroke(0);
    fill(255);
    rect(i*w, height - values[i], w, values[i]);
  }
}

async function swap(values,a,b){
   await sleep(5);
   let temp = values[a];
   values[a] = values[b];
   values[b] = temp;
}

function sleep(ms){
   return new Promise(resolve => setTimeout(resolve,ms)); 
}
