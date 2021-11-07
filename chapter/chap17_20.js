document.write("<h1> Chapter 14 to 20 <br> Array and Loop </h1>");


// Q1
var multiArray = [[]];

// Q2
var multiArray = new Array(3);
multiArray[0] = new Array(0 , 1 , 2 , 3)
multiArray[1] = new Array(1 , 0 , 1, 2)
multiArray[2] = new Array(2 , 1 , 0 , 1)
document.write(multiArray[0].join(" ") + "<br />")
document.write(multiArray[1].join(" ") + "<br />")
document.write(multiArray[2].join(" ") + "<br />")
document.write( "<hr>")

// Q3
for(var i = 1 ; i<=10 ; i++){
        document.write(i + "<br />")
}
document.write( "<hr>")


// Q4
var tabNum = parseInt(prompt("Enter Table Number :"));
var tabLenght = parseInt(prompt("Enter Table Lenght :"));
document.write(`Multiplication table of ${tabNum} <br / > Lenght ${tabLenght } <br />`  ) 
for(var i = 1  ; i<=tabLenght ; i++){
        document.write(`${tabNum} x ${i} = ${tabNum * i} <br /> `)
}
document.write( "<hr>")

// Q5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var value of fruits){
        document.write(value + "<br />" )
}
document.write(value + "<br />" )

for(var prop in fruits){
        document.write(`Element at index ${prop} is ${fruits[prop]} <br/>`
        )
}
document.write( "<hr>")


// Q6
document.write(`<b>Counting:</b> <br / > <br />`)
for (var i = 1; i <= 15; i++) {
        document.write(i + ",")
}
document.write(` <br /> <br /> <b>Reverse Counting:</b> <br / > <br />`)
for (var a = 10; a >= 1; a--) {
        document.write(a + ", ")
}

document.write(` <br /> <br /> <b>Even:</b> <br / > <br />`)
for (var b = 0; b <=20; b = b + 2) {
        document.write(b + ", ")
}


document.write(` <br /> <br /> <b>Odd:</b> <br / > <br />`)
for (var c = 0; c <=20; c = c + 3) {
        document.write(c + ", ")
}


document.write(` <br /> <br /> <b>Series:</b> <br / > <br />`)
for (var d = 2; d <=20; d = d + 2) {
        document.write(d + "k" + ", ")
}
document.write( "<hr>")


// Q7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery!").toLowerCase()
var boolsearch = "true"
for (var i = 0; i < A.length; i++) {
        if (search === A[i]) {
                var boolsearch = "false"
                alert(`${search} is Available at index ${i } in our bakery`)
        }
}
if(boolsearch === "true"){
        alert(`We are sorry. ${search} is  not Available  in our Bakery`)
}



// Q8
var arr = [20, 50, 40, ];
var largestt = Math.max(...arr)
console.log(largestt)
var largest = 0;
for (var i = 0; i < arr.length; i++) {
        if(arr > largest){
                var largest = arr[i]
        }
}
console.log(largest)



// Q9
var arr2 = [24, 53, 78, 91, 12];
var smallest = arr2[0] ;
for(var a = 0 ; a<arr2.length ; a++){
        if( smallest > arr2[a]){
                var smallest = arr2[a]
        }
}
console.log(smallest)
var smallestt = Math.min(...arr2)
console.log(smallestt)


// Q10
for (var i = 5 ; i<=100 ; i = i +5  ){
        document.write(i + ",")
}
