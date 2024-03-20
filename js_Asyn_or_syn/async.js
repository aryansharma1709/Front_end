function outer() {
  let outerVar = 'I am from outer function';
  function inner() {
  return outerVar;
  }
  inner();
  }
 let c=outer();
 console.log(c);
 
  
  