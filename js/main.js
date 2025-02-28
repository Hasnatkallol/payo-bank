
document.getElementById('add-money').addEventListener('click',function(e){
  e.preventDefault();

  let mainBalance = convertInnerText('main-balance')   
  let convertAmount = convertValue('amount-add');
  let convertPin = convertValue('pinInput');
  let convertAcountNumber = document.getElementById('acount-number').value;
  let allBank = document.getElementById('bank').value;
  let currentTime = new Date().toLocaleTimeString();
  let transactionId = randaomTransactionId();


  
  if(convertAmount <= 0){
      alert("Invalid Amount")
      return
  }

  if(convertAcountNumber.length === 11){
       if(convertPin === 1234){

          let sum = mainBalance + convertAmount ;
          setInnerTextValue('main-balance',sum)

          document.getElementById('cart-modal').classList.remove('hidden')
          
          let container = document.getElementById('container');
          let div = document.createElement('div');
          div.innerHTML = 
          `
          <div class="bg-off-white border border-gray-300 p-4 rounded-lg shadow-sm m-4">
            <div class="flex gap-6  items-center">
              <img src="./assets/image/financial 1.png" class="w-16" alt="">
               <div>
                  <div>
                     <h1 class=''>Added Money from ${allBank} </h1>
                     <p>Acount Number : ${convertAcountNumber}</p>
                     <p class = "text-red-300">Transaction Id: ${transactionId}</p>
                     <p>Time : ${currentTime}</p>
                  </div>
                </div>
             </div>
           </div>
          `
          container.appendChild(div);



          let popap = document.getElementById('cart-popap');
          let divElement = document.createElement('div');
          divElement.innerHTML = 
          `
          <div class="bg-off-white border border-gray-300 p-4 rounded-lg shadow-sm m-4">
            <div class="flex gap-6  items-center">
              
               <div>
                  <div>
                     <h1 class=''>Added Money from ${allBank} </h1>
                     <p>Acount Number : ${convertAcountNumber}</p>
                     <p class = "text-red-300">Transaction Id: ${transactionId}</p>
                     <p>Time : ${currentTime}</p>
                  </div>
                </div>
             </div>
           </div>
          `
          popap.appendChild(divElement);

       }
       

       else{
          alert('Wrong PAssword')
       }
     }
   else{
     alert('Invalid Acount Number')
   }
})



      document.getElementById('close').addEventListener('click',function(){
        document.getElementById('cart-modal').classList.add('hidden')
        })
