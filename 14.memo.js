
function memo(func, resolver = (...args) => args.join('_')) {
    // your code here
    let cacheMemory={}
    return function(...args){
      const argCache = resolver(...args);
      if(!cacheMemory[argCache]){
        cacheMemory[argCache]= func.call(this,...args)
      }
      return cacheMemory[argCache]
    }
}
const memoed = memo(func, () => 'samekey')
memoed(1, 2) 
// 3, func is called, 3 is cached with key 'samekey'
memoed(1, 2) 
// 3, since key is the same, 3 is returned without calling func
memoed(1, 3) 
// 3, since key is the same, 3 is returned without calling func