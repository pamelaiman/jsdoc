// string method examples
"hello world".repeat();
"hello world".toUpperCase();
"hello world".indexOf();

// array method examples
["a", "b", "c", "d"].includes();
[1, 2, 3, 4].includes();
["a", "b", "c", "d"].push();

// count must be 0 or above, if 0/empty then returns nothing. negative number will throw error
console.log("hello ".repeat(2));
console.log("hello ".repeat());

// returns string in all upper case
console.log("hello world".toUpperCase());

// returns -1 if not found in string, or returns index number
console.log("hello world".indexOf("f"));
console.log("hello world".indexOf("e"));

// returns boolean if found in string
console.log(["a", "b", "c", "d"].includes("d"));
console.log(["a", "b", "c", "d"].includes(2));

console.log([1, 2, 3, 4].includes(2));
console.log([1, 2, 3, 4].includes("hi"));

// returns length of new array after push
console.log(["a", "b", "c", "d"].push("e"));
console.log(["a", "b", "c", "d"].push(1, 2, 3));