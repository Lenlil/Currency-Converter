
GetApiData();

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

function GetCache()
{
    
}