const user = {
    name : 'thasbeeha',
    age : '18',
    email : 'thasbeehafarhan@gmail.com',
    address : {
        city : 'vilayur',
        zipcode :'143'
    }
};
const {name,age,email} = user
console.log (name);
console.log(age);
console.log(email);

const {address:{city,zipcode}} = user
console.log(city);
console.log(zipcode);

