// const fun = async() =>{
//     console.log("Start");  
//     console.log("Promise");  
//     await new Promise((done) => setTimeout(() => done(), 5000));  
//     console.log("End");  
//     console.log("Promise"); 
// }

// fun()


console.log("Start");  
console.log("Promise");  
 new Promise((done,reject) => setTimeout(() => reject('Rejected'), 1000))
 .then(c =>{
     console.log("End")
 })
 .catch((c) => {
     console.log(c)
 })


// new Promise((done,reject) => {
//     setTimeout(() => {
//         done()
//     }, 5000);
// })