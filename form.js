function validate(e){
e.preventDefault();
    console.log("first");
    document.getElementById("eerror").textContent="";
    document.getElementById("perror").textContent="";
    document.getElementById("merror").textContent="";
    document.getElementById("strength").textContent="";
    var x=verifyemail();

    var y=verifymob();
    var z=verifypass();
    return y && z && x;
}
function verifyemail() {
    console.log("verify email");
    var e = document.getElementById("email");
    var validRegex =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
    if (validRegex.test(e.value)){
        return true;
    }  
    else {
        document.getElementById("eerror").textContent="Invalid";
        document.getElementById("eerror").style.color="red";
        e.style.border="1px solid red";
        e.value="";
        return false;
    }
}

function verifymob() {
    console.log("verify mob");
    var phone = document.getElementById("mobile");
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.value.match(phoneNum)) {
        return true;
    }
    else {
      
        document.getElementById("merror").textContent="Invalid mobile number";
        document.getElementById("merror").style.color="red";
        phone.style.border="1px solid red";
        phone.focus();
        phone.value="";
        return false;
    }

}

function verifypass() {
    console.log("verifi pass");
    var p = document.getElementById("psw");
   // var cp = document.getElementById("cpwd");
    var passw =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,10}$/;

  if (cp.value != p.value) {
        document.getElementById("cperror").textContent="Password and confirm passwords does not match";
        document.getElementById("cperror").style.color="red";
        p.style.border="1px solid red";
        cp.style.border="1px solid red";
        psw.value="";
        cp.value="";
        return false;
    }

    if (p.value.length < 8) {
        document.getElementById("perror").textContent="password cannot be empty";
        document.getElementById("perror").style.color="red";
        p.style.border="1px solid red";
        psw.value="";
        //cp.value="";
        return false;
    }
    if (p.value.length > 10) {
        document.getElementById("perror").textContent="Password is too long";
        document.getElementById("perror").style.color="red";
        p.style.border="1px solid red";
        psw.value="";
       // cp.value="";
        return false;
    }
    if (psw.value.match(passw)) {
        return true;
    }
    else {
       
        document.getElementById("perror").textContent="password must contain not less than 10 characters which contain at least one letter lower and uppercase letter,number and special character";
        document.getElementById("perror").style.color="red";
        p.style.border="1px solid red";
        psw.value="";
        //cp.value="";
        return false;
    }
}
function passwordstrength() {
    console.log("strength");
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var psw = document.getElementById("psw");
    if (psw.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(psw.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(psw.value)) {
        strength.innerHTML = '<span style="color:green;font-family:Franklin Gothic Medium;font-size:20px">Strong Password!</span>';
    } else if (mediumRegex.test(psw.value)) {
        strength.innerHTML = '<span style="color:orange;font-family:Franklin Gothic Medium;font-size:20px">Medium Password!</span>';
    } else {
        strength.innerHTML = '<span style="color:red;font-family:Franklin Gothic Medium;font-size:20px">Weak Password!</span>';
    }
}


function colorchange() {
    var f = document.getElementById("myform");
    f.style.backgroundColor = "lightgreen";
}
function colorback() {
    var f = document.getElementById("myform");
    f.style.backgroundColor = "transparent";
}







