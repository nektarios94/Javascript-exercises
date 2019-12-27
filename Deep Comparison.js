function deepEqual (ob1,ob2) {
  
  if (ob1 === ob2) return true;
  else if ((typeof ob1 != typeof ob2)) return false;
  else if ( (typeof ob1 != "object")) return false;
  else if ((!ob1 && ob2) || (ob1 && !ob2)) return false;

  let keys1 = Object.keys(ob1);
  let keys2 = Object.keys(ob2);

  if (keys1.length != keys2.length) return false;
  else {
    for (let i = 0; i < keys1.length; i++) {
      let flag = false;
      for (let j = 0; j < keys2.length; j++) {
        if (keys1[i] === keys2[j]) {
          if ( deepEqual (ob1[keys1[i]],ob2[keys2[j]])) {
            flag = true;
            break;
          }
        }
      }
      if (!flag) return false;
    }
    return true;
  }
}
