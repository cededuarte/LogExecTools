// var splitName = document.getElementById("splitName");
// splitName.onclick = function() {
//   document.getElementById("result").innerHTML = '';
//   var value = document.getElementById("fullName").value;
//   value.split('\n').forEach(fullname => {
//    /*  console.log(fullname); */

//     var spaceIndex = fullname.indexOf(" ");
//     var firstname;
//     var lastname;
//     if (spaceIndex == -1) {
//       lastname = fullname;
//       lastname = "";
//     } else {
//       firstname = fullname.substring(0, spaceIndex);
//       lastname = fullname.substr(spaceIndex + 1);       
//     }

// 			document.getElementById("result").innerHTML += lastname + ", " + firstname[0];

  
//   });
// };



var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4= document.getElementById('input4');
var input5= document.getElementById('input5');
var input6= document.getElementById('input6');



function straightForecast() {
var button = document.getElementById('outcome');

   var str1 = "1. "+ input1.value +"/2. "+ input2.value +"<br>";
   var str2 = "1. "+ input1.value+"/2. "+ input3.value+"<br>";     
   var str3 = "1. "+input1.value +"/2. "+ input4.value+"<br>";    
   var str4 = "1. "+input1.value +"/2. "+ input5.value+"<br>";    
   var str5 = "1. "+input1.value +"/2. "+ input6.value+"<br>";  
   
   var str6 = "1. "+input2.value +"/2. "+ input1.value+"<br>";    
   var str7 = "1. "+input2.value +"/2. "+ input3.value+"<br>"; 
   var str8 = "1. "+input2.value +"/2. "+ input4.value+"<br>";   
   var str9= "1. "+input2.value +"/2. "+ input5.value+"<br>";
   var str10 = "1. "+input2.value +"/2. "+ input6.value+"<br>";

   var str11 = "1. "+input3.value +"/2. "+ input1.value+"<br>";    
   var str12 = "1. "+input3.value +"/2. "+ input2.value+"<br>"; 
   var str13 = "1. "+input3.value +"/2. "+ input4.value+"<br>";   
   var str14 = "1. "+input3.value +"/2. "+ input5.value+"<br>";
   var str15 = "1. "+input3.value +"/2. "+ input6.value+"<br>";

   var str16 = "1. "+input4.value +"/2. "+ input1.value+"<br>";    
   var str17 = "1. "+input4.value +"/2. "+ input2.value+"<br>"; 
   var str18 = "1. "+input4.value +"/2. "+ input3.value+"<br>";   
   var str19 = "1. "+input4.value +"/2. "+ input5.value+"<br>";
   var str20 = "1. "+input4.value +"/2. "+ input6.value+"<br>";

   var str21 = "1. "+input5.value +"/2. "+ input1.value+"<br>";    
   var str22 = "1. "+input5.value +"/2. "+ input2.value+"<br>"; 
   var str23 = "1. "+input5.value +"/2. "+ input3.value+"<br>";   
   var str24 = "1. "+input5.value +"/2. "+ input4.value+"<br>";
   var str25 = "1. "+input5.value +"/2. "+ input6.value+"<br>";

   var str26 = "1. "+input6.value +"/2. "+ input1.value+"<br>";    
   var str27 = "1. "+input6.value +"/2. "+ input2.value+"<br>"; 
   var str28 = "1. "+input6.value +"/2. "+ input3.value+"<br>";   
   var str29 = "1. "+input6.value +"/2. "+ input4.value+"<br>";
   var str30 = "1. "+input6.value +"/2. "+ input5.value+"<br>";
 
   var results1 = str1+
                  str2+
                  str3+
                  str4+
                  str5+
                  str6+
                  str7+
                  str8+
                  str9+
                  str10+
                  str11+
                  str12+
                  str13+
                  str14+
                  str15+
                  str16+
                  str17+
                  str18+
                  str19+
                  str20+
                  str21+
                  str22+
                  str23+
                  str24+
                  str25+
                  str26+
                  str27+
                  str28+
                  str29+
                  str30;

      
    document.getElementById('outcome').innerHTML=results1;
    

}

function enhancedDouble() {
var button = document.getElementById('outcome');
        var str31 = input2.value +"/"+ input1.value+"<br>";
        var str32 = input3.value +"/"+ input1.value+"<br>";
        var str33 = input4.value +"/"+ input1.value+"<br>";
        var str34 = input5.value +"/"+ input1.value+"<br>";
        var str35 = input6.value +"/"+ input1.value+"<br>";
        
        var str36 = input3.value +"/"+ input2.value+"<br>";
        var str37 = input4.value +"/"+ input2.value+"<br>";
        var str38 = input5.value +"/"+ input2.value+"<br>";
        var str39 = input6.value +"/"+ input2.value+"<br>";     
 
        var str40 = input4.value +"/"+ input3.value+"<br>";
        var str41 = input5.value +"/"+ input3.value+"<br>";
        var str42 = input6.value +"/"+ input3.value+"<br>";  

        var str43 = input5.value +"/"+ input4.value+"<br>";
        var str44 = input6.value +"/"+ input4.value+"<br>";
        
        var str45 = input6.value +"/"+ input5.value+"<br>";  


			var results2 = str31+
                    str32+
                    str33+
                    str34+
                    str35+
                    str36+
                    str37+
                    str38+
                    str39+
                    str40+
                    str41+
                    str42+
                    str43+
                    str44+
                    str45;

		   document.getElementById('outcome').innerHTML=results2;

}


  function copyToClipboard(id) {
    var from = document.getElementById(id);
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
