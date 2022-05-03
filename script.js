const book1 = new Book('Jurassic Park', 'Michael Crichton', 'Oliver Johnson', 'SciFi', 15, '10000', '300', 1990, 20);
console.log(book1); 
console.log(book1.toString()); 
console.log('Public price: ', book1.getPublicPrice()); 

const magazine1 = new Magazine('Vogue', 'Anna Wintour', 'w', 'fashion', 10, 156464643548, 15, 256);
console.log(magazine1); 
console.log(magazine1.magToString()); 
console.log('Public price: ', magazine1.getPublicPrice()); 