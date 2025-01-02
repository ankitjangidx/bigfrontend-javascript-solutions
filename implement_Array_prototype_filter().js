// [1].filter(value,index ,arr)
console.log("hello");

Array.prototype.customFilter = function (callback) {
  const len = this.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
let arr = [1, 2, 3, 4, 5];
let result = arr.customFilter((value, i, arr) => {
  return value === 2;
}, this);
console.log(result);
