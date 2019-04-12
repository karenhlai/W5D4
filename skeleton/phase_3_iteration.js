Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (sorted === false){
    sorted = true;
    for (let i = 0; i < this.length-1; i++) {
      if (this[i] > this[i + 1]) {
        sorted = false;
        [this[i + 1], this[i]] = [this[i], this[i +1]];
      }
    }
  }
  return this;
}
console.log([3,2,1,4,5,7].bubbleSort());

String.prototype.substrings = function() {
  let subbies = []

  for (let i = 0; i <= this.length; i++) {
    for (let j = i+1; j <= this.length; j++) {
      let substr = this.slice(i, j);
      if (subbies.indexOf(substr) === -1) {
        subbies.push(substr);
      }
      
    }
  }
  return subbies;
}


console.log("cat".substrings());