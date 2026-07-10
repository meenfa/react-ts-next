"use strict";
// union here value of subs could be number or string s
let subs = "1M";
let apiRequestStatus = 'pending';
apiRequestStatus = "success";
let airlineSeat = 'asile';
airlineSeat = 'asile';
const orders = ['12', '24', '32', '42'];
let currentorder;
for (let order of orders) {
    if (order === '24') {
        currentorder = order;
        break;
    }
}
console.log(currentorder);
