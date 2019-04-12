function multiply(num) {
  return num * num;
}
// 
Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    let el = this[i];
    cb(el);
  }
}
function multiply(num) {
  return num * num;
}
const arr = [1,2,3,4,5];
console.log(arr.myEach(multiply)); 

// 
Array.prototype.myMap = function(cb) {
  let mapped = [];
  this.myEach(el => {
    mapped.push(cb(el));
  });  
  return mapped;
};

// def my_map(&prc)
//   mapped = []
//   self.each do |el|
//     mapped << prc.call(el)
//   end
//   mapped
// end 

Array.prototype.myReduce = function(cb, initialValue) {
  let acc = initialValue || this[0];

  if (initialValue === undefined) {
    let initialValue = this[0];
    for (let i = 1; i < this.length; i++) {
      acc = cb(acc, this[i]);
    }
    return acc;
  } else {
    for (let i = 0; i < this.length; i++) {
      acc = cb(acc, this[i]);
    }
    return acc;
  } 
}
const banana = (function(acc, el) {
  return acc + el;
}); // => 31

console.log([1, 2, 3].myReduce(banana, 25));

