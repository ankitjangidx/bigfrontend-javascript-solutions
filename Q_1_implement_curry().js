const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}
 
function curry(fn) {
    return function curriedJoin(...args){
     if(args.length >= fn.length){
       return fn(...args);
       }
       else { 
         return function(...next){
          return curriedJoin(...args,...next)
       }
        
       }
     }
}
    
const curriedJoin = curry(join)
console.log(curriedJoin);
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'
