var BlogManager = (function ($) {
    $.ajax({
        url: "https://www.onekingslane.com/live-love-home/decent/feed/",
        success: function (data) {
            console.log(data);
        }
    });

    return {

    };
})($);