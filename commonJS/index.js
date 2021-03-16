const { add } = require("./doingMath");
const fs = require("fs");

console.log("hola Node!!");

console.log(add(4, 5));

console.log(__filename);

fs.writeFileSync("./example.txt", "'este es un archivo de prueba'");
