
var lastFetchedRates = new Date();
lastFetchedRates.setDate(lastFetchedRates.getDate()-1);
var timeSinceCheck ;

document.querySelector("#convert").addEventListener('click', () => {

    var ratesObject = GetApiData();

let text = document.querySelector("#exchangeRate");
text.innerHTML = JSON.stringify(ratesObject);

});


function addDays(date, days) 
{
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
}

async function GetApiData()
{    
    var url = 'https://api.exchangeratesapi.io/latest?base=SEK';
    
    var currencyRates;

    var sessionRatesObject = JSON.parse(sessionStorage.getItem("rates"));

    timeSinceCheck = (new Date() - lastFetchedRates).getHours;

    if (sessionRatesObject == null || timeSinceCheck > 24)
    {
        currencyRates = currencyList = await fetch(url).then(response => response.json());

        sessionStorage.setItem("rates", JSON.stringify(currencyRates));

        lastFetchedRates = new Date();
        
        return currencyRates;
    }
    else
    {
        return sessionRatesObject;
    }    
}
