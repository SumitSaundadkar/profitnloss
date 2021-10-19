var initialPrice= document.querySelector("#initial-price");
var stocksQty= document.querySelector("#stocks-quantity");
var curentPrice= document.querySelector("#current-price");
var buttonClick= document.querySelector("#submit-btn");
var outputEl= document.querySelector("#output-label")

buttonClick.addEventListener("click",submitHandler);
function submitHandler(){
    var ip=Number (initialPrice.value);
    var qty=Number(stocksQty.value);
    var cp=Number(curentPrice.value);
    calculateProfitnLoss(ip,qty,cp);
}

function calculateProfitnLoss(initial,stocks,current){
    if(initial>current){
        var loss=(initial-current)*stocks;
        var losspercentage=(loss/initial)*100;
        showMessage(`ohoo, the loss is${loss} and the percentage of loss is${losspercentage}`);
        
    }
    else if(initial<current){
        var profit=(current-initial)*stocks;
        var profitpercentage=(profit/initial)*100;
        showMessage(`yeee, the profit is${profit} and the percentage of loss is${profitpercentage}`);

    }
    else{
        showMessage(`No pain no gain and no gain no pain`);
    }
   
}
function  showMessage(message){
    outputEl.innerHTML=message;
}

