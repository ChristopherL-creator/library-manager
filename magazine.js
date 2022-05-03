class Magazine{ 

    constructor(title, editor, periodicity, type, price, copies, discount, release){ 
        this.title = title; 
        this.editor = editor; 
        this.periodicity = periodicity; 
        this.type = type; 
        this.price = price; 
        this.copies = copies; 
        this.discount = discount; 
        this.release = release;
    } 

    magToString(){  
        const periodicity = this.periodicity === 'w' ? 'weekly' : 'monthly';

        const magString = 'Title: ' + this.title + '\n' + 
                          'Editor: ' + this.editor + '\n' + 
                          'Periodicity: ' + periodicity + '\n' + 
                          'Type: ' + this.type + '\n'+  
                          'Price: ' + this.price + '\n' + 
                          'Copies: ' + this.copies + '\n' + 
                          'discount: ' + this.discount + '\n' + 
                          'release: ' + this.release;
                           
        return magString;
    } 

    getPublicPrice(Magazine){ 
        // price di partenza + tasse 10% - eventuale discount in % + 30%; 
                const tax = this.price * 20 /100; 
                const discount = this.price * this.discount / 100; 
                const library = this.price * 30 / 100; 
        
                const publicPrice = this.price + tax - discount + library; 
        
                return publicPrice;
            }
}