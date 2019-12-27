  // Σκέλος 1ο (ά τρόπος):
 /* function countBs (givenString) {
  let count = 0;
  for (ch of givenString) {
    if (ch == "B") count+=1;
  } 
  return count;
}

let s = "1B2B#B$B%B^B";

console.log(countBs(s)); */

// Σκέλος 1ο (β΄ τρόπος):
/*  function countBs (givenString) {
 
  let count = 0;
  for (let i = 0; i <= givenString.length; i++) {
      
      if (givenString[i] =="B") count++;
  }
  return count;
}

let s = "1B2B#B$B%B^B";

console.log(countBs(s)); */

 // Σκέλος 2ο (ά τρόπος):
 /* function countChar (givenString,givenChar) {
  let count = 0;
  for (ch of givenString) {
    if (ch == givenChar) count+=1;
  } 
  return count;
}

let str = "1B2B#B$B%B^B###";

console.log(countChar(str,"#")); */

// Σκέλος 2ο (β΄ τρόπος):
/* function countChar (givenString,givenChar) {
 
  let count = 0;
  for (let i = 0; i <= givenString.length; i++) {
      
      if (givenString[i] == givenChar) count++;
  }
  return count;
}

let str = "1B2B#B$B%B^B###";

console.log(countChar(str,"#")); */

