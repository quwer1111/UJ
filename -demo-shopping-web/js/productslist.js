var initProductList = function() {
    var table = $('#productList').DataTable({
        ajax: {
            url: api_endpoint + '/products',
            dataSrc: '_embedded.products'
        },
        columns: [
            { data: "name",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<a href='#/product/" + oData.id + "'>" + oData.name + "</a>");
                }
            },
            { data: null,
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<button>Add to Cart</button>");
                },
                className: "dtCenter"
            },
        ]
    });

    $('#productList tbody').on( 'click', 'button', function () {
        var data = table.row( $(this).parents('tr') ).data();
        addToCart(data);
    } );
};
