//Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var num = 10;
console.log("value of num is",num);

// Task 2: Declare a variable using `let, assign it a string, and log the value to the console.
let str = "Hello";
console.log("value of str is",str);

// Task 3: Declare a variable using `const` , assign it a boolean value, and log the value to the console.
const bool = true;
console.log("value of bool is",bool)

//Task 4: Create variable of different data types (number, string, boolean, object, array) and log each variable's type using the `tyreof` operator.
let numbervla = 10;
let stringval = "hello";
let myBoolean = true;
let myObj = {
    name:"jhon",
    age:"24"
}
let arr = [1,2,3,4,5];

console.log("the type of numberval is",typeof(numbervla))
console.log("the type of stringval is",typeof(stringval))
console.log("the type of myBoolean is",typeof(myBoolean))
console.log("the type of myObj is",typeof(myObj))
console.log("the type of arr is",typeof(arr))

//Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.
let OrignalVal = "InitialVal"
console.log("the initial value is",OrignalVal);
OrignalVal ="new value";
console.log("the new val is",OrignalVal);

// Task 6: Try reassigning a variable declared with `const` and observe the error.
const constVal ="I am constant"
console.log("log the constantval",constVal);
// uncomment to see error
// constVal ="re assign val"
// TypeError: Assignment to constant variable.

// Feature Request 1:
// Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let theNum = 42;
let theStr = "Hello";
let theBool = true;
let theObj = { key: "value" };
let theArr = [1, 2, 3];

console.log("Value:", num, "Type:", typeof theNum);
console.log("Value:", str, "Type:", typeof theStr);
console.log("Value:", bool, "Type:", typeof theBool);
console.log("Value:", obj, "Type:", typeof theObj);
console.log("Value:", arr, "Type:", typeof theArr);



// 2. Reasignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.
let checkingVal = "InitialVal"
console.log("the initial value is",checkingVal);
checkingVal ="new value";
console.log("the new val is",checkingVal);

const checkConst ="I am constant"
console.log("log the constantval",checkConst);
//checkConst = "changing const val"