$(function () {
  $('#submit').click(function() {
    var size= $("#size option:selected").val();
    var toppings = $("#toppings option:selected").val();
    var crust= $("#crust option:selected").val();
    var total = parseInt(size) + parseInt(toppings) + parseInt(crust);
    
    console.log(total);
    $("#totalprice").text("Your total price is: Ksh "+ total)
    $("#size").html($(".size option:selected").text() + " - " + size);
    $("#toppings").html($(".toppings option:selected").text() + " - " + toppings);
    $("#crust").html($(".crust option:selected").text() + " - " + crust);
    $("#total").html(total);

    function pizza(size, toppings, crust, total, orderNo) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
    }
    $('#delivery').click(function() {
      var delivery = 200
      $("#delivery1").text("The delivery fee is Ksh.200.")
      console.log("hello");
    });
    $('#checkout').click(function() {
      var finalPrice = total + 200
      $("#finalprice").text("The delivery fee is Ksh.200. Your final price plus delivery is: Ksh "+ finalPrice)
      console.log("hello");
    });
  })
});
