var kingTab = (function (_$) {
    var IMAGE_CONFIG = {
        wid: 1800,
        hei: 2880,
        fmt: 'jpeg',
        qlt: [90, 0],
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

        imageUrlParams: function () {
            var key, params = '';
            for (key in IMAGE_CONFIG) {
                if (IMAGE_CONFIG.hasOwnProperty(key)) {
                    params += key + '=' + this.prepareImageParam(IMAGE_CONFIG[key]);
                }
            }
            return params;
        },

        prepareImageParam: function (value) {
            if (value instanceof Array) {
                return value.join(',');
            }
            return value;
        },

        imageUrl: function (eventId) {
            return 'https://okl2.scene7.com/is/image/OKL/SalesEvent_' + eventId + '_Lifestyle_3?' + this.imageUrlParams();
        },

        eventUrl: function (eventId) {
            return 'https://www.onekingslane.com/sales/' + eventId;
        }
    };
})($);