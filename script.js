var price , crust_price, topping_price ;
let total = 0;
function Getpizza(size,crust,topping, total ){
  this.size = size;
  this.crust = crust;
  this.toppings = this.toppings;
  this.total = total;
}
// submit button
$(document).ready(function() {
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping =$("#toppings option:selected").val();
   
}