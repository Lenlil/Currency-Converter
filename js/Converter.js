class Converter
{ 
    constructor()
    {

    }

    Exchange(sellCurrency, buyCurrency, amount)
    {
        let sessionRatesObject = JSON.parse(sessionStorage.getItem("rates"));   

        let fromRate = this.GetPropertyValue(sessionRatesObject, sellCurrency);
        let toRate = this.GetPropertyValue(sessionRatesObject, buyCurrency);      
            
        let sellCurrencyToSEK= (fromRate * amount);
        let result = (toRate*sellCurrencyToSEK);

        return result;
    
    }

    GetPropertyValue(object, propName) 
    { 
        let propertyArray = Object.entries(object.rates);       
      
        for (let pair of propertyArray) 
        {
            if (pair[0] == propName) 
            {                 
                return pair[1]; 
            } 
        }  
    }   
}