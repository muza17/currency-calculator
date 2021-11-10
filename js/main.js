var forma1 = document.querySelector("#form");
var forma2 = document.querySelector("#form2");
var select = document.querySelector("#select");
const eur =  12382.50;
const usd  = 10680.09;
const rub = 150.44;



forma2.addEventListener("submit", function(e){
    e.preventDefault();
    

    if(select.value=="ussd"){
        sum=(Number(money.value)/usd).toFixed(2);
        result.textContent=sum;
        
    } else if(select.value=="yevro"){
        sum=(Number(money.value)/eur).toFixed(2);
        result.textContent=sum;
        
    } else{
        sum=(Number(money.value)/rub).toFixed(2);
        result.textContent=sum;
    }
    
    
    console.log(typeof sum);
    
})




