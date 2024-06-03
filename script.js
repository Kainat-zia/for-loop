// for loop .. 
// 1. initialize
// 2. stop
// 3. itration is i ++
// for(let i = 0;i < 20; i++){
//     console.log("hellow world");
// }
// // table
// for(let a = 14; a < 141; a = a +14){
//     console.log(a);
// }
// for(let b = 24; b < 241; b = b +24){
//     console.log(b);
// }
// let cleanestCities = ["england", "karachi" , "lahore" , "india","peshawar"]
// let cityToCheck = "peshawar"
// for (let i = 0; i <= 4; i++){
//     if (cityToCheck === cleanestCities[4]){
//         alert("Its one of the cleanest city")
//     }
//     else{
//         alert("Its not one of the cleanest city")
//     }
// }

// let months = ["january","feb","march","april","may","june"]
// let monthtTocheck = "march"
// for (let b = 0; b <=5; b++ ){
//    if (monthtTocheck === months[0]){
//     alert("it is a month of march")
//    }
//    else if (monthtTocheck === months[2]){
//     alert("its a month of march")
//    }
//    else {
//     alert("invalid month")
//    }
// }

// let qualification  = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "MBBS","LLB"];
// document.write ("<h3>Qualification</h3>");
// document.write("<ol>")
// for (let i = 0;i <=7; i++){
//     document.write("<li><b>" + qualification[i] + "</b></li>")
// }
// document.write("</ol>")


// // example of fruits
// let fruits = ["mango","apple","banana","orange","watermelon","pineapple"];
// document.write ("<h2>fruits</h2>");
// document.write("<ul>")
// for (let i = 0; i <=5; i++){
//     document.write("<li><i>" + fruits[i] + "</i></li>")
// }
// Initialize an array with color names. Display the array elements in your browser. a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser. b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

let colors = ["pink","blue" ,"orange","yellow","purple","red","golden"]
document.write( "original array :" + colors)
let add  = prompt ("what color he/she wants to add to the beginning")
colors.unshift(add)
document.write("<br>update array is : " + colors)

let colours = ["pink","blue" ,"orange","yellow","purple","red","golden"]
document.write( "original array :" + colours)
let add_colors  = prompt ("what color he/she wants to add to the beginning")
colors.push(add_colors)
document.write("<br>updated array is : " + colours)

// c. Add two more color to the beginning of the array. Display the updated array in your browser.
let Colours = ["pink","blue" ,"orange","yellow","purple","red","golden"]
document.write( "original array :" + Colours)
Colours.unshift("navyblue","red")
document.write("<br>updated array is : " + Colours)

// d. Delete the first color in the array. Display the updated array in your browser.
let Colourss = ["pink","blue" ,"orange","yellow","purple","red","golden"]
document.write( "original array :" + Colourss)
Colourss.pop("pink","blue")
document.write("<br>updated array is : " + Colourss)

// e. Delete the last color in the array. Display the updated array in your browser.
let coloours = ["pink","blue" ,"orange","yellow","purple","red","golden"]
document.write( "original array :" + colours)
let add_coolors  = prompt ("what color he/she wants to add to the beginning")
colors.push(add_colors)
document.write("<br>updated array is : " + colours)