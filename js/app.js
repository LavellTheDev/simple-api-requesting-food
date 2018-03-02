$.ajax({
  url:"http://world.openfoodfacts.org/api/v0/product/737628064502.json",
  success: function(r){
    $("ol").append("<li>" + r.product.traces + "</li>");
  },
  error: function(er){

  }
});
