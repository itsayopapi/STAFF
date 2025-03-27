$(function() {
    // Fetch the config.json file
    $.getJSON("./config.json").then(function(config) {
        // Update the href attributes of anchor tags
        $("a[data-shop-href]").each(function(i, e) {
            var url = config.shopUrl;
            e.href = url + $(e).data('shop-href');
        });

        // Update the action attributes of forms
        $("form[data-shop-action]").each(function(i, e) {
            var url = config.shopUrl;
            e.action = url + $(e).data('shop-action');
        });
    });
});
