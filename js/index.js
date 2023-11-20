var hacker1 ='abc';
console.log("the driver's name is" + hacker1);
 var hacker2 ='navigator';
 console.log("The navigator's name is " + hacker2);
  // Iteration 2: Conditionals
  let l1 = hacker1.length;
  let l2 = hacker2.length;
 if(l1 >l2){
  console.log("The driver has the longest name,it has " + l1 + "characters");
 }
 else if (l2>l1){
  console.log("It seems that the navigator has the longest name, it has "+ l2 + "characters");

 }
else{
  console.log("Wow,you both have equally long names," + l1 + "characters !");
}
// Iteration 3: Loops
console.log("driver's name");
var s="";
for(let i=0;i<l1;i++){
s+=hacker1[i]+" ";
}
  console.log(s);
console.log("navigator's name in reverse order");
let s2= "";
for(let j=l2-1;j>=0;j--){
  s2+=hacker2[j];
}
console.log(s2);
var small=Math.min(l1,l2);
let count=0;
for(let i=0;i<small;i++){
  if(hacker1[i]<hacker2[i]){
    console.log("The driver's name goes first")
  }
  if(hacker2[i]<hacker1[i]){
    console.log("Yo, the navigator goes first definitely.")
  }
  else{
    count++;
  }
}
if(count==small){
  console.log("What?! You both have the same name?")
}
  // to check the pallindrome
  var phraseToCheck ="dad";
  let ans="";
  let len= phraseToCheck.length;
  for(let i=len-1;i>=0;i--){
    ans+= phraseToCheck[i];
  }
  console.log(ans);
  if(ans==phraseToCheck){
    console.log("string is pallindrome");
  }
  else{
    console.log("string is not pallindrome");
  }
  
