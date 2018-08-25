var getProductDetails = function(id) {
    console.log("in get details");
    $.ajax({
        url: api_endpoint + "/products/"+id
    }).then(function(data) {
        $('productdetails').empty();
        $('productdetails').append("Product name: ").append(data.name).append("<br>");
        $('productdetails').append("Product description: ").append(data.description);
    });

};
