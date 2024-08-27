const myArr=[1,2,3,4,5]
const initialVal=0
const total=myArr.reduce( (acc,currval)=> acc+currval,initialVal )
console.log(total);


const course=[
    {
        name:"js course",
        price:299
    },
    {
        name:"java course",
        price:3299
    },
    {
        name:"react course",
        price:2555
    },
    {
        name:"spring course",
        price:10999
    }
]

const TotalPrice=course.reduce( (acc,items)=> acc+items.price,0 )
console.log(TotalPrice);
