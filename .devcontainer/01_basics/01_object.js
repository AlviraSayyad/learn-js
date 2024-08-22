//singletone object

const myObj=new Object();
//console.log(myObj)

myObj.id=111
myObj.name="alvira"
console.log(myObj);

console.log(Object.keys(myObj));
console.log(Object.values(myObj));
console.log(Object.entries(myObj))

console.log(myObj.hasOwnProperty("name"))


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//...method 1...
 /*const obj4={obj1,obj2}
console.log(obj4)*/


//....method 2... ( Object.assign(target.source) )

 /*const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);*/

//..methos 3

/*const obj4={...obj1,...obj2,...obj3}
console.log(obj4)*/





