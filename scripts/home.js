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
                    output+= "<input class='form-check-input' name='check'  type='checkbox' disabled checked>"  +response[i].title+"<br><hr>";    
                else
                    output+= "<input class='form-check-input' name='check'onchange=taskCounter().then(fiveTasks).catch(function(e){})  type='checkbox' >  " +response[i].title+"<br><hr>";   

            }
            document.getElementById("demo").innerHTML= output;
        }
    
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
    ajax();
 //Validate function
 function taskCounter()
 {
     var i=0;
     var count=0;
     check = document.getElementsByName("check");
     return new Promise(function(resolve,reject){
        for(i=0;i<check.length;i++)
        {
            if(check[i].checked==true && check[i].disabled==false){
                count=count+1;
            }
        }
        if(count==5){
            resolve();
        }  
        else{
            reject();
        } 
    })

 }

 function fiveTasks(){
    alert("Congrats. 5 Tasks have been Successfully Completed ");
 }

  function redirect(){
    location.href = "index.html";
  }

