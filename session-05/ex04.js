
function createAdder(fixed) {
    return function created(number) {
        return fixed + number;

    }
}

const added = createAdder(6);
// console.log(added(7));

function createBankAccount() {
    let bank = 0;

    function deposit(amount) {
        amount.bank = bank++;
    }

    function withdraw(amount) {
        amount.bank = bank--;
    }

    function getBalance(amount) {
        amount.bank
    }

    return {
        deposit,
        withdraw,
        getBalance
    }
}