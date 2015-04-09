var kingTab = (function (_$) {
    var IMAGE_CONFIG = {
        wid: 1800,
        hei: 2880,
        fmt: 'jpeg',
        qlt: [90,0],
        op_sharpen: 0,
        resMode: 'sharp2',
        op_usm: [1, 1, 6, 0],
        iccEmbed: 0,
        printRes: 72,
        fit: ['fit', 1]
    };

    return {
        init: function () {

        },

        setBackgroundImage: function (eventId) {

        },

        imageUrl: function (eventId) {
            var key,
                url = 'https://okl2.scene7.com/is/image/OKL/SalesEvent_' + eventId + '_Lifestyle_3?';

            for (key in IMAGE_CONFIG) {
                url += key + '=' + IMAGE_CONFIG[key];
            }

            return url;
        },

        eventUrl: function (eventId) {
            
        }
    };
})($);