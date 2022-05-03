class Book extends Publication{ 

    constructor(title, author, publisher, type, price, copies, pages, yop, discount){ 
        super(title, publisher, type, price, copies, discount);
        this.yop = yop; 
        this.pages = pages; 
        this.author = author;
    } 

    toString(){ 
        const bookString = super.toString() + '\n' +
                           'Author: ' + this.author + '\n' + 
                           'Pages: ' + this.pages + ' pages' + '\n' + 
                           'Year of Production: ' + this.yop;
                           
        return bookString;
    } 

    getPublicPrice(book){ 
// price di partenza + tasse 10% - eventuale discount in % + 30%; 
        const tax = this.price * 10 /100; 
        const discount = this.price * this.discount / 100; 
        const library = this.price * 30 / 100; 

        const publicPrice = this.price + tax - discount + library; 

        return publicPrice;
    }
}