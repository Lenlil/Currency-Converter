
var converter = new Converter();
var sellCurrency = document.querySelector("#sellCurrency");
var buyCurrency = document.querySelector("#buyCurrency");

// Cache nedan
var hourLastFetched = new Date().getHours() - 2;
var startDate = new Date().getDate();
var hoursSinceCheck;

FetchApiData();
DisplayData();

var convertButton = document.querySelector("#convert");
convertButton.addEventListener('click', () => {

    let fromCurrency = sellCurrency.value;
    let toCurrency = buyCurrency.value; 
    let amount = amountToConvert.value;
    
    FetchApiData();
    let result = converter.Exchange(fromCurrency, toCurrency, amount);

    DisplayResult(fromCurrency, toCurrency, amount, result);   

});


async function FetchApiData()
{    
    var url = 'https://api.exchangeratesapi.io/latest?base=SEK';
    
    hoursSinceCheck = (new Date().getHours() - hourLastFetched);
    let dateNow = new Date().getDate();

    if (startDate != dateNow || hoursSinceCheck > 0)
    {
        let currencyRates = await fetch(url).then(response => response.json());                             
                        
        sessionStorage.setItem("rates", JSON.stringify(currencyRates));

        hourLastFetched = new Date().getHours();                  
    }       
}

function DisplayData()
{
    let sessionRatesObject = JSON.parse(sessionStorage.getItem("rates"));

    for(var rate in sessionRatesObject.rates)
    {
        var rateOptionSell = document.createElement('option');
        rateOptionSell.appendChild(document.createTextNode(rate)); 
        
        var rateOptionBuy = document.createElement('option');
        rateOptionBuy.appendChild(document.createTextNode(rate)); 
        
        sellCurrency.appendChild(rateOptionSell);
        buyCurrency.appendChild(rateOptionBuy);
    }    
}

function DisplayResult(fromCurrency, toCurrency, amount, result)
{
    let displayResult = document.querySelector("#amountPostConversion"); 
    let displayRate = document.querySelector("#buyCurrencyText");    

    displayResult.innerHTML = amount + " " + fromCurrency + " är värda " + result.toString() + " " + toCurrency;    
}