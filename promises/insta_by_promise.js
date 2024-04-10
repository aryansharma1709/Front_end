let step1=function(){
    return new Promise((resolve,reject)=>{
        console.log("Plzz wait image is being selected...");
        setTimeout(function(){
            resolve("Image selected");
        },4000);
    })
}
let step2=function(image){
    return new Promise((resolve,reject)=>{
        console.log(`Plzz wait filter is being applied on ${image}`);
        setTimeout(function(){
            resolve("filter applied");
        },3000);
    })
}
let step3=function(filter){
    return new Promise((resolve,reject)=>{
        console.log(`Plzz wait caption is being added on ${filter}`);
        setTimeout(function(){
            resolve("caption added");
        },4000);
    })
}
let step4=function(caption){
    return new Promise((resolve,reject)=>{
        console.log(`Plzz wait I am uploading  ${caption}  image`);
        setTimeout(function(){
            resolve("Image uploaded");
        },3000);
    })
}
step1()
.then(function(image){
    console.log(image);
    return step2(image);
}).then(function(filter){
    console.log(filter);
    return step3(filter)
}).then(function(caption){
    console.log(caption);
    return step4(caption);
})
.then(function(upload)
{console.log(upload)})
