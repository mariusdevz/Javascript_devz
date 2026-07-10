// Function Utility Library

function isValidEmail(email) {
    return email.includes("@") && email.includes(".")
}

function formatCurrency(amount) {
    return "$" + amount.toLocaleString("en-us", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }
    )
}

function capitalizeWords(sentence) {
    return sentence.split("").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");

}

function getInitials(fullName) {
    return fullName.split("").map(name => name.charAt(0)).join("").toUpperCase()
}

function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        setTimeout(() => {
            func(...args);
        }, delay)
    }
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}