const payCheckout=document.getElementsByName('send')
payCheckout.forEach(function(annete){
    annete.addEventListener('change',function(){
        var selectedOption = document.querySelector('input[name=send]:checked').id;
        hideShowDIV(annete.id)
    })
    
})



function hideShowDIV(val)
{
   
if(val == 'send-money'){
    document.getElementById('pesa').style.display='block';
    document.getElementById('credit').style.display='none';

}
 else if(val == 'credit-card'){
    document.getElementById('pesa').style.display='none';
    document.getElementById('credit').style.display='block';
 }

 else {
    document.getElementById('pesa').style.display='none';
    document.getElementById('credit').style.display='none';
 }

}

hideShowDIV('')