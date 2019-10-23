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
      if(set.array.includes(this.array[i])) newSet.add(this.array[i]);
    }
    return newSet;
  }

  union(set) {
    const newSet = new Set([]);
    for(let i = 0; i < this.array.length; i++) {
      newSet.add(this.array[i]);
    }
    for(let j = 0; j < set.array.length; j++) {
      newSet.add(set.array[j]);
    }
    return newSet;
  }

  difference(set) {
    const newSet = new Set([]);
    for(let i = 0; i < this.array.length; i++) {
      if(!set.array.includes(this.array[i]))
        newSet.add(this.array[i]);
    }
    for(let j = 0; j < set.array.length; j++) {
      if(!this.array.includes(set.array[j]))
        newSet.add(set.array[j]);
    }
    return newSet;
  }
}

module.exports = Set;