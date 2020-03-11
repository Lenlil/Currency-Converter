
GetApiData();

var lastFetchedRate = DateTime.Today.AddDays(-1); 
var cachedRate = "";

function GetApiData()
{
    
    var url = 'https://api.exchangeratesapi.io/latest?base=SEK';

    let currencyList = await fetch(url).then(response => response.json());

    // fetch(url)
    // .then(response => response.json())
    // .then(currency => {

    //     let newOption = document.createElement('option');
    //     let currencyName = document.createTextNode(currency.);
    //     newTitleText.appendChild(title);

    //     document.body.appendChild(newTitleText);

    // });
    
}

function SetCache()
{
    if  
}

function GetCache()
{

    double timeSinceCheck = (DateTime.Now - lastUpdatedRate).TotalHours;

    if (timeSinceCheck < 24)
    {
        return cachedRate;
    }
        var myObject = {"message": "Detta är texten i mitt objekt."};

    sessionStorage.setItem("text", JSON.stringify(myObject));

    document.querySelector("#show").addEventListener('click', () => {

        let messageObject = JSON.parse(sessionStorage.getItem("text"));

        alert(messageObject.message);

    });

    document.querySelector("#remove").addEventListener('click', () => {

        sessionStorage.removeItem("text");

    });
}