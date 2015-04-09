var kingTab = (function (_$) {
    var IMAGE_CONFIG = {
        wid: 1656,
        hei: 1128,
        fmt: 'jpeg',
        qlt: [90, 0],
        op_sharpen: 0,
        resMode: 'sharp2',
        op_usm: [1, 1, 6, 0],
        iccEmbed: 0,
        printRes: 72,
        fit: ['fit', 1]
    };

    var textElements = {
        welcome: $('#welcome-message'),
        clock: $('#clock')
    };

    return {
        init: function () {
            this.setBackgroundImage(EventsManager.getRandomEvent().event_id);
            this.setMessages(textElements);
        },

        setBackgroundImage: function (eventId) {
            $('html').css('background-image','url("' + this.imageUrl(eventId) + '")');
        },

        imageUrlParams: function () {
            var key, params = '';
            for (key in IMAGE_CONFIG) {
                if (IMAGE_CONFIG.hasOwnProperty(key)) {
                    params += this.prepareImageParam(key);
                }
            }
            return params;
        },

        prepareImageParam: function (key) {
            return key + '=' + this.prepareImageParamValue(IMAGE_CONFIG[key]) + '&';

        },

        prepareImageParamValue: function (value) {
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
        },

        setMessages: function (ems) {
            $(ems.welcome).html('Good '+DateHelper.getTimeOfTheDayGreeting());
            this.setTime(ems.clock);
        },

        setTime: function (clock) {
            var callee = arguments.callee;
            clock.html(DateHelper.getCurrentTime());
            requestAnimationFrame(function () {
                callee(clock);
            });
        }
    };
})($);

$(document).on('ready',function () {
    kingTab.init();
});
