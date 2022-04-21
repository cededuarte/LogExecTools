






var splitName = document.getElementById("splitName");
splitName.onclick = function() {
  document.getElementById("result").innerHTML = '';
  var value = document.getElementById("fullName").value;


  //CASE CONVERT//
      var value2 = value.toLowerCase();
      // value2 = value2.replace(/\b./g, function(m){ return m.toUpperCase(); });
          value2 = value2.replace(/(^\w|\s\w)/g, function(m){ return m.toUpperCase(); });
  
      value2.split('\n').forEach(fullname => {
   

    var spaceIndex = fullname.indexOf(" ");
    var firstname;
    var lastname;

    if (spaceIndex == -1) {
      lastname = fullname;
      lastname = "";
    } else {
      firstname = fullname.substring(0, spaceIndex);
      lastname = fullname.substr(spaceIndex + 1);       
    }





document.getElementById("result").innerHTML += [lastname, firstname].filter(Boolean).join(", ") + " <br> ";

    
  
  });
};





var trimName = document.getElementById("trimName");
trimName.onclick = function() {
  document.getElementById("result").innerHTML = '';
  var value = document.getElementById("fullName").value;
     
  //CASE CONVERT//
      var value2 = value.toLowerCase();
      // value2 = value2.replace(/\b./g, function(m){ return m.toUpperCase(); });
       value2 = value2.replace(/(^\w|\s\w)/g, function(m){ return m.toUpperCase(); });
  


  value2.split('\n').forEach(fullname => {


    var spaceIndex = fullname.indexOf(" ");
    var firstname;
    var lastname;
    if (spaceIndex == -1) {
      lastname = fullname;
      lastname = "";
    } else {
      firstname = fullname.substring(0, spaceIndex);
      lastname = fullname.substr(spaceIndex + 1);       
    }

      document.getElementById("result").innerHTML += lastname + ", " + firstname[0]+ " <br> ";

  
  });
};


var caseConvert = document.getElementById("caseConvert");

caseConvert.onclick = function() {
  document.getElementById("result").innerHTML = '';

      var value = document.getElementById("fullName").value;
  
  
  //CASE CONVERT//
      var value2 = value.toLowerCase();
      // value2 = value2.replace(/\b./g, function(m){ return m.toUpperCase(); });
       value2 = value2.replace(/(^\w|\s\w)/g, function(m){ return m.toUpperCase(); });

    

    value2.split('\n').forEach(fullname => {
    var spaceIndex = fullname.indexOf(" ");
    var firstname;
    var lastname;
    if (spaceIndex == -1) {
      lastname = fullname;
      lastname = "";
    } else {
      firstname = fullname.substring(0, spaceIndex);
      lastname = fullname.substr(spaceIndex + 1);       
    }

    document.getElementById("result").innerHTML += firstname + " " + lastname+ "<br>";
         


  });
};



//Tennis Doubles

var fixName = document.getElementById("fixName");

fixName.onclick = function() {
  document.getElementById("result").innerHTML = '';

  		var value = document.getElementById("fullName").value;
  
  
  //CASE CONVERT//
		var value2 = value.toLowerCase();
    value2 = value2.replace(/(^\w|\s\w)/g, function(m){ return m.toUpperCase(); });
		

  	value2.split('\n').forEach(fullname => {
    var spaceIndex = fullname.indexOf(" / ");
    var firstname;
    var lastname;
		var comma = ",";
    var insertAt = -2;
    if (spaceIndex == -1) {
      lastname = fullname;
      lastname = "";
    } else {
      lastname = fullname.substring(0, spaceIndex);
      firstname = fullname.substr(spaceIndex + 3);      
      
    }

    
var lastNameFinal = [lastname.slice(0, insertAt), comma, lastname.slice(insertAt)].join('');
var firstnameFinal = [firstname.slice(0, insertAt), comma, firstname.slice(insertAt)].join('');

document.getElementById("result").innerHTML += lastNameFinal+ "/" + firstnameFinal + "<br>";
/* console.log(firstnameFinal); */

  });
};









function ClearFields() {
     document.getElementById("fullName").value = "";
     document.getElementById("result").innerHTML = "";
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



