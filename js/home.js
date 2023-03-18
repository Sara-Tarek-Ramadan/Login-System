var nameSign=document.getElementById('nameSign');
var emailSign=document.getElementById('emailSign');
var passSign=document.getElementById('passSign');
var SignUp=document.getElementById('SignUp');
var prag=document.getElementById("prag")
var welcome=document.getElementById("welcome")
var Value=document.getElementById("Value")
var LogOut=document.getElementById("LogOut")
var emailLogin=document.getElementById('emailLogin')
var passwordLogin=document.getElementById('passwordLogin')
var Login=document.getElementById('Login')
var ArrContainer=[];
if(localStorage.getItem('data')!=null){
    ArrContainer=JSON.parse(localStorage.getItem('data'));
}
/*************************************************************** */
 function takeValue(){
    takeObj={
        name:nameSign.value,
        email:emailSign.value,
        pass:passSign.value
    }

    if (checkValue()==true) {
        prag.innerHTML=`
        <p class="py-3">email already exists</p>
        `
    }
    else if(emptyValue()==true){
      
        prag.innerHTML=`
        <p class="py-3">  All inputs is required</p>
        `
    }
    else{
        ArrContainer.push(takeObj);
        localStorage.setItem("data",JSON.stringify(ArrContainer));
        prag.innerHTML=`
        <p class="py-3 text-success">sucsses</p>
        `
    }
  
 }

function checkValue(){
    for(var i=0;i<ArrContainer.length;i++){
        if(ArrContainer[i].email==emailSign.value){
              return true
            }
          
    }
   
    return false;
}
if(SignUp!=null){
    SignUp.addEventListener("click",takeValue)

}


function emptyValue(){
  
   if(nameSign.value==""||emailSign.value==""||passSign.value==""){
    return true;
   }
   else{
    return false;
   }
}
/********************************************************** */


function login(){
    if (olduser()) {
        Login.href="index3.html"
    
  
        
         }
       else if(emptyValue2()==true){
            prag.innerHTML=`
            <p class="py-3">  All inputs is required</p>
            `
        }
        else{
            prag.innerHTML=`
            <p class="py-3">  incorrect email or password</p>
            `
        }
     
    }

if(Login!=null){
    Login.addEventListener('click',login)

}
function emptyValue2(){
  
    if(emailLogin.value==""||passwordLogin.value==""){
     return true;
    }
    else{
     return false;
    }
 }
 if(Value!=null){
    Value.innerHTML=`welcom ${JSON.parse(localStorage.getItem("index"))}`
 }

 function olduser(){
    for (var i = 0; i< ArrContainer.length; i++) {

        if(emailLogin.value==ArrContainer[i].email
            &&passwordLogin.value==ArrContainer[i].pass){
        localStorage.setItem('index',JSON.stringify(ArrContainer[i].name));

                return true;
            }}
            return false;
 }