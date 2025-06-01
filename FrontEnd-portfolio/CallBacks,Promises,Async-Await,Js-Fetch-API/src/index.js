const myPromise = new Promise((resolve,reject) =>{
         const error = false
         if(!error){
            resolve("yes, it resolved")
         }else{
            reject("no, rejected")
         }
})

// console.log(myPromise)

