//de-struncturing

const course={
    name:"javascript",
    price:999

}

//instead of course.price we can use

const {price}=course  //or const {price:p}=course  
console.log(price)    //console.log(p)

//in react instead of props.company we use {company}

const navbar=({company})=>{

}
navbar(company="xyz")
