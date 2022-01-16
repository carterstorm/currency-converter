const formElement = document.querySelector(".js-form");
const currencyInput = document.querySelector(".js-currency");
const currentValue = document.querySelector(".js-currentValue");
const amountInput = document.querySelector(".js-amount");
const changeButton = document.querySelector(".js-changeButton");
const reciveElement = document.querySelector(".js-reciveElement")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    

    const currency = currencyInput.value;
    const amount = +amountInput.value;

    const USD = 3.97;
    const EUR = 4.52;
    const GBP = 5.41;

    let changedCurrency;

    switch (currency) {
        case "USD":
            changedCurrency = amount/USD; 
            currentValue.value = USD;
            break;

        case "EUR":
            changedCurrency = amount/EUR; 
            currentValue.value = EUR;
            break;
        case "GBP":
            changedCurrency = amount/GBP;
            currentValue.value = GBP;
            break;
    };

    reciveElement.innerHTML = `
        The current rate ${currency} is: <strong>${currentValue.value}</strong>.<br>
        After exchange <strong>${amount}</strong> PLN you will receive <strong>${changedCurrency.toFixed(2)}</strong> ${currency}.
        `;
})

currencyInput.addEventListener("input", (event) => {
    event.preventDefault();
    currentValue.value = null;
    reciveElement.innerHTML = "";
    amountInput.value = null;
})

