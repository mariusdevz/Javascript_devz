const hasMoneyForSnack = true;
const snackCosts = 5;
const myMoney = 4;

const canBuy = myMoney >= snackCosts;
if (canBuy) {
    console.log("I can buy snacks!");
} else {
    console.log("Insufficient funds!");

}