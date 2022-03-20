function Pizza (size, crust, toppings) {
  this.size = size;
  this.crust =crust;
  this.toppings =toppings;
  this.quantity =quantity;
}
// Calculate price of pizza by size
Pizza.prototype.pSize = function () {
  if (this.size === "Small") {
    return 600;
  } else if (this.size === "medium") {
    return 900;
  } else if (this.size === "Large") {
    return 1200;
  } else
    alert("Please select your prefered size");
}
// Calculate price of crust 
Pizza.prototype.pCrust= function () {
  if (this.crust === "Crispy") {
    return 300;
  } else if (this.size === "Stuffed") {
    return 400;
  } else if (this.size === "Gluten free") {
    return 500;
  } else
    alert("Please select your prefered crust type");
}
// Calculate the price of toppings
Pizza.prototype.calcToppings = function () {
  if (this.toppings.length != 0) {
    var toppingCost = this.toppings.length * 200;
    return toppingCost;
  } else
    alert("select Fav Topping(s)")
}