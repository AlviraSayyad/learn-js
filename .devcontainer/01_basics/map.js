//return an new array

const myNums=[1,2,3,4,5,6,7]
//const newNum=myNums.map( (num)=> num+10 )
//console.log(newNum);


const newNum=myNums.map( (num)=> num*10 )
                   .map( (num)=>num-1 )
                   .filter( (num)=>num>=40 )
console.log(newNum)