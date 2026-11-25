
import HashMap from "./hashmap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log("Initial length:", test.length());
console.log("Initial capacity:", test.capacity);
console.log("Initial load factor:", test.length() / test.capacity);

test.set('apple', 'green');
test.set('banana', 'brown');
test.set('dog', 'black');

console.log("\nAfter overwriting:");
console.log("Length:", test.length());
console.log("Capacity:", test.capacity);
console.log("Updated apple:", test.get('apple'));
console.log("Updated banana:", test.get('banana'));
console.log("Updated dog:", test.get('dog'));

test.set('moon', 'silver');

console.log("\nAfter resizing:");
console.log("Length:", test.length());
console.log("Capacity:", test.capacity);
console.log("New load factor:", test.length() / test.capacity);


console.log("\nAfter overwriting post-resize:");
console.log("Length:", test.length());
console.log("Capacity:", test.capacity);
console.log("Updated moon:", test.get('moon'));
console.log("Updated lion:", test.get('lion'));


console.log("\nGet tests:");
console.log(test.get('apple'));
console.log(test.get('moon'));
console.log(test.get('unknown'));


console.log("\nHas tests:");
console.log(test.has('apple'));
console.log(test.has('moon'));
console.log(test.has('unknown'));


console.log("\nRemove tests:");
console.log("Before removal:", test.length());
test.remove('banana');
console.log("After removal:", test.length());
console.log("Has banana:", test.has('banana'));


console.log("\nKeys:");
console.log(test.keys());


console.log("\nValues:");
console.log(test.values());


console.log("\nEntries:");
console.log(test.entries());


console.log("\nClear test:");
test.clear();
console.log("Length after clear:", test.length());
console.log("Keys after clear:", test.keys());
console.log("Values after clear:", test.values());
console.log("Entries after clear:", test.entries());
console.log("Capacity after clear:", test.capacity);
