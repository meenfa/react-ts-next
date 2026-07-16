const name="ankit"
const repoCount=10

// console.log(name +" " + repoCount);    this is traditional process of string concationation

// modern process
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('Ankit-FC-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('-'));

const newstring=gameName.substring(1,6); //starting 1st char will be counted but 6th wont
console.log(newstring);

//  Ankit-fc

const newstringreverse=gameName.slice(2,-3);
console.log(newstringreverse);

// A n k i t F C
// 0 1 2 3 4 5 6   (positive indices)
//-7 -6 -5 -4 -3 -2 -1 (negative indices)

// trim(): removes unwanted spaces in the InputDeviceInfo.especially in the user form
//trim()uses both trimstart()andtrimend()
const newstring1="    ankit   "
console.log(newstring1);
console.log(newstring1.trim());

const url = "https://ankit%20karki.netlify.com";
console.log(url.replace(/%20/g, '-'));

const url2="https://ankitkarki27.netlify.com"
// console.log(url.replace('%20','-'));
console.log(url2.replace(/27/g,"" ));
console.log(url.includes('karki'));
console.log(gameName.split('-'));


