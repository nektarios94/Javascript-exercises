function isEven (number) {
   
  
  if (number < 0) {
    number*= -1; 
    console.log ("Το αποτέλεσμα αφορά θα την απόλυτη τιμή του αριθμού που δώσατε,\nδηλαδή τον αριθμό " + number);
  }
  if (number < 2) {
    return Boolean(number-1);
  }
  else return isEven (number-2);
}
console.log (isEven(-5));