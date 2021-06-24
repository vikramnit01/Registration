const form=document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(isValid()){
        showSuccessPrompt()
    }
})

function isValid(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const mobile = document.getElementById('mobile').value;
    const branch=document.getElementById('branch').value;
    
    var namePattern = /^[A-Za-z ]{2,15}$/;
    var emailPattern = /^[A-Za-z0-9_.]{2,}@[A-Za-z]{2,}[.]{1}[A-Za-z.]{2,6}$/;
    var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/
    var mobilePattern = /^[6789][0-9]{9}$/;


    if (!namePattern.test(name)) {
        document.getElementById('errorName').innerHTML = "Name length between 2 to 15"
        return false;
    }else{
        document.getElementById('errorName').innerHTML = ""
    }

    if (!emailPattern.test(email)) {
        document.getElementById('errorEmail').innerHTML = "Invalid Email format";
        return false;
    }else{
        document.getElementById('errorEmail').innerHTML = "";

    }
    
    if (!passwordPattern.test(password)) {
        document.getElementById('errorPassword').innerHTML = "contain atlest One Character, Special Character,Number"
        return false;
    }else{
        document.getElementById('errorPassword').innerHTML = ""

    }

    if (password != confirmPassword) {
       document.getElementById('errorConfPass').innerHTML = "Password Mismatched"
       return false;
    }else{
       document.getElementById('errorConfPass').innerHTML = ""

    }

    if(!mobilePattern.test(mobile)) {
        document.getElementById('errorMobile').innerHTML = "Mobile Number must be of 10 digits"
        return false;
    }else{
        document.getElementById('errorMobile').innerHTML = ""
    }
    
    if(branch == "Please Select"){
     document.getElementById('errorBranch').innerHTML = "Please select an Option"
     return false;
    }else{
     document.getElementById('errorBranch').innerHTML = ""

    }


    return true;
}

function showSuccessPrompt(){
    alert("form submit")
}
