// while loop-------------

// document.write("Hello");

// for (var dog = 0; dog < 10; dog++) {
//     document.write("<br>");
//     document.write(dog);
// }


// var cat = 0; 
// do {
//     document.write("<br>");
//     document.write(cat);
//     cat++;
// } while (cat < 10);  



// var monkey = 0;
// while (monkey < 10) {
//     document.write("<br>");
//     document.write(monkey);
//     monkey++;
// }

// ----------------------


// function addASingleDivYo() {
//     var aSingleDivYo = document.createElement("div");
//     aSingleDivYo.className = "whatever";
//     //appendChild meaning add to the end 
//     document.body.appendChild(aSingleDivYo);
// }

// // // for loop--------- 
// // for (var t = 0; t < 4; t++) {
// //     addASingleDivYo(); 
// // }

// // // for loop in a do-while 
// // var t = 0;
// // do {
// //     addASingleDivYo();
// //     t++; 
// // } while (t > 4);


// var t = 0; 
// while (t < 4) {
//     addASingleDivYo();
//     t++; 
// }
// ----------------------


// function addASingleDivYo() {
//     var aSingleDivYo = document.createElement("div");
//     aSingleDivYo.className = "whatever";
//     //appendChild meaning add to the end 
//     document.body.appendChild(aSingleDivYo);
// }

// ----------------------


// -make a new element that is an H1 
// -add innerTExt that is you name 
// -add that new element to the page. 

// THISISMYH1ELEMENT.innerText = "Izzy Dec"; 

var thisIsMyElement = document.createElement("h1"); 
thisIsMyElement.innerText = "Izzy Dec"; 
document.body.appendChild(thisIsMyElement);


// ----------------------

// h2, h3, p 
// h2 = 'color of your first car';
// h3 = do you wear glasses (yes/no)
// p = 'fav food' 
// order of h2, h3, p 

// function adddiv() {

// }

// //--another way of doing it is by grouping --
function addh1() {
    var ah1 = 
}

// //--another way 
var h1 = document.createElement("h1");
var content = document.createTextNode("h1");
h1.appendChild(content);
document.body.appendChild(h1); 

var h2 = document.createElement("h2"); 
var content = document.createTextNode("h2");
h2.appendChild(content);
document.body.appendChild(h2); 


// //--my but not proper--
// var thisIsMyElement = document.createElement("h2"); 
// thisIsMyElement.innerText = "color of your first car: blue"; 
// document.body.appendChild(thisIsMyElement);

// var thisIsMyElement = document.createElement("h3"); 
// thisIsMyElement.innerText = "do you wear glasses: yes!"; 
// document.body.appendChild(thisIsMyElement);

// var thisIsMyElement = document.createElement("p"); 
// thisIsMyElement.innerText = "fav food: chocolate"; 
// document.body.appendChild(thisIsMyElement);

