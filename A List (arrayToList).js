
function arrayToList (table) {
  
  if (table.length-1 == 0) {
    return {
      value: table[0],
      rest: null
    };
  } else {
    
    return {
    value: table.shift(),
    rest: arrayToList(table) 
      };
  }
} 


console.log(arrayToList([1,4,6,6,3,5]));
