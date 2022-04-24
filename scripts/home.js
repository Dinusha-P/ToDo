function ajax(){
    //creating an XHR object
    var xhttp= new XMLHttpRequest();
    //event listener
    xhttp.onreadystatechange = function(){
        //condition\
        if(this.readyState==4 &&this.status==200){
            var response=JSON.parse(this.responseText);
            var output="";
            for(var i=0;i<response.length;i++){ 
                if(response[i].completed==true)
                    output+= "<input class='form-check-input' type='checkbox' disabled checked>"  +response[i].title+"<br><hr>";    
                else
                    output+= "<input class='form-check-input check' type='checkbox' >  " +response[i].title+"<br><hr>";   

            }
            document.getElementById("demo").innerHTML= output;
        }
    
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
    ajax();
 //Validate function
 var count=0
 var checkbox = document.getElementById("demo");
 checkbox.addEventListener('change', function() {
    if (this.checked) {
      console.log("Checkbox is checked..");
    } else {
      console.log("Checkbox is not checked..");
    }
  });

  function redirect(){
    location.href = "index.html";
  }
