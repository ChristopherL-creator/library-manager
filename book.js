class Book{ 

    constructor(title, author, publisher, type, price, copies, pages, yop, discount){ 
        this.title = title; 
        this.author = author; 
        this.publisher = publisher; 
        this.type = type; 
        this.price = price; 
        this.copies = copies; 
        this.pages = pages; 
        this.yop = yop; 
        this.discount = discount; 
    } 

    toString(){ 
        const bookString = 'Title: ' + this.title + '\n' + 
                           'Author: ' + this.author + '\n' + 
                           'Publisher: ' + this.publisher + '\n' + 
                           'Type: ' + this.type + '\n'+  
                           'Price: ' + this.price + '$' + '\n' + 
                           'Copies: ' + this.copies + ' copies' + '\n' + 
                           'Pages: ' + this.pages + ' pages' + '\n' + 
                           'Year of Production: ' + this.yop + '\n' +
                           'discount: ' + this.discount + '%'; 
                           
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