{
    const changeCurrency = (currency, amount) => {
    
        const USD = 3.97;
        const EUR = 4.52;
        const GBP = 5.41;

        switch (currency) {

            case "USD":
                return amount/USD;
            case "EUR":
                return amount/EUR;
            case "GBP":
                return amount/GBP;
        };
    }
    
    const updateTextElement = (currency, amount, changedCurrency, updateElement) => {
        updateElement.innerHTML = 
        `
        After exchange <strong>${amount}</strong> PLN you will receive <strong>${changedCurrency.toFixed(2)}</strong> ${currency}.
        `;
    }
    
    const deleteInputs = (currencyInput, updateElement, amountInput) => {
        currencyInput.addEventListener("input", (event) => {
            event.preventDefault();
            updateElement.innerHTML = "";
            amountInput.value = null;
        })
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
    
        const currencyInput = document.querySelector(".js-currency");
        const amountInput = document.querySelector(".js-amount");
        const updateElement = document.querySelector(".js-updateElement");

        const currency = currencyInput.value;
        const amount = +amountInput.value;
    
        const changedCurrency = changeCurrency(currency, amount);
        
        updateTextElement(currency, amount, changedCurrency, updateElement);
        deleteInputs(currencyInput, updateElement, amountInput);
    }

    const init = () => {
    
        const formElement = document.querySelector(".js-form");
    
        formElement.addEventListener("submit", onFormSubmit);
    }
    
    init();
}