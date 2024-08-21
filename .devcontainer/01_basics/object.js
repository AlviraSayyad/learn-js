const mySym=Symbol("key1")

const JsUser={
    name:"Alvira",
    "full name":"Alvira Sayyad",
    [mySym]:"myKey1",
    age:18,
    location:"mahagaon",
    email:"alvira@gmail.com"
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email="alvira2211@gmail.com";
//Object.freeze(JsUser);
JsUser.email="alvira2210@gmail.com";
//console.log(JsUser)


JsUser.greetings=function(){
    console.log("hello js");
    
}
JsUser.greetingsTo=function(){
    console.log(`hello  ${this.name}`);
    
}

console.log(JsUser.greetings())
console.log(JsUser.greetingsTo())


