/*
Here is the info we'll need to change for each coffee
pic - image src
alt - alt tag
day - Day of the week
name - Name of coffee
color - Color
desc = Description
*/

let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


if(urlParams.has('day')){//use query string data 
        myDay = urlParams.get('day');
}else{//use date object 
        myDay = myDate.getDay();
}

myDay = parseInt(myDay);

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn +=`
    
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee">
   <strong id="coffee-highlight" class="feature"> ${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>, ${coffee.desc} 
    </p>`;


    return myReturn;
}

switch(myDay){


    case 0:
        today = "Sunday";
        coffee = {
            color:"green",
            name:"caramel latte",
            pic:"images/caramel-latte.jpg",
            alt:"A picture of a caramel latte",
            day:"Sunday",
            desc:`Largebucks has the best caramel lattes and caramel macchiatos!`
        };
    break;

    case 1:
        today = "Monday";
        coffee = {
            color:"pink",
            name:"bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"A picture of a Bubble Tea",
            day:"Monday",
            desc:`Bubble tea is love, Bubble tea is life`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color:"black",
            name:"cold brew",
            pic:"images/cold-brew.jpg",
            alt:"A picture of a cold brew...very dark",
            day:"Tuesday",
            desc:`It doesnt get much colder than this!`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color:"brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"A picture of a drip coffee",
            day:"Wednesday",
            desc:`Sometimes you just need the drip`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color:"cyan",
            name:"Frappaccino",
            pic:"images/frappaccino.jpg",
            alt:"A cold blended drink",
            day:"Thursday",
            desc:`Something for those hot summer days!`
        };

        case 5:
            today = "Friday";
            coffee = {
                color:"gold",
                name:"Mocha",
                pic:"images/mocha.jpg",
                alt:"A chocolate espresso coffee",
                day:"Friday",
                desc:`Goes great with a chocolate crossiant!`
            };

            case 6:
                today = "Saturday";
                coffee = {
                    color:"Neon Orange",
                    name:"pumpkin spice latte",
                    pic:"images/pumpkin-spice-latte.jpg",
                    alt:"A pumpkin espresso blended hot drink",
                    day:"Saturday",
                    desc:`Its okay to be basic. Have your first Pumpkin Spice latte on us!`
                };
            break;
        break;
    break;
}

console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;

//alert(today); 