// union here value of subs could be number or string s
let subs: number | string = "1M";

let apiRequestStatus: 'pending' |'success' | 'error' = 'pending'

apiRequestStatus = "success"

let airlineSeat: 'asile' | "window" | 'middle' = 'asile'

airlineSeat = 'asile'

const orders = ['12' , '24', '32','42']
let currentorder : string | undefined;

for(let order of orders){
    if(order === '24'){
        currentorder = order
        break
}  
}

console.log(currentorder);



