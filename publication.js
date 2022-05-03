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
        const pubString = 'Title: ' + this.title + '\n' + 
                          'Publisher: ' + this.publisher + '\n' + 
                          'Type: ' + this.type + '\n'+  
                          'Price: ' + this.getPublicPrice().toFixed(2) + '$' + '\n' + 
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
        const roundedPublicPrice = this.round(publicPrice, 2); 
        return roundedPublicPrice;
    }

     round(number, decimalPlace){ 
         const roundedString = number.toFixed(decimalPlace); 
         const roundedNumber = parseFloat(roundedString); 
         return roundedNumber;
     }

        // return publicPriceWOTax;


}