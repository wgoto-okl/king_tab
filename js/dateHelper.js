var DateHelper = (function() {
    var DAY_NAMES = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];


    return {
        getTimeOfTheDayGreeting: function() {
            var hour = moment().hour();

            if (hour < 12) {
                return "Morning";
            }

            if (hour < 19) {
                return "Afternoon";
            }

            if (hour >= 19) {
                return "Evening";
            }
        },

        getDayName: function () {
            var d = new Date();
            return DAY_NAMES[d.getDay()];
        },

        getCurrentTime: function() {
            return moment().format("h:mma");
        }
    }

})();

