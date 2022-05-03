const book1 = new Book('Jurassic Park', 'Michael Crichton', 'Oliver Johnson', 'SciFi', 15, '10000', '300', 1990, 20);
console.log(book1); 
console.log(book1.toString()); 
console.log('Public price: ', book1.getPublicPrice(), '$');  

const book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 'Ace Books', 'Fantasy', 26, '120000', '1200', 1955, 30);
console.log(book2); 
console.log(book2.toString()); 
console.log('Public price: ', book2.getPublicPrice(), '$'); 

const magazine1 = new Magazine('Vogue', 'Anna Wintour', 'w', 'fashion', 10, 156464643548, 15, 256);
console.log(magazine1); 
console.log(magazine1.magToString()); 
console.log('Public price: ', magazine1.getPublicPrice(), '$'); 

const magazine2 = new Magazine('Focus', 'Arnoldo Mondadori Editori', 'm', 'Scienza', 7, 64643548, 10, 200);
console.log(magazine2); 
console.log(magazine2.magToString()); 
console.log('Public price: ', magazine2.getPublicPrice(), '$'); 