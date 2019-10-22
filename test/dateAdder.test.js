const dateAdder = require('../date-adder/dateAdder');

describe('Date add testing', () => {

  it('can successfully add seconds', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffSeconds = '10s';
    const seconds = dateAdder(date, diffSeconds);
    expect(seconds.toString()).toEqual('Sun Jan 20 2019 10:33:40 GMT-0800 (Pacific Standard Time)');
  });

  it('can successfully add minutes', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffMinutes = '10m';
    const minutes = dateAdder(date, diffMinutes);
    expect(minutes.toString()).toEqual('Sun Jan 20 2019 10:43:30 GMT-0800 (Pacific Standard Time)');
  });
  it('can successfully add hours', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const diffHours = '10h';
    const hours = dateAdder(date, diffHours);
    expect(hours.toString()).toEqual('Sun Jan 20 2019 20:33:30 GMT-0800 (Pacific Standard Time)')
  });

});