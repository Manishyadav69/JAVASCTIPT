const Dhokalpur=["TUNTUN MAUSI","RAJU","CHUTKI","INDUMATI","BHEEM","JAGGU"]

const Doremon=["NOBITA","SIZUKA","DOREAMON","GIAN"]

// Dhokalpur.push(Doremon)/

// let allHeros=Dhokalpur.concat(Doremon)
// console.log(allHeros);

const allHeros=[...Dhokalpur,...Doremon]
console.log(allHeros);