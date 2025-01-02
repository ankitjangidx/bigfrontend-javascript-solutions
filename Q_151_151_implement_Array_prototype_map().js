// Array.map(value,index,arr)

Array.prototype.customMap = function (callback, thisobj) {
  const len = this.length;
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    if (i in this) {
      result[i] = callback.call(thisobj, this[i], i, this);
    }
  }
  return result;
};
// let arr = [1, 2, 3, 4, 5]
// arr.customMap((value, i, arr) => {
//     console.log(value+" "+i+" "+" "+arr)
// },this)
