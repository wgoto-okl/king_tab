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

    var controlElements = {
        magnify: $('#search-wrap').find('img'),
        searchInput: $('#search-input'),
        refresh: $('#refresh')
    };

    var eventElements = {
        eventTitle: $('#event-title'),
        eventDescription: $('#event-description'),
        eventDialog: $('#event-dialog'),
        eventContainer: $('#event'),
        eventDialogTitle: $('#event-dialog-title'),
        eventDialogImage: $('#event-dialog-image'),
        eventDialogUrl: $('.event-dialog-url'),
        eventDialogProducts: $('#event-dialog-products'),
        getThisLookBtn: $('#get-this-look-btn'),
        eventLookContainer: $('.event-look-container')
    };

    var baseUrl = 'https://www.onekingslane.com/',
        scene7BaseUrl = 'https://okl-scene7.insnw.net/is/image/OKL/';

    return {
        init: function () {
            this.loadEvent(EventsManager.getInitialEvent());
            this.setMessages(textElements);
            this.createEventHandlers();
        },

        refresh: function () {
            BG_NUM++;
            this.loadEvent(EventsManager.getNextEvent());
        },

        loadEvent: function (event) {
            this.currentEvent = event;
            this.setBackgroundImage(this.currentEvent.event_id);
            this.setEvent(eventElements, this.currentEvent);
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

        productEventUrl: function(eventId, productId) {
            return baseUrl + 'product/' + eventId + "/" + productId;
        },

        productImageUrl: function(product) {
            if (product.is_vintage) {
                return scene7BaseUrl + product.okl_sku + "?wid=160&hei=109";
            }
            else {
                return scene7BaseUrl + "Product_" + product.okl_sku + "_Image_1?wid=160&hei=109";
            }
        },

        setMessages: function (ems) {
            $(ems.welcome).html('Happy '+DateHelper.getDayName()+'!');
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
            //$(ems.eventDialogImage).attr("src", this.fullBleedImageUrl(this.currentEvent.event_id));
            $(ems.eventDialogUrl).attr("href", this.eventUrl(this.currentEvent.event_id));

            this.setEventProducts(ems, currentEvent);
        },

        setEventProducts: function(ems, currentEvent) {
            var allProducts = "", currentProduct;
            var productTemplate = "<div class='product'><a href='#LINK_URL'><img src='#IMG_URL'/></a></div>";

            for (var i=0, len = currentEvent.products.length; i < len; i++) {
                currentProduct = currentEvent.products[i];
                allProducts += productTemplate.replace('#LINK_URL', this.productEventUrl(currentEvent.event_id, currentProduct.product_id))
                    .replace('#IMG_URL', this.productImageUrl(currentEvent.products[i]));
            }
            $(ems.eventDialogProducts).html(allProducts);
        },

        createEventHandlers: function () {
            var self = this;

            controlElements.searchInput.keydown(function (event) {
                if (event.keyCode === 13) {
                    window.location = baseUrl + 'search?q=' + controlElements.searchInput.val().replace(/\s/g, '+');
                }
            });

            controlElements.magnify.click(function () {
                controlElements.searchInput.addClass('expanded').focus();
                controlElements.searchInput.blur(function () {
                    controlElements.searchInput.removeClass('expanded');
                });
            });

            controlElements.refresh.click(function () {
                self.refresh();
            });

            eventElements.eventContainer.on('mouseenter', function() {
                eventElements.eventDialog.fadeIn(250, 'swing');
            });

            eventElements.eventContainer.on('mouseleave', function() {
                eventElements.eventDialog.fadeOut(250, 'swing');
            });

            eventElements.getThisLookBtn.on('click', function() {
                window.location = self.eventUrl(self.currentEvent.event_id);
            });

            eventElements.eventLookContainer.fadeIn(3000);


        }
    };
})(window, $);

$(document).ready(function () {
    kingTab.init();
});

$(window).load(function () {
    $('#init-overlay').fadeOut(function () {
        this.remove();
    });
});
