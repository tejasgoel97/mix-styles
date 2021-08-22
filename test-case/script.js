const ms = require('mix-styles')

const test1 = ms("class1", "class2", "class3" , "class4");

const class5 = "class5"
const class6 = "class6"
const class7 = "class7"

const test2 = ms(class5, class6 , class7);

const test3 = ms(class5 , "class8" , {className: "its not a class"});
const test4 = ms(class5 , undefined , ["this", "is", "an" , "array"] , class6);

console.log("test1 : ", test1)
console.log("test2 : ", test2)
console.log("test3 : ", test3)
console.log("test4 : ", test4)


