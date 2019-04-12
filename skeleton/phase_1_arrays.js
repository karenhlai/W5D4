// myUniq
Array.prototype.myUniq = function() {
  let uniqEl = [];

  for (let i = 0; i < this.length; i++ ) {
    let num = this[i];
    if (uniqEl.indexOf(num) === -1) {
      uniqEl.push(num); 
    }

  }
  return uniqEl;
};

// const dups = new Array 
console.log([1, 1, 2, 3, 3].myUniq());

// twoSum
Array.prototype.twoSum = function() { 
  let pairs = [];

  for (let i = 0; i < this.length; i++) {
      let first = this[i];
    for(let j = i+1; j < this.length; j++) {
      let second = this[j];
      if (i < j && (first + second === 0)) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
}
console.log([5, -5, 3, -3, 2, -5].twoSum());

Array.prototype.myTranspose = function() {
  let transposed = [];

  i = 0
  while (i < this.length) {
    let subArr = [];

    j = 0 
    while (j < this[i].length) {
    // if (this[i][j] === 1) {
      let el = this[j][i]
      subArr.push(el);
    // }
    j += 1;
  }
    
    transposed.push(subArr);
    i += 1;
}
    return transposed;
}

console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].myTranspose());



