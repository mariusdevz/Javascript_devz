class Account {
    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }

    getDetails() {
        return `Account number: ${this.accountNumber}, balance: ${this.balance}, owner: ${this.owner}.`;
    }
}

class SavingsAccount extends Account {
    constructor(accountNumber, balance, owner, interestRate) {
        super(accountNumber, balance, owner);
        this.interestRate = interestRate;
    }

    addInterest() {
        return this.interestRate;
    }

    getDetails() {
        return `${super.getDetails()} with new interests`
    }

}

class checkingAccount extends Account {
    constructor(accountNumber, balance, owner, monthlyFee) {
        super(accountNumber, balance, owner);
        this.monthlyFee = monthlyFee;
    }

    deductFee(fee) {
        const deduct = this.balance - fee
        return deduct;
    }

    getDetails() {
        return `${super.getDetails()} checked`
    }
}

const accounts = [new Account(1, 200, "John"), new SavingsAccount(1, 150, "John"),
new checkingAccount(1, 100, "John")];

accounts.forEach(account => console.log(account.getDetails()));

const deduct = new checkingAccount(1, 200, "John");
console.log(deduct.deductFee(10));
