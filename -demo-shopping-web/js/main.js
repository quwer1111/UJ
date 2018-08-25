(function($) {

    var app = $.sammy('#app', function() {
        this.use('Template');

        this.get('#/productslist/', function(context) {
            context.app.swap('');
            context.render('templates/products-list.template', {})
                .appendTo(context.$element()).then(function(){
                    initProductList()
            });

        });

        this.get('#/cart/', function(context) {
            context.app.swap('');
            context.render('templates/cart.template', {})
                .appendTo(context.$element()).then(function(){
                getCartProducts()
            });

        });

        this.get('#/', function(context) {
        });

        this.get('#/product/:id', function(context) {
            context.app.swap('');
            console.log(context.params['id']);
            context.render('templates/product-details.template', {})
                .appendTo(context.$element()).then(function(){
                    getProductDetails(context.params['id']);
            });
        });


        // this.before('.*', function() {
        //
        //     var hash = document.location.hash;
        //     $("nav").find("a").removeClass("current");
        //     $("nav").find("a[href='"+hash+"']").addClass("current");
        // });

    });

    $(function() {
        app.run('#/productslist/');
    });

})(jQuery);