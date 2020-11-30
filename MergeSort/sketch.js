let values = [];
let w = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(floor(width/w));
  for(let x = 0; x < values.length; x++){
     values[x] = random(height); 
  }
  
  mergeSort(values, 0 , values.length-1);
}


async function merge(values,left,mid,right){
  let n1 = mid - left + 1;
  let n2 = right - mid;
  
  let L = new Array(n1);
  let R = new Array(n2);
  
  for(let i = 0 ; i < n1; i++){
     L[i] = values[i+left];
  }
  
  for(let i = 0; i < n2; i++){
     R[i] = values[mid + i + 1]; 
  }
  
  
  let i = 0, j = 0, k = left;
  

  while(i < n1 && j < n2){
     await sleep(10);
     if(L[i] <= R[j]){
        values[k] = L[i];
        i++;
     }
     else{
        values[k] = R[j];
        j++;
     }
     k++;
  }
  
  while(i < n1){
    values[k] = L[i];
    k++;i++;
  }
  
  while(j < n2){
     values[k] = R[j];
    k++;j++;
  }
    
}

async function mergeSort(values, start, end){
   if(start >= end) return;
   let mid =floor( (start + end)/2 );
   
   await Promise.all([ 
     mergeSort(values,start,mid),
     mergeSort(values,mid+1,end), 
   ]);
  
   await merge(values,start,mid,end);
}

function draw() {
  background(0);
  
  for(let x = 0; x < values.length; x++){
     stroke(0);
     fill(255);
     rect(x*w, height - values[x], w , values[x]);
  }
}

function sleep(ms){
   return new Promise(resolve => setTimeout(resolve,ms)); 
}
