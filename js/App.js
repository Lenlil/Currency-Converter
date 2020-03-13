

var lastFetchedRates;
var timeSinceCheck ;

GetApiData();



function GetApiData()
{    
    var url = 'https://api.exchangeratesapi.io/latest?base=SEK';
    
    var currencyRates;

    var sessionRatesObject = JSON.parse(sessionStorage.getItem("rates"));

    timeSinceCheck = (DateTime.Now - lastFetchedRates).TotalHours;

    if (sessionRatesObject == null || timeSinceCheck < 24)
    {
        currencyRates = currencyList = await fetch(url).then(response => response.json());

        sessionStorage.setItem("rates", JSON.stringify(currencyRates));

        lastFetchedRates = DateTime.Now();
        
        return currencyRates;
    }
    else
    {
        return sessionRatesObject;
    }    
}
