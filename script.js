const book1 = new Book('Jurassic Park', 'Michael Crichton', 'Oliver Johnson', 'Sci-Fi', 15, '10000', '300', 1990, 20);
console.log(book1); 
console.log(book1.toString()); 

const book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 'Ace Books', 'Fantasy', 26, '120000', '1200', 1955, 30);
console.log(book2); 
console.log(book2.toString()); 

book1.title = 'Il signore degli Anelli'; 
//  posso correggere proprietà oggetto; 

//  book1._releaseDate = 

const book3 = new Book('Odissea', 'Omero');
console.log(book2); 
console.log(book2.toString());  

//  magazine.releaseDate = new Date(2022, 0, 15);

const magazine1 = new Magazine('Vogue', 'Anna Wintour', 'w', 'fashion', 10, 156464643548, 15, 256);
console.log(magazine1); 
console.log(magazine1.magToString()); 

const magazine2 = new Magazine('Focus', 'Arnoldo Mondadori Editori', 'm', 'Scienza', 7, 64643548, 10, 200);
console.log(magazine2); 
console.log(magazine2.magToString()); 

const number = 11.03067; 
console.log(Math.round(number)); 

const obs = new TemperatureObservation(30, new Date(2022, 5, 3), [44.325, 14.345]); 

obs.tempF = 90;

console.log(obs.getFTemp); 

console.log(obs.tempF);


