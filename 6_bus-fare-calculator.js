/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 25;
let passenger = "regular";
let ticketPrice = 800;
if(age<10){
    passenger = "kid"; 
    ticketPrice = 0;
}else if(age>=10 && age<=30){
    passenger = "student"; 
    ticketPrice *= 0.5;
} else if(age>=60){
    passenger = "senior citizen"; 
    ticketPrice -= (ticketPrice * 0.15);
}
console.log("Passenger: " + passenger + "\nTicket Price: " + ticketPrice + "tk");