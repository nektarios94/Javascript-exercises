let list = {
  value: {q: 3,w:4,e:1},
  rest: {
    value: {r:3,t:1,y:6},
    rest: {
      value: 3,
      rest: null
    }
  }
};


function listToArray (list) {
  let table = [];
  let node = list;
  if (list == null) return table;
  } 
  while (true) {
    table.push(list.value);
    if (list.rest == null) break;
    list = list.rest;
  } 
  return table;
  
}




console.log (listToArray(list));

