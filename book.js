class Book extends Publication{ 

    constructor(title, author, publisher = 'non disp', type = 'non class', price = -1, copies = 0, pages = -1, yop = -1, discount = 0){  
// i default vanno inseriti direttamente nel costruttore;
        super(title, publisher, type, price, copies, discount, 10);
        this.yop = yop; 
        this.pages = pages; 
        this.author = author;
    } 

    toString(){ 

        const pages = this.pages > 0 ? this.pages : 'Sconosciuto'; 

        const year = this.yop > 0 ? this.yop : 'Sconosciuto'; 

        const bookString = super.toString() + '\n' +
                           'Author: ' + this.author + '\n' + 
                           'Pages: ' + pages + '\n' + 
                           'Year of Production: ' + year;
                           
        return bookString;
    } 

//     getPublicPrice(book){ 
// //   price di partenza + tasse 10% - eventuale discount in % + 30%;  
//         const publicPriceWOTax = super.getPublicPriceWOTax();
//         const tax = this.price * 10 / 100; 

//         const publicPrice = publicPriceWOTax + tax; 
        
// //      const publicPrice = this.price + (this.price * 20 / 100) - (this.price * this.discount / 100) + (this.price * 30 / 100); 

// //      const roundedPrice = this.round(publicPrice);

// //      return roundedPrice; 

//         return publicPrice;
//             }
}