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



/* WITH LOOP

function nth (list, index) {
  for (i = 0; list; i++) {
    if (index == i) return list.value;
    else list = list.rest;
  }  
  return undefined;
} */

//WITH RECURSION

function nth (list,index) {
  if (!list) return undefined;
  else if (index < 0) return undefined;
  else if (index == 0) return list.value;
  else return nth (list.rest,index-1);
  
}






console.log (nth(list,0));
