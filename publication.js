// creo classe superiore con proprietà comuni a sotto oggetti;
class Publication{ 

    constructor(title, publisher, type, price, copies, discount){ 
        this.title = title; 
        this.publisher = publisher; 
        this.type = type; 
        this.price = price; 
        this.copies = copies; 
        this.discount = discount; 
    }

    toString(){ 
        const pubString = 'Title: ' + this.title + '\n' + 
                          'Publisher: ' + this.publisher + '\n' + 
                          'Type: ' + this.type + '\n'+  
                          'Price: ' + this.getPublicPrice() + '$' + '\n' + 
                          'Copies: ' + this.copies + ' copies' + '\n' + 
                          'discount: ' + this.discount + '%'; 
        
        return pubString;
    }
}