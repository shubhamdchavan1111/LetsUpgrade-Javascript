//que 1 ans ... taking the user input from user and consoling it


var userName = prompt("whats your age", 24);
console.log("you are age is " + "" + userName);


//que 2 ans stars here



//String
let str = "Hello, this is JS! ";
let str1 = "I'm very exicted to learn JS.";
console.log(str.concat(str1)); //concat method is used to concatenate two strings


console.log(str.endsWith('S')); //endsWith method is used to check the value of which alphabet it ends with.Returns a boolean value(true/false)

console.log(str.includes('is')); //includes method is used to check whether the word is in the string or not.Returns a boolean value(true/false)

console.log(str1.localeCompare(str)); //localeCompare is used to compare two strings in the current locale

console.log(str.match(str));//match method is used to search a string for a match against a regular expression,and returns the matches

console.log(str.repeat(3));//returns a new string with a specified number of copies of an existing string

console.log(str1.replace(str));//replace the existing string with the new one

console.log(str.search("this"));//search is used to serach specified word or string and it returns position of the match

let str2 = "Hola!!!"
console.log(str2.slice(2));//slice methods extracts a part of string and returns a new string

console.log(str.split(","));//split method is used to convert string into array

console.log(str.trim(str));//trim method removes whitespace from both ends of string

console.log(str2.valueOf(str));//returns primitive value of string object

//Array
let arr = ["Code", "JS", "Compile"];
let arr1 = ["India", "America", "South Korea"];

console.log(arr.concat(arr1));//concate methods is used to join two arrays

console.log(arr.copyWithin(arr1));//copyWithin method is used copy the elements from array

arr.push("Output");//push method adds an element in an existing array
console.log(arr);

arr.pop("Output");//pop methods deletes an element from an existing array
console.log(arr);

arr.unshift("Input");//unshift method returns new array length
console.log(arr);

arr.splice(2, 2, "IDE", "Decode");//splice method is used to remove elements from an existing array
console.log(arr);

let arr2 = arr.slice(1);//Slice method is used to create a new array from the existing array
console.log(arr2);
console.log(arr);

arr.sort();//sort method is used to sort an array
console.log(arr);

let arr3 = arr;
console.log(arr);
console.log(arr3.reverse());//reverse method is used to reverse the elements in an array






//que3 ans here

var i = prompt("whats your age", 24);
if (i >= 18) {
    console.log("can drink");
}
else {
    console.log("cannot drink")
}