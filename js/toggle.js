document.getElementById('cash-out-section').style.display = 'none';
document.getElementById('transaction-history-section').style.display = 'none';

document.getElementById('addMoney')
 .addEventListener('click',function(e){
  e.preventDefault();
  toggle('add-money-section','block');
  toggle('cash-out-section','none');
  toggle('transaction-history-section','none');
})

document.getElementById('cashOut')
 .addEventListener('click',function(e){
  e.preventDefault();
  toggle('add-money-section','none');
  toggle('cash-out-section','block');
  toggle('transaction-history-section','none');
})

document.getElementById('transaction')
 .addEventListener('click',function(e){
  e.preventDefault();
  toggle('add-money-section','none');
  toggle('cash-out-section','none');
  toggle('transaction-history-section','block');
})

function toggle(id,status){
    document.getElementById(id).style.display = status;
}