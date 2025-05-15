//operators
//Arithemeetic operators: + , - , * , ** , / , % , ++ , --
//Assignment operator: = ,( += , -= , /= , %= , **= ) ==> shorthand Assignment
//Comparison operator: == , === , != , !== , > , < , >= , <= , ?: = ternary operator
//Logical operator:&& || !; short circuit and || short circuit or
//bitwise operator: & | ~ ^ << >> >>> 


// a        b         a&&b   a||b    !a
// false    false     false  false
// false    true      false  true
// true     false     false  true
// true     true      true   true

// console.log(a += 3);
// console.log(a -= 3);
// console.log(a *= 3);
// console.log(a /= 3);
// console.log(a **= 3);


//infinity , Nan , Undefined , Null , boolean == empty
// let a = 100;

// console.log(a > 50 && a % 10 == 0);


//user input
// let name = prompt("What is your Name")

//DOM DOCUMENT OBJECT MODEL

function convert(){
let valCm = Number(document.getElementById("cm").value)
let cmVal = valCm/2.59
let total = document.getElementById("result")

total.innerHTML = cmVal.toFixed(2) + "CM"
}
