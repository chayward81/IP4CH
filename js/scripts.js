function Pizza(sizeCost, meatCost, vegetableCost, sauceCost) {
  this.sizeCost = sizeCost;
  this.meatCost = meatCost;
  this.vegetableCost = vegetableCost;
  this.sauceCost = sauceCost;
}

Pizza.prototype.pizzaQuote = function () {

}

$(document).ready(function() {
  $("form#menu").submit(function(event) {
    event.preventDefault();
    var ifSmall = $("input#sm").val();
    var ifMedium = $("input#md").val();
    var ifLarge = $("input#lg").val();
    var meatChoice = $("input.meat").val();
    var vegChoice = $("input.vegetable").val();
    var sauceChoice = $("input.sauce").val();

    var pizzaOrder = new Pizza(sizeChoice, meatChoice, vegChoice, ifSmall, ifMedium, ifLarge) {
      
    }



  });
});
