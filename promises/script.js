let p = new Promise(function(resolve,reject){
    console.log("top");
    // ye upar jo likha hai wo hamesha print hoga 
    let data="ye le data ja khush ho jaaa";
    let err="hahaha kaat gya naaa";
    return resolve(data)
    // return kar denge to wo nhi chalega nichega kuch 
    reject(err)
    console.log("end");
    // end print pehle hoga Kyuki resolve me time lagta hai promises me 
});
// -------main syntax----------
// p.then().catch()

//-------condition :1------------
// p.then(function(d){
//     console.log(d);
// })

// --------condition:2---------
// p.then(function(d){
//     console.log(d);
// }).catch(function(e){
//     console.log(e);
// })

//--------akele catch() bhi  chal skta hai--- 