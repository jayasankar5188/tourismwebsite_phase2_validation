function ValidateName()
{
    var name= document.getElementById('username');
    
    
    
    

var letters = /^[A-Za-z]+$/;

if(name.value.match(letters))
{
    document.getElementById('userdisplay').style.display='none';   
return true;
}
else
{
document.getElementById('userdisplay').style.display='block';
name.focus();
return false;
}
}
function ValidateEmail(){
    var email= document.getElementById('email');
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(email.value.match(mailformat))
{
document.getElementById('emaildisplay').style.display='none';

return true;
}
else
{
    document.getElementById('emaildisplay').style.display='block';

return false;
}
}
function phonenumber()
{
    var phone= document.getElementById('phone');
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phone.value.match(phoneno))
        {
        document.getElementById('phonedisplay').style.display='none';
      return true;
        }
      else
        {
        document.getElementById('phonedisplay').style.display='block';
        return false;
        }
}
function CheckPassword() 
{ 
    var password = document.getElementById('exampleInputPassword1');
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
if(password.value.match(passw)) 
{ 
    document.getElementById('passdisplay').style.display='none';
return true;
}
else
{ 
    document.getElementById('passdisplay').style.display='block';
return false;
}
}

function VerifyPassword(){
    var pwd = document.getElementById('rptpassword');
    var password = document.getElementById('exampleInputPassword1');
    if(pwd.value == password.value){
        document.getElementById('verdisplay').style.display='none';
        return true;
    }
    else{
        document.getElementById('verdisplay').style.display='block';
        return false;
    }

}
function Finalize(){
    alert('Form Validated Successfully!')
}
