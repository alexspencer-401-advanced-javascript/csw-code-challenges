function dailyRev(transactions) {

  let obj = {};
  
  for(let i = 0; i < transactions.length; i++) {
    const date = new Date(transactions[i].timestamp);
    
    const formattedDate = date.toUTCString().slice(date.length - 16, 16);
    const newDate = new Date(formattedDate).toDateString();

    if(!obj[newDate]) {
      obj[newDate] = transactions[i].price;
    } else obj[newDate] += transactions[i].price;
  }
  return obj;
}

module.exports = dailyRev;