const dateAdder = require('../challenges/date-adder/dateAdder');

describe('Date add testing', () => {

  it('can successfully add seconds', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffSeconds = '10s';
    const seconds = dateAdder(date, diffSeconds);
    expect(seconds).toEqual(new Date(2018, 12, 20, 10, 33, 40, 0));
  });

  it('can successfully add minutes', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffMinutes = '10m';
    const minutes = dateAdder(date, diffMinutes);
    expect(minutes).toEqual(new Date(2018, 12, 20, 10, 43, 30, 0));
  });

  it('can successfully add hours', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffHours = '10h';
    const hours = dateAdder(date, diffHours);
    expect(hours).toEqual(new Date(2018, 12, 20, 20, 33, 30, 0));
  });

  it('can successfully add days', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffDays = '10d';
    const days = dateAdder(date, diffDays);
    expect(days).toEqual(new Date(2018, 12, 30, 10, 33, 30, 0));
  });

  it('can successfully add weeks', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffWeeks = '1w';
    const weeks = dateAdder(date, diffWeeks);
    expect(weeks).toEqual(new Date(2018, 12, 27, 10, 33, 30, 0));
  });

  it('can successfully add months', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffMonths = '1M';
    const months = dateAdder(date, diffMonths);
    expect(months).toEqual(new Date(2018, 13, 20, 10, 33, 30, 0));
  });

  it('can successfully add years', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffYears = '1y';
    const years = dateAdder(date, diffYears);
    expect(years).toEqual(new Date(2019, 12, 20, 10, 33, 30, 0));
  });

});