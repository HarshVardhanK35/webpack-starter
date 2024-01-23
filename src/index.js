import {capitalizeWords, money} from "../modules/mod1.js";
import Person from "../modules/Person.js";
import './css/style.css'

const res = capitalizeWords('hello world');
const person1 = new Person('John', 23);
const mon = money(32)

console.log(res)
console.log(mon)
person1.greet()