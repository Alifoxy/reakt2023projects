// import {launchService} from "./services/launchService";
// launchService.getAll().then(({data})=>{
//    const {mission_name}= data[2];
// })

const user1 = (name:string,age:number,gender:string):[string,number,string] => {
   return [name,age,gender]
}

console.log(user1('Max',18,'male'));

const user2:[string,number,string]=["Mary", 16,'female']
console.log(user2);


function sum(a:number,b:number):number {
    return a+b
}

function showSum(a:number,b:number){
    console.log(a + b);
}

function incAge(someUser:{readonly}, inc:number):number{
    someUser.age+=inc
    return someUser
}

const user3 = {
   name:"Max",
   age:18,
   gender:'male'
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user3, 2)