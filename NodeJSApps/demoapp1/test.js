console.log("Node JS Starts...")
console.log("Happy Valentine's Day")

console.log("*****demo1.js*****");
const name=require("./demo1")
console.log(name)

console.log("*****demo2.js*****");
const {a,b}=require("./demo2")
console.log(`Output=${a+b}`)

console.log("*****demo3.js*****");
const  obj=require("./demo3");
console.log(`Addition: ${obj.add(10,20)}`)
console.log(`Subtraction: ${obj.sub(10,20)}`)

console.log("*****demo4.js*****");
const {courses,product,studentlist}=require(`./demo4`)

console.log("----COURSES----")
console.log("COURSES LENGTH = "+courses.length)
courses.map( (c)=> {
  console.log(c)
})



console.log("----PRODUCT----")
console.log("PRODUCT ID= "+product.pid )
console.log("PRODUCT NAME= "+product.pname )
console.log("PRODUCT PRICE= "+product.price )

console.log("----STUDENT----")
studentlist.map( (student,i)=>{ 
  console.log("STUDENT "+(i+1))
  console.log("STUDENT ID="+student.sid)
  console.log("STUDENT NAME="+student.sname)
  console.log("STUDENT STATUS="+student.status)
} )


