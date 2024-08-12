let person = {
    firstName : 'Mohammed',
    lastName : 'Farhan',
    age :"22",
    hobbies : ['reading','swimming'],
    address :{
        street : '123 main st',
        city : 'valachery',
        country : 'india',
    },
    fullname : function(){
        return this.firstName+' '+this.lastName;
    }

};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.address.city);
console.log(person.fullname());

person.email = 'mohammedfarhan@gmail.com', //add new prpty

console.log(person.email);
person.age = 23;
console.log(person.age);