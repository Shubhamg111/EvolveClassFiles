const displayMsg=(Msg,idName,colorName)=>{
    document.getElementById(idName).innerHTML=Msg
    document.getElementById(idName).style.color=colorName

}

const namevalidate=()=>{
    let name = document.getElementById('name').value
    if(name ==''){
        displayMsg('Name is Mandatory','nameMsg','red')
        return false
    }
    else if(!name.match(/^[a-zA-z0-9]+$/ )){
        displayMsg('Name must be alphabets donnot use digits or sp. characters','nameMsg','red')
        return false
    }
    else{
        displayMsg('Valid Name','nameMsg','green')
        return true
    }
}

const emailvalidate=()=>{
    let email = document.getElementById('email').value
    if(email ==''){
        displayMsg('email is Mandatory','emailMsg','red')
        return false
    }
    else if(!email.match(/^([a-zA-Z])[a-zA-Z0-9\-\.\_]+\@+([a-zA-Z])+\.+([a-z])/)){
        displayMsg("Follow the sample 'example@gmail.com'",'emailMsg','red')
        return false
    }
    else{
        displayMsg('Valid email','emailMsg','green')
        return true
    }
}


const pwdvalidate=()=>{
    let pwd = document.getElementById('pwd').value
    if(pwd ==''){
        displayMsg('password is Mandatory','pwdMsg','red')
        return false
    }
    else if(!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/)){
        displayMsg("password is weak",'pwdMsg','red')
        return false
    }
    else{
        displayMsg('Valid password','pwdMsg','green')
        return true
    }
}
const cpwdvalidate=()=>{
    let pwd = document.getElementById('pwd').value
    let cpwd = document.getElementById('cpwd').value
    if(cpwd ==''){
        displayMsg('confirm password is Mandatory','cpwdMsg','red')
        return false
    }
    else if(pwd != cpwd){
        displayMsg("password is not matching",'cpwdMsg','red')
        return false
    }
    else{
        displayMsg('Valid password','cpwdMsg','green')
        return true
    }
   
}
