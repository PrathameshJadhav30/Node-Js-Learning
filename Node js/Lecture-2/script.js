const fs = require("fs");
let text = fs.readFileSync("Pratham.txt", "utf-8");
text = text.replace("Enginner", "Devolper");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("Pratham1.txt", text);
