document.getElementById('cash-out').addEventListener('click',function(e){
    e.preventDefault();

    let mainBalance = convertInnerText('main-balance')   
    let convertCashAmount = convertValue('cash-out-input');
    let convertPin = convertValue('pinInput');
    let convertAcountNumber = document.getElementById('acount-number').value;
    let currentTime = new Date().toLocaleTimeString();
    let transactionId = randaomTransactionId();

    if( mainBalance < convertCashAmount){
        alert("Invalid Amount")
        return
    }
    if(convertAcountNumber.length === 11){
         if(convertPin === 1234){
            sum = mainBalance - convertCashAmount ;
            setInnerTextValue('main-balance',sum)

            let container = document.getElementById('container');
            let div = document.createElement('div');
            div.innerHTML = 
            `
            <div class="bg-off-white border border-gray-300 p-4 rounded-lg shadow-sm m-4">
              <div class="flex gap-6  items-center">
                <img src="./assets/image/financial 1.png" class="w-16" alt="">
                 <div>
                    <div>
                       <h1>Cash Out ${convertCashAmount} Acount Number : ${convertAcountNumber}</h1>
                         <p class = "text-red-300">Transaction Id: ${transactionId}</p>
                         <p>Time : ${currentTime}</p>
                    </div>
                  </div>
               </div>
             </div>
            `
            container.appendChild(div)
         }
         else{
            alert('Wrong PAssword')
         }
       }
     else{
       alert('Invalid Acount Number')
     }
})