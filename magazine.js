class Magazine extends Publication{ 
//  collego Magazine a genitore Publication; 

    constructor(title, publisher, periodicity, type, price, copies, discount, release){ 
//  scrivo semplicemente valore tax in super;    
        super(title, publisher, type, price, copies, discount, 20);
        this.periodicity = periodicity; 
        this.release = release; 
//  con super importo proprietà comuni da Publication, devo solo aggiungere quelle uniche di Magazine sotto;
    } 

    magToString(){  

        const periodicity = this.periodicity === 'w' ? 'weekly' : 'monthly';

        const magString = super.toString() + '\n' + 
                          'Periodicity: ' + periodicity + '\n' +  
                          'release: ' + '#' + this.release;

        return magString;
    } 

//     getPublicPrice(magazine){ 
// //  price di partenza + tasse 10% - eventuale discount in % + 30%;  
//         const publicPriceWOTax = super.getPublicPriceWOTax();
//             const tax = this.price * 20 / 100; 
        
//             const publicPrice = publicPriceWOTax + tax; 

// //          const publicPrice = this.price + (this.price * 20 / 100) - (this.price * this.discount / 100) + (this.price * 30 / 100);            

// //          const roundedPrice = this.round(publicPrice);

// //          return roundedPrice; 

//             return publicPrice;
//             }
}