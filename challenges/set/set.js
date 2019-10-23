class Set {
  constructor(array) {
    this.array = array;
  }

  add(value) {
    if(!this.array.includes(value)) this.array.push(value);
  }

  remove(value) {
    if(this.array.includes(value)) {
      const index = this.array.indexOf(value);
      this.array.splice(index, 1);
    }
  }

  has(value) {
    return this.array.includes(value);
  }

  intersection(set) {
    const newSet = new Set([]);
    for(let i = 0; i < this.array.length; i++) {
      if(set.array.includes(this.array[i])) {
        newSet.add(this.array[i]);
      }
    }
    return newSet;
  }

  union(set) {
    const newSet = new Set();
    for(let i = 0; i < this.array.length; i++) {
      newSet.add(this.array[i]);
    }
    for(let j = 0; j < set.length; j++) {
      newSet.add(set[j]);
    }
    return newSet;
  }

  difference(set) {
    const newSet = new Set();
    for(let i = 0; i < this.array.length; i++) {
      if(!set.includes(this.array[i]))
        newSet.add(this.array[i]);
    }
    for(let j = 0; j < set.length; j++) {
      if(!this.array.includes(set[j]))
        newSet.add(set[j]);
    }
  }
}

module.exports = Set;