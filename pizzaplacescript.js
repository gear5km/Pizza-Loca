
function pizzaToppings(toppings, price){
    this.toppings=toppings;
    this.price=price;
}

var chicken= new pizzaToppings (chicken, 500);
var pepperoni= new pizzaToppings (pepperoni, 400);
var hawaian= new pizzaToppings (hawaian, 450);




function pizzaSize (size, price) {
    this.size=size;
    this.price=price;
}

var small= new pizzaSize (small, 100);
var medium= new pizzaSize (medium, 200);
var large= new pizzaSize (large, 300);

function pizzaCrust (type, price) {
    this.type=type;
    this.price=price;
}

var crispy= new pizzaCrust (crispy, 50);
var stuffed = new pizzaCrust (stuffed, 80);
var glutenFree = new pizzaCrust (glutenFree, 100);


var PizzaOrder =["toppings, size, crust"]


