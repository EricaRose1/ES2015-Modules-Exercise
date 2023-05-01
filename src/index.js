import fruits from './fruits';
import {choice, remove } from './helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}`)
console.log(`Here you go: ${fruit}`)
console.log(`Delicious! May I have another?`);

// remove fruit from the array of fruits
let remaining = remove(fruit, fruits);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);