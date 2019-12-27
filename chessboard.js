let size = 150;
let grid = "";

for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
        if (i % 2 == 0 ) {
            if (j % 2 == 0) grid += " ";
            else grid += "■";
        } 
        else {
            if (i % 2 != 0) {
                if (j % 2 != 0) grid += " ";
                else grid += "■";
            }
        }
    }
    if (i <= size -1) grid += "\n";
}
console.log (grid);