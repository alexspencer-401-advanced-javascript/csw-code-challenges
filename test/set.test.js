const Set = require('../challenges/set/set');

describe('Set testing', () => {

  it('creates a set', () => {
    const set = new Set([1, 3, 5]);
    expect(set.array).toEqual([1, 3, 5]);
  });

  it('can add to a set', () => {
    const set = new Set([1, 3, 5]);
    set.add(2);
    expect(set.array).toEqual([1, 3, 5, 2]);
  });

  it('rejects duplicate values when trying to add', () => {
    const set = new Set([1, 3, 5]);
    set.add(1);
    expect(set.array).toEqual([1, 3, 5]);
  });

  it('removes value from set', () => {
    const set = new Set([1, 3, 5]);
    set.remove(3);
    expect(set.array).toEqual([1, 5]);
  });

  it('checks to see if there is a value in the set', () => {
    const set = new Set([1, 3, 5]);
    const result = set.has(3);
    expect(result).toEqual(true);
  });
  
  it('returns two set intersections', () => {
    const set = new Set([1, 3, 5]);
    const set2 = new Set([3, 5, 6]);
    const result = set.intersection(set2);
    expect(result.array).toEqual([3, 5]);
  });

  it('returns the union of two sets', () => {
    const set = new Set([1, 3, 5]);
    const set2 = new Set([3, 5, 6]);
    const result = set.union(set2);
    expect(result.array).toEqual([1, 3, 5, 6]);
  });

  it('returns the difference of two sets', () => {
    const set = new Set([1, 3, 5]);
    const set2 = new Set([3, 5, 6]);
    const result = set.difference(set2);
    expect(result.array).toEqual([1, 6]);
  });

  it('tests static intersection', () => {
    const set = new Set([1, 3, 5]);
    const set2 = new Set([3, 5, 6]);
    const result = Set.difference(set, set2);
    expect(result.array).toEqual([1, 6]);
  });

  it('tests static union', () => {
    const set = new Set([1, 3, 5]);
    const set2 = new Set([3, 5, 6]);
    const result = Set.union(set, set2);
    expect(result.array).toEqual([1, 3, 5, 6]);
  });

  it('tests a static difference', () => {
    const set = new Set([1, 3, 5]);
    const set2 = new Set([3, 5, 6]);
    const result = Set.difference(set, set2);
    expect(result.array).toEqual([1, 6]);
  });

});