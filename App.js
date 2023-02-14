// import {launchService} from "./services/launchService";
// launchService.getAll().then(({data})=>{
//    const {mission_name}= data[2];
// })
var user1 = function (name, age, gender) {
    return [name, age, gender];
};
console.log(user1('Max', 18, 'male'));
var user2 = ["Mary", 16, 'female'];
console.log(user2);
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
var user3 = {
    name: "Max",
    age: 18,
    gender: 'male'
};
console.log(sum(1, 2));
showSum(2, 3);
incAge(user3, 2);
