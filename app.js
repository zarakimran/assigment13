//--------------CHANGING CASE----------------
 
// Upper Case 
var person = prompt("please enter your name")
var cap = person.toUpperCase()
alert(cap)


//-------------------
// Lower Case
var person2 = prompt("please enter your name")
var small = person2.toLowerCase()
alert (small)

//------------------MEASURING LENGTH AND EXTRACTING PARTS---------------

// Length
var str = prompt("Name your favourite mobile model")
var char = str.length()
alert(char)

//------------

// Last Character
var lastchar = str.slice(-1)

//--------------------FINDING SEGMENTS--------------

// Index of Letter n
var a = "pakistani"
var b = a.indexOf("n")
console.log(b)

//------------------

//----------------- prompt user to enetr a valid name----------------
var a = prompt("Please enter your name")
var correct_way = /^[A-Za-z]+$/;
if ( a.match(correct_way))
{
    alert(a)
}
else {
    alert("Please enter valid name")
}


//-----------------

// count number of occurrences (since js is case sensitive therrfore it shows only 1 "the" with small letters)
var str = "“The quick brown fox jumps over the lazy dog"
var counter = (str.match(/the/g) || []).length
console.log(counter)


//-----------------FINDING A CHARACTER LOCATION-------------

var a = "Pakistani"
var b = a.indexOf(3)
alert(a)


//-----------------REPLACING CHARACTERS---------------------------

// Replace a word
var str = "Hyderabad"
var str2 = str.replace("Hyder" , "Islam")
console.log(str2)

//----------------

// Replace all the occurances
var str = "Ali and Sami are best friends. They play cricket and football together."
var str2 = str.replace(/and/g , "&")
console.log(str2)

//-------------------------ROUNDING NUMBERS------------------


// Positive integer
//a
var a = +prompt("please enter a number")
var b = Math.round(a)
if (a>0){
console.log(b)
}
else (alert("error"))


//b
var a = +prompt("please enter a number")
var b = Math.floor(a)
if (a>0){
console.log(b)
}
else (alert("error"))

//c
var a = +prompt("please enter a number")
var b = Math.ceil(a)
if (a>0){
console.log(b)
}
else (alert("error"))

//----------------------------

 // Negative Integers
//a
var a = +prompt("please enter a number")
var b = Math.round(a)
if (a<0){
    console.log(b)
    }
    else (alert("error"))


 //b
var a = +prompt("please enter a number")
var b = Math.floor(a)
if (a<0){
    console.log(b)
    }
    else (alert("error"))


 //c
var a = +prompt("please enter a number")
var b = Math.ceil(a)
if (a<0){
    console.log(b)
    }
    else (alert("error"))


//------------------------GENERATING RANDOM NUMBERS---------------------

//a
//Dice Random
var a = Math.random() *6
var b = Math.round(a)
console.log(b)


//b
// Head Tail Coin Toss
var a = +prompt("1st  value")
var b = +prompt("2nd value")
var c = Math.random() *1
var d = Math.round(c)
if (a == 0 ){
    alert(d)
}
else {
    alert(d)
}


//c
// Congratulate the User
var a = Math.round()*10
var b = +prompt("Enter a number from 0-10")
if ( a==b){
    alert("Congratulations!")
}
else(alert("Opps! Better luck next time"))

//-------------------------Strings to numbers and decimals-----------------

// 
var a = prompt("Enter your weight")
var b = String(a)
alert("Your weight is 23" + b)  

//----------------------Convert string to number and number to string--------------------
 
var a = "472"
var b = parseInt(a)
var c = typeof(b)
console.log(b , c)

//---------------------------

// Convert num to string
var num = 35.36
var a = num.toString()
var b = typeof(a)
console.log(a , b)

//-------------------------Controlling the Legth og a decimal------------

var precentage = 30/45 *100
var a = precentage.toFixed( 2 )
alert(a)