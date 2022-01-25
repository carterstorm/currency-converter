{
    const changeCurrency = (currency, amount, currentValue) => {
    
        const USD = 3.97;
        const EUR = 4.52;
        const GBP = 5.41;
    
        switch (currency) {
            case "USD":
                currentValue.value = USD;
                return amount/USD; 
            case "EUR":
                currentValue.value = EUR;
                return amount/EUR;
            case "GBP":
                currentValue.value = GBP;
                return amount/GBP;
        };
    }
    
    const updateTextElement = (currency, amount, changedCurrency, updateElement, currentValue) => {
        updateElement.innerHTML = 
        `
        The current rate ${currency} is: <strong>${currentValue.value}</strong>.<br>
        After exchange <strong>${amount}</strong> PLN you will receive <strong>${changedCurrency.toFixed(2)}</strong> ${currency}.
        `;
    }
    
    const deleteInputs = (currencyInput, updateElement, amountInput, currentValue) => {
        currencyInput.addEventListener("input", (event) => {
            event.preventDefault();
            currentValue.value = null;
            updateElement.innerHTML = "";
            amountInput.value = null;
        })
    }
    
    const init = () => {
    
        const formElement = document.querySelector(".js-form");
    
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
        
            const currencyInput = document.querySelector(".js-currency");
            const amountInput = document.querySelector(".js-amount");
            const currentValue = document.querySelector(".js-currentValue");
            const updateElement = document.querySelector(".js-updateElement");
    
            const currency = currencyInput.value;
            const amount = +amountInput.value;
        
            const changedCurrency = changeCurrency(currency, amount, currentValue);
            
            updateTextElement(currency, amount, changedCurrency, updateElement, currentValue);
            deleteInputs(currencyInput, updateElement, amountInput, currentValue);
        })
    }
    
    init();
}