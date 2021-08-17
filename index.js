const initialPrice = document.querySelector(".initial-price");
const stocksQuantity = document.querySelector(".stocks-quantity");
const currentPrice = document.querySelector(".current-price")
const btnCheckStocksStatus = document.querySelector("#btn-checkStocksStatus")
const message = document.querySelector("#message")

btnCheckStocksStatus.addEventListener("click", checkProfitAndLoss);

function checkProfitAndLoss(){


    const totalCurrentPrice = product(Number(currentPrice.value), Number(stocksQuantity.value));
    const totalInitialPrice = product(Number(initialPrice.value), Number(stocksQuantity.value));
    if (initialPrice.value && stocksQuantity.value && currentPrice.value){

        if (initialPrice.value > 0 && stocksQuantity.value > 0 && currentPrice.value > 0){
            const totalProfit = totalCurrentPrice - totalInitialPrice;
            const profitPercentage = ( totalProfit / totalInitialPrice ) * 100;
            message.innerText = `Your profit is Rs ${totalProfit} and profit percent is ${profitPercentage}`;
        } else {
            message.innerText = "Invalid Input. All Inputs must be positive.";
        }  

    } else {
        message.innerText = "Please enter all the fields";
    }


}

function product(a,b){
    const product = a * b;
    return product;
}
