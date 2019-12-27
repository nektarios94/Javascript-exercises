
let array = [1,3,5,2,4,9,6,7,10,8];

for (j = 0; j < array.length -1;j++) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i+1]) {
      let temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
    }
  }
}
for (item of array) {
console.log (item);
}