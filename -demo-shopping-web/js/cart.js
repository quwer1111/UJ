var cart = new Map();

var addToCart = function (product) {
    cart.set(product.id, product.name);
};
var submitCart = function (obj) {
    var keys = Array.from( cart.keys() );
    console.log(keys)
    var json = JSON.stringify({'listOfProducts': keys});

    $.ajax({
        url: api_endpoint + "/orders",
        type:"POST",
        data:json,
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(){
            alert("Order is send")
            cart.clear();
            location.reload();
        }
    })


};

var getCartProducts = function () {
    cart.forEach(function (value, key, mapObj) {
        $('cart').append("Product name: ").append(value)
            .append("<br>");

    });
    $("#sendOrderButton").click(submitCart);
};
