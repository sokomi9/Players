const players = require("./players");
//the first instance
const manutd = new players("Rooney");
console.log(manutd.getName());

//chaning manutd player name using setName()
manutd.setName("Vidic");
console.log(manutd.getName());

//the second instance
const arsenal = new players("Rosiscky");
console.log(arsenal.getName());
