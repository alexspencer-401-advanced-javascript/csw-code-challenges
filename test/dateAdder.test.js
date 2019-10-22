const dateAdder = require('../date-adder/dateAdder');

describe('Date add testing', () => {

  it('can successfully add seconds', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    console.log(date.toUTCString());
    const diffSeconds = '10s';
    const seconds = dateAdder(date, diffSeconds);
    expect(seconds.toUTCString()).toEqual('Sun, 20 Jan 2019 18:33:40 GMT');
  });

  it.skip('can successfully add minutes', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffMinutes = '10m';
    const minutes = dateAdder(date, diffMinutes);
    expect(minutes.toString()).toEqual('Sun Jan 20 2019 10:43:30 GMT-0800 (Pacific Standard Time)');
  });

  it.skip('can successfully add hours', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffHours = '10h';
    const hours = dateAdder(date, diffHours);
    expect(hours.toString()).toEqual('Sun Jan 20 2019 20:33:30 GMT-0800 (Pacific Standard Time)');
  });

  it.skip('can successfully add days', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffHours = '10d';
    const hours = dateAdder(date, diffHours);
    expect(hours.toString()).toEqual('Wed Jan 30 2019 10:33:30 GMT-0800 (Pacific Standard Time)');
  });

  it.skip('can successfully add weeks', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffHours = '1w';
    const hours = dateAdder(date, diffHours);
    expect(hours.toString()).toEqual('Sun Jan 27 2019 10:33:30 GMT-0800 (Pacific Standard Time)');
  });

  it.skip('can successfully add months', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffHours = '1M';
    const hours = dateAdder(date, diffHours);
    expect(hours.toString()).toEqual('Wed Feb 20 2019 10:33:30 GMT-0800 (Pacific Standard Time)');
  });

  it.skip('can successfully add years', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    console.log(date);
    const diffHours = '1y';
    const hours = dateAdder(date, diffHours);
    expect(hours.toString()).toEqual('Mon Jan 20 2020 10:33:30 GMT-0800 (Pacific Standard Time)');
  });

});