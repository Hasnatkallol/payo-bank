document.getElementById('logout-btn').addEventListener('click',function(e){
    e.preventDefault()
     window.location.href='./index.html'
})

function convertValue(id){
    let value = document.getElementById(id).value;
    let convertValue = parseFloat(value)
    return convertValue;
    }

function convertInnerText(id){
    let text = document.getElementById(id).innerText;
    let convertInnerText = parseFloat(text)
    return convertInnerText;
    }

function setInnerTextValue(id,value){
document.getElementById(id).innerText = value;
}


// function setTimeValue(){
  
// const currentTime = new Date().toLocaleTimeString(); 
// let time = document.getElementById("timeDisplay").textContent = `Clicked at: ${currentTime}`;
// return time ;
// }






