// Iteration 1: Names and Input
let hacker1='Hristina';
console.log (`The driver's name is ${hacker1}`);
let hacker2='John'
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else if (hacker1.length===hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}


// Iteration 3: Loops
let driver='Hristina';
let navigator='John';
let line1="";
let line2="";

for (let i=0; i<driver.length; i+=1){
  if(driver.length-1===i){
     line1+= driver[i];
   }
  else {
    line1+= driver[i]+" ";
  }
  }
  console.log (line1.toUpperCase());


for (let j=navigator.length-1; j>=0; j--){
    if(j===0){
      line2+=navigator[j];
   }
  else {
    line2+= navigator[j]+" ";
  }
  }
  console.log (line2.toUpperCase());

let comparisonResult = driver.localeCompare(navigator);

if (comparisonResult < 0) {
  console.log("The driver's name goes first.");
} else if (comparisonResult > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}