// creo classe superiore con proprietà comuni a sotto oggetti;
class Publication{ 


    constructor(title, publisher, type, price, copies, discount, tax){ 
//  assumo che tax sia uguale, e lo sposto nel genitore;
        this.title = title; 
        this.publisher = publisher; 
        this.type = type; 
        this.price = price; 
        this.copies = copies; 
        this.discount = discount; 
        this.tax = tax;
    }

    toString(){ 

        const publicPrice = this.getPublicPrice() > 0 ? this.getPublicPrice.toFixed(2) : 'Sconosciuto';
        const pubString = 'Title: ' + this.title + '\n' + 
                          'Publisher: ' + this.publisher + '\n' + 
                          'Type: ' + this.type + '\n'+  
                          'Price: ' + publicPrice + '$' + '\n' + 
                          'Copies: ' + this.copies + ' copies' + '\n' + 
                          'discount: ' + this.discount + '%'; 
        
        return pubString;
    } 

    // getPublicPriceWOTax(){ 
    //     const discount = this.price * this.discount / 100; 
    //     const library = this.price * 30 / 100; 

    //     const publicPriceWOTax = this.price - discount + library;  

    getPublicPrice(){  

        const discount = this.price * this.discount / 100;
        const library = this.price * 30 / 100; 
        const tax = this.price * this.tax / 100; 
        const publicPrice = this.price + tax - discount + library; 
        const roundedPublicPrice = Publication.round(publicPrice, 2); 
        return roundedPublicPrice;
    }

    static round(number, decimalPlace){ 
        const roundedString = number.toFixed(decimalPlace); 
        const roundedNumber = parseFloat(roundedString); 
        return roundedNumber;
    }
//  round non dipende da this. : non lo menziona, possiamo quindi svincolarla 
//  dall'oggetto, renderla statica, scrivendo "static" davanti. diventa così funzione di classe;

        // return publicPriceWOTax;

} 

class TemperatureObservation { 

    constructor (temperature, date, location){ 
        this.temperature = temperature; 
        this.date = date; 
        this.location = location;
    }         

    getFTemp(){ 
        const cToFahr = this.temperature * 9 / 5 + 32; 
        return cToFahr;
    } 

    get tempF(){ 
        const cToFahr = this.temperature * 9 / 5 + 32; 
        return cToFahr;
    } 

    set tempF(value){ 
        const fToCel = (value - 32) * 5 / 9; 
        this.temperature = fToCel;
    }
}