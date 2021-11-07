document.write("<h1> Chapter 14 to 16");
document.write("Array</h1>");


// Q1 to Q8
var std_arr={};
var std_arr2 = new Array();
var arrstring = new Array (1, 2, 3, 4, 5);
var arr_num = new Array (1, 2, 3, 4, 5);
var arr_bool = [true , true , false ,true] ;
var arr_mixed = new Array (1, 2, "Ali", 4, true);
var arr = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]
document.write("Qualifications: <br><br>")
for(var i = 0;i<arr.length;i++){
document.write("<br>"+(i+1)+ ") "+arr[i]);
}

document.write("<br>");
document.write("<hr>");


var std_name =["Michael","John","Tony"];
var score =[320,230,480];
for(var i = 0;i<std_name.length;i++){
    per=score[i]*100/500;
    document.write("<br>  Score of  "+std_name[i]+" is "+score[i]+". Percentage: "+per);
    }
    document.write("<hr>");

    // Q. 9
var colorName = ["Red","White","Yellow","Green","Pink","Orange","Purple","Blue"]
document.write("Colors: <br><br>")
for(var i = 0;i<colorName.length;i++){
document.write("<br>"+colorName[i]);
}  
// Part(A)
var addColor = prompt("Add color to the beginning of the array.");
colorName.unshift(addColor)
document.write(  "ADD COLOR =>" + " "  +colorName)

// PART(B)
var addColor2 = prompt("Add color to the End of the array.");
colorName.push(addColor2)
document.write( "<br>" + "ADD COLOR last =>" + " "  +colorName)
// PART(C)
var color1 = prompt("ADD COLOR 1 to the beginning of the Array")
var color2 = prompt("ADD COLOR 2 to the beginning of the Array")
colorName.unshift(color1 , color2 )
document.write(colorName)
// PART(D)
colorName.shift();
document.write("Delete First array => " + colorName)
// PART(E)
colorName.pop();
document.write("Delete Last array => " + colorName)
// PART(F)
var indNum = parseInt(prompt("Enter a index number "))
var colorAdd = (prompt("Enter a colors name "))
colorName.splice(indNum, 0 , colorAdd);
document.write(colorName)
// PART (G)
var qts = prompt("You want to delete a colors (yes/no)")
if(qts === "yes"){
    var qts2 = parseInt(prompt("how many color s you want to delete")) 
}
else{
    alert("as your wish")
}
colorName.splice(qts2 , qts2)
document.write(colorName)
document.write("<hr>");


// Q10
var stdScore = [320,230,480,120];
document.write( "BEFORE SORTING :  " + " " + stdScore + "<br>")
 stdScore.sort()
document.write( "AFTER SORTING :  " + " " + stdScore)
document.write("<hr>");


// Q11
var cities = ["karachi" , "Lahore" , "Islamabad" , "Queeta" , "Peshawar"];
var selectedCities = cities.slice(2,4)
document.write(`<br> Cities list : <br> ${cities} <br> <br> <br> 
                Selected Cities Name <br> ${selectedCities}`)
                document.write("<hr>");

// Q12
var stringg = ["<br> This" , "is" , "my" , "cat"];
var arr= stringg.join(" ")            
document.write("String :<br>"+arr)
document.write("<hr>");


// Q13
var devices = ["keyboard" , "mouse" , "printer" , "monitor"];
for(var i = 0 ; i<devices.length;i++){
    document.write(`<br> Out: <br>
                    ${devices[i]} <br>`)
}
document.write("<hr>");

// Q14
var devices = ["keyboard" , "mouse" , "printer" , "monitor"];
document.write(`out : <br>${devices[3]} <br>out : <br>${devices[2]} <br>out : <br>${devices[1]} <br>out : <br>${devices[0]} <br>`)
document.write("<hr>");

// Q15
var mobiles = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
document.write("<select>")
for(var i=0;i<mobiles.length;i++){
    document.write("<option>" + mobiles[i]  +"</option>")
}            
document.write("</select>")
