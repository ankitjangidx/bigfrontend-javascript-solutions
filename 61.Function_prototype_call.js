


Function.prototype.mycall = function(thisArg, ...args) {
    // your code here
        const symbol = Symbol();
        thisArg=Object(thisArg || window);
        thisArg[symbol]=this;
        const result = thisArg[symbol](...args);
        delete thisArg[symbol];
        return result
  }
const obj = {
    name: "ankit jangid",
   
}  
 function printName (a,b) {
    console.log("name is: "+this.name+" a: "+a+" b: "+b)
}
printName.mycall(obj,10,20)