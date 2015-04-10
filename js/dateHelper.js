var DateHelper = (function() {



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

        getCurrentTime: function() {
            return moment().format("h:mma");
        }
    }

})();

