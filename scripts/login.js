const form = document.getElementsByTagName('form')[0];
username= document.getElementById("username");
password= document.getElementById("password");
form.addEventListener('submit', function (event) {
    // check password and username
    login(username.value,password.value,redirect);
});
//login using callback function
function login(user,psw,callback)
{

    if(user=="admin" && psw=="12345")
        callback();
    else
    {
        alert("Incorrect username or password");
        
    }
}    
function redirect()
{
    form.action="home.html"
}
