
function once(func) {
    // your code here
   let result=null
   let isCalled=false 
   return function(...args){
    if(!isCalled){
      result=func.call(this,...args)
      isCalled=true
    }
    return result
   }
}
  
function func(num) {
    return num
  }
  const onced = once(func)
  onced(1) 
  // 1, func called with 1
  onced(2)
  // 1, even 2 is passed, previous result is returned 