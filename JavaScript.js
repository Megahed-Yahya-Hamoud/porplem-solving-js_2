// ------------------- Object.assign --------------------

var firstObject={
    name:"mega"
}

var secondObject={
    age:22
}

var thirdObject={
    gender:"Male"
}

var userData={}

Object.assign(userData , firstObject , secondObject , thirdObject)

console.log(userData);

var customerData=Object.assign({} , userData , {country :"Eg"})
console.log(customerData);

// ===============================================================================================

// ---------------------------- Object.sort ----------------------

var arr1=[2,1,3,5,4];
console.log(arr1.sort());

var arr2=["s" ,"r" , "a" , "j" , "e"]
console.log(arr2.sort());

var arr3=[-5 , "w", 200 , 3 , 84 , "f" , "n" , 1 , 0 ,"a"]
console.log(arr3.sort());

// ===============================================================================================

// ------------------- Switch Case ---------------------

// var day=prompt("Enter day");
var day="Saturday";
switch(day){
    case "Saturday":
        console.log("Times of work from 10 AM To 11 PM");
        break;
    case "Sunday":
        console.log("Times of work from 8 AM To 10 PM");
        break;
    case "Monday":
        console.log("Times of work from 9 AM To 8 PM");
        break;
    case "Tuesday":
        console.log("Times of work from 10 AM To 11 PM");
        break;
    case "wednesday":
        console.log("Times of work from 7 AM To 5 PM");
        break;
    case "Thursday":
        console.log("Times of work from 11 AM To 9 PM");
        break;
    case "Friday":
        console.log("Times of work from 10 AM To 11 PM");
        break;
    default :
    console.log("Invalid day");
}


// ===============================================================================================

// ----------------------------- Person ------------------

var person={
    name :"Megahed" ,
    age : 22 ,
    gender : "Male"
}
console.log(person.name);
console.log(person.age);
console.log(person.gender);


// =================================================================================================

// --------------------------- Nested Object----------------------

var market={
    items:{
        apple: 50 ,
        banana:60 
        }
}
console.log(market.items.apple);
console.log(market.items.banana);

// =================================================================================================

// ------------------------------- Ways to Create an Object --------------------------------

var data ={
    name:"ali" ,
    age :20 
}
console.log(data);

// ----------------------

var theFirstObject= {}
theFirstObject.name="adl";
console.log(theFirstObject);

// ----------------------

var theSecondObject= new Object()
theSecondObject.name="mohammed";
console.log(theSecondObject);

// ----------------------

var theSecondObject= new Object({
    name:"mohammed"
})
console.log(theSecondObject);

// ----------------------

var theThirdObject=Object.create({});

theThirdObject.name="mega";

console.log(theThirdObject);


// =================================================================================================

// --------------------- String Method ---------------------

var text= "The quick brown fox jumps over the lazy dog" ;

console.log(text.includes("fox"));
console.log(text.includes("one"));

// =================================================================================================

// ---------------------- Array of Numbers -----------------------

var arr=[ 1 , 2 , 3 , 4 , 5 ];
arr.map(function(arr){
    console.log(arr * 10);
})

// ------------------

var arr=[ 1 , 2 , 3 , 4 , 5 ];
var result=arr.filter(function(arr){
    return arr >=4;
})
console.log(result)