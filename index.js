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

            if (totalProfit > 0 ) {
                displayMsg("green", `Congratulations! Your profit is of ₹ ${totalProfit.toFixed(2)} and profit percent is ${profitPercentage.toFixed(2)}% 💹`);
            } else if (totalProfit < 0 ) {
                displayMsg("red", `Sorry! Your loss is of ₹ ${totalProfit.toFixed(2)} and loss percent is ${profitPercentage.toFixed(2)}% 🔻`);
            } else {
                message.innerText = `Your stocks performance is stagnant i.e, No Profit No Loss`;
            }
            
        } else {
            displayMsg("red", "Invalid Input. All Inputs must be positive ⚠.");
        }  

    } else {
        displayMsg("red", "Enter all the fields ⚠");
    }


}

function displayMsg(color, msg){
    message.style.color = color
    message.style.backgroundColor = "white";
    message.innerText = msg;
}

function product(a,b){
    const product = a * b;
    return product;
}
