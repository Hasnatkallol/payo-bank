document.getElementById('login-btn').addEventListener('click',function(e){
    e.preventDefault()
    let acountNumber = document.getElementById('acount-number').value;
    let password = document.getElementById('password').value;
    let convertPassword = parseFloat(password)
    console.log(typeof convertPassword);
    if(acountNumber.length === 11){
        if(convertPassword === 1234){
          window.location.href='./main.html'
        }
        else{
            alert('Wrong Password !!')
        }
        
    }
    else{
        alert("Invalid Acount Number");
    }
})