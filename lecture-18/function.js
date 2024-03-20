
let y ;
console.log(y);
let  kheera =undefined;
console.log(kheera);
let x=null;
console.log(x);
console.log(typeof(null));
//  null ka type object  hota hai
console.log(typeof(undefined)); 
// undefined ka type undefined hi hota hai  

// not a number(NAN)
// parameterised function
function kajulalla(a,b)
{
    console.log(a+b);
}
kajulalla(250);

// Note NAN( not a number ) and its type of- number


// default parameterised functions
// b ki jo value hai wo phele se hi value provide  karte hai to  isliye default bolte hai

function diwali(a,b=60)
{
    console.log(a+b);
}
diwali(250);

//  a ko default value de di phir kya hoga
function kallu(a=60,b)
{
    console.log(a+b);
}
kallu(250);
// jo value pass ki jati hai argument me bo dominant hoti hai  over the default value to  a me  value 250 aayi 


function lalla(a=60,b=100)
{
    console.log(a+b);
}
lalla(250,30);

function kaju(a)
{   let badaam;
    //  badaam is unfined variable hai  
    console.log(a+badaam);

}
kaju(250);