var kingTab = (function (window, $) {
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

    var BG_NUM = 1;

    var textElements = {
        welcome: $('#welcome-message'),
        clock: $('#clock')
    };

    var eventElements = {
        eventTitle: $('#event-title'),
        eventDescription: $('#event-description'),
        eventDialog: $('#event-dialog'),
        eventContainer: $('#event'),
        eventDialogTitle: $('#event-dialog-title'),
        eventDialogImage: $('#event-dialog-image'),
        eventDialogUrl: $('.event-dialog-url'),
        eventDialogProducts: $('#event-dialog-products')
    };

    var baseUrl = 'https://www.onekingslane.com/';

    return {
        init: function () {
            this.currentEvent = EventsManager.getRandomEvent();
            this.setBackgroundImage(this.currentEvent.event_id);
            this.setMessages(textElements);
            this.setEvent(eventElements, this.currentEvent);
            this.createEventHandlers();

            eventElements.eventContainer.on('mouseover', function() {
                eventElements.eventDialog.show();
            });
            eventElements.eventContainer.on('mouseout', function() {
                eventElements.eventDialog.hide();
            });
        },

        refresh: function () {
            BG_NUM++;
            this.init();
        },

        setBackgroundImage: function (eventId) {
            var BG_TEMPLATE = $('<div id="bg'+BG_NUM+'" class="background"></div>');
            $('body').prepend($(BG_TEMPLATE).attr('id','bg'+BG_NUM));
            $('#bg'+BG_NUM).css({'zIndex':(0-BG_NUM),'background-image':'url("' + this.imageUrl(eventId) + '")'});
            $('#bg'+(BG_NUM-1)).fadeOut(function () {
                this.remove();
            });
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
            return "images/" + "SalesEvent_" + eventId + "_Lifestyle_3.jpeg";
        },

        eventUrl: function (eventId) {
            return baseUrl + 'sales/' + eventId;
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
        },

        fullBleedImageUrl: function(eventId) {
            return "https://okl-scene7.insnw.net/is/image/OKL/fullbleed_" + eventId + "?$story-full-bleed$";
        },

        setEvent: function(ems, currentEvent) {
            $(ems.eventTitle).html(currentEvent.event_title);
            $(ems.eventDescription).html(currentEvent.event_description);
            $(ems.eventDialogTitle).html(currentEvent.event_title);
            $(ems.eventDialogImage).attr("src", this.fullBleedImageUrl(this.currentEvent.event_id));
            $(ems.eventDialogUrl).attr("href", this.eventUrl(this.currentEvent.event_id));

            this.setEventProducts(ems, currentEvent);
        },

        setEventProducts: function(ems, currentEvent) {
            var allProducts = "";
            var productTemplate = "<div><a href='#LINK_URL'><img src='#IMG_URL'/></a></div>";

            for (var i=0, len = currentEvent.products.length; i < len; i++) {
                allProducts += productTemplate.replace('#LINK_URL', 'http://onekingslane.com').replace('#IMG_URL', 'https://okl-scene7.insnw.net/is/image/OKL/Product_GOH11516_Image_1?wid=60&hei=41');
            }
            $(ems.eventDialogProducts).html(allProducts);
        },

        createEventHandlers: function () {
            var input = $('#search-input');
            input.keydown(function (event) {
                if (event.keyCode === 13) {
                    window.location = baseUrl + 'search?q=' + input.val().replace(/\s/g, '+');
                }
            });
        }
    };
})(window, $);

$(document).on('ready',function () {
    kingTab.init();

    $('#refresh').on('click',function () {
        kingTab.refresh();
    });
});
