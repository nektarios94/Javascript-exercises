

function reverseArray (array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
      newArray.push(array[array.length-i-1]);
  }
  return newArray;
}

function reverseArrayInPlace (array) {
  let temp;
  if (array.length % 2 == 0) {
    for (i = 0; i < array.length; i++) {
     temp = array[i];
     array[i] = array[array.length-1-i];
     array[array.length-1-i] = temp;
     if (i == array.length-1-i-1) break;
    }
  }
  else {
    for (i = 0; i < array.length; i++) {
      temp = array[i];
      array[i] = array[array.length-1-i];
      array[array.length-1-i] = temp;
      if (i == array.length-1-i) break;
     }
  }
  return array;
}

let array = ["mera","olh","katouraw","se"];
console.log (array.length);

console.log(reverseArrayInPlace(array));
console.log (array);



