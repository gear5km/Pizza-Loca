function PizzaLoca(){

function pizzaSelector(){
    var pizzaObject=document.getElementById("pizza1").value;
    var pizzaName;
    alert(pizzaObject);
    if (pizzaObject == 1)
        {
            pizzaName="chicken";
        }
    return pizzaName;
}

var pizzaObj = pizzaSelector();
alert (pizzaObj);

var object1 = document.getElementById("object1"); // Find document <head>
var s = document.createElement("h3"); // Create a <script> element
s.textContent = pizzaObj; // Set its src attribute
object1.appendChild(s); // Insert the <script> into head

}

/* var pizzaSelection= ["1","2","3","4","5","6","7","8"]

pizzaSelection["1"]=chicken;

*/

/*
function pizzaToppings(pizzaName, price){
    this.name=name;
    this.price=price;
}

var chicken= new pizzaToppings ("chicken", 500);
var pepperoni= new pizzaToppings ("pepperoni", 400);
var hawaian= new pizzaToppings ("hawaian", 450);
var beefOnion = new pizzaToppings ("beefOnion", 500);
var steakCheese = new pizzaToppings ("steakCheese", 550);
var oliveMushroom = new pizzaToppings ("oliveMushroom", 400);
var somethingMeaty= new pizzaToppings ("somethingMeaty", 450);
var fetuchini= new pizzaToppings ("fetuchini", 550);


var pizzaSelection= ["1","2","3","4","5","6","7","8"]

pizzaSelection["1"]=chicken;


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

*/

