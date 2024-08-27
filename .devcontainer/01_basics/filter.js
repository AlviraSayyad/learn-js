//return values which satisfies the condition

const mynums=[1,2,3,4,5,6,7,8]
const newNum=mynums.filter( (num)=> num>=5 )
//console.log(newNum);

//...OR...


const newNum1=mynums.filter( (num)=> (num>=5) )
//console.log(newNum1);


//...OR...
const newNum2=mynums.filter( (num)=> 
    {
        return num>=5
    } )
//console.log(newNum2);



const Books=[
    {tittle:"abc" ,sub:"history" , year:1999},
    {tittle:"xyz" ,sub:"geography" , year:1967},
    {tittle:"ijk" ,sub:"science" , year:2002},
    {tittle:"abc" ,sub:"maths" , year:2024},
    {tittle:"pqr" ,sub:"history" , year:2000}
]

let info=Books.filter( (bk)=> {
    return bk.year>2000 && bk.sub==="science"
} )
console.log(info)