
let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
 
 
if(urlParams.has('day')){
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
 
}else{
    myDay = myDate.getDay();
 
}
 
 
function coffeeTemplate(coffee){
    let myReturn = "";
 
    myReturn = `
    <p>
    <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee">
    <strong id="coffee-higlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily special is <strong>${coffee.name}</strong>, ${coffee.desc}
 
    </p>
        `;
        
    return myReturn;
}
 
switch(myDay){
 
    case 1:
        today = "Monday";
 
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of Bubble Tea",
            day: "Monday",
            desc: 'I love Bubble Tea'
        };
 
    break;    
 
    case 2:
        today = "Tuesday";
 
        coffee = {
            color: "orange",
            name: "Flat White",
            pic: "images/Flat-White.jpg",
            alt: "A pic of Flat White",
            day: "Tuesday",
            desc: 'If its not flat white, then its not right'
        };
 
    break;   
 
 
    case 3:
        today = "Wednesday";
 
        coffee = {
            color: "brown",
            name: "drip",
            pic: "images/drip.jpg",
            alt: "A pic of drip coffee",
            day: "Wednesday",
            desc: 'Some days you just need the drip!'
        };
 
    break;
 
    case 4:
        today = "Thursday";
 
        coffee = {
            color: "red",
            name: "Cortado",
            pic: "images/Cortado.png",
            alt: "A pic of Cortado",
            day: "Thursday",
            desc: 'I love me some Cortado'
 
        };
 
    break;
 
 
    case 5:
        today = "Friday";
    
        coffee = {
            color: "green",
            name: "Cappuccino",
            pic: "images/Cappuccino.jpg",
            alt: "A pic of Cappuccino",
            day: "Friday",
            desc: `With this cappuccino, i can take on a rhino`
           
         };
 
    break;     
 
 
    case 6:
        today = "Saturday";
 
        coffee = {
            color: "Blue",
            name: "Affogato",
            pic: "images/Affogato.jpg",
            alt: "A pic of Affogato",
            day: "Saturday",
            desc: `Which will wake me up? mi gato? Or my Affogato?`
 
        
        };
 
    break;
    
    
    case 0:
        today = "Sunday";
 
        coffee = {
            color: "purple",
            name: "Milk Tea",
            pic: "images/Milk-Tea.jpg",
            alt: "A pic of Milk Tea",
            day: "Sunday",
            desc: `Ahhhh some Milk Tea with some Kimchi would be nice...`
        };
 
    break;    
 
 
 
}
 
 
console.log(coffee);
 
document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
 
document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;
 
document.getElementById("coffee-highlight").style.color = coffee.color;
 
 
