const myArray=["alvira","Snehal","xyz"]
//console.log(myArray.length);
for(let i=0;i<myArray.length;i++){
   // console.log(myArray[i]);
    
}

const value=5;
for(let i=1;i<=10;i++){
    let result=i*value
    //console.log(`${value} * ${i} = ${result} `);
    
}

const map=new Map();
map.set(1,"A");
map.set(2,"B");
map.set(3,"C");

for(const [key,value] of map) {
    //console.log(value)
}

const myObject={
    1:"A",
    2:"B"
}
for (const key in myObject) {
   console.log(`${key} :- ${myObject[key]}`);
   
}