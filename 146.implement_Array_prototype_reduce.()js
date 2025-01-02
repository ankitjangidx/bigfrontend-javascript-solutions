// [1, 2].reduce((prevvalue, currentvalue, index,arr), 0)

Array.prototype.myReduce = function (callback, initialValue) {
  // console.log(arguments);
  
  const argsLength = arguments.length;
  if (argsLength === 1 && this.length === 0) {
    throw new Error();
  }

  let index = argsLength === 1 ? 1 : 0;
  let resultValue = argsLength === 1 ? this[0] : initialValue;
  for (let i = index; i < this.length; i += 1) {
    resultValue = callback(resultValue, this[i], i, this);
  }
  return resultValue;
};
let arr = [1, 2, 3, 4, 5];
const result = arr.myReduce(
  (accumulator, current, index, arr) => accumulator + current,
  0
);
console.log(result);
