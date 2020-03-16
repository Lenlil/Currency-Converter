
var converter = new Converter();

var lastFetchedRates = new Date().getHours() - 2;
var timeSinceCheck;
var sessionRatesObject;

var sellCurrency = document.querySelector("#sellCurrency");
var buyCurrency = document.querySelector("#buyCurrency");

GetApiData();
DisplayData();

var convertButton = document.querySelector("#convert");

convertButton.addEventListener('click', () => {

    let fromCurrency = sellCurrency.value;
    let toCurrency = buyCurrency.value; 
    let amount = amountToConvert.value;
    
    GetApiData();
    let result = converter.Exchange(fromCurrency, toCurrency, amount);

    let displayResult = document.querySelector("#amountPostConversion"); 

    displayResult.innerHTML = result.toString();

});


async function GetApiData()
{    
    var url = 'https://api.exchangeratesapi.io/latest?base=SEK';
    
    var currencyRates;    

    timeSinceCheck = (new Date().getHours() - lastFetchedRates);

    if (timeSinceCheck >= 1)
    {
        currencyRates = await fetch(url).then(response => response.json());                             
                        
        sessionStorage.setItem("rates", JSON.stringify(currencyRates));

        lastFetchedRates = new Date().getHours();              
     
    }   
    else
    {
        sessionRatesObject = JSON.parse(sessionStorage.getItem("rates"));              
    }    
}

function DisplayData()
{
    sessionRatesObject = JSON.parse(sessionStorage.getItem("rates"));

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
