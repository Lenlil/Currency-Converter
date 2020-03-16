
var lastFetchedRates = new Date().getHours() - 2;
//lastFetchedRates.setDate(lastFetchedRates.getDate()-1);
var timeSinceCheck;
var sessionRatesObject;

var sellCurrency = document.querySelector("#sellCurrency");
var buyCurrency = document.querySelector("#buyCurrency");

GetApiData();

DisplayData();

// document.querySelector("#convert").addEventListener('click', () => {

//     var ratesObject = GetApiData();
    
//     let text = document.querySelector("#exchangeRate");
//     text.innerHTML = JSON.stringify(ratesObject);
// });

function addDays(date, days) 
{
    const copy = new Date(Number(date));
    copy.setDate(date.getDate() + days);
    return copy;
}

async function GetApiData()
{    
    var url = 'https://api.exchangeratesapi.io/latest';
    
    var currencyRates;    

    timeSinceCheck = (new Date().getHours() - lastFetchedRates);

    if (timeSinceCheck >= 1)
    {
        currencyRates = await fetch(url).then(response => response.json());                              

                        
        sessionStorage.setItem("rates", JSON.stringify(currencyRates));

        lastFetchedRates = new Date().getHours();        
        
        //return currencyRates;
    }   
    else
    {
        sessionRatesObject = JSON.parse(sessionStorage.getItem("rates"));
        //return sessionRatesObject;
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
