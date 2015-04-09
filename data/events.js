var EventsManager = (function() {

  var events = [
    {
      event_id: "51749",
      event_title: "Ocean View",
      event_detail: "You don’t have to live by the sea to soak up its natural beauty. From sweeping seascapes to sculptural accents, these pieces will be a breath of fresh salt air in any space."
    },

    {
      event_id: "17944",
      event_title: "NESPRESSO",
      event_detail: "Nespresso began with a simple but revolutionary idea: Create the perfect cup of espresso. Now you can get that exquisite crema, tantalizing aroma, and full-bodied taste in your own home—just like a skilled barista. Better yet, with your purchase you’ll receive a $100 credit to buy additional Nespresso products. The perfect cup awaits."
    },

    {
      event_id: "51943",
      event_title: "the TRAVELER",
      event_detail: "Get global-chic style without the frequent-flyer miles. This eclectic collection of furnishings, art, and decor will give any space a well-collected, bohemian vibe."
    },
    {
      event_id: "52227",
      event_title: "PERK UP, Let’s get CAFFEINATED!",
      event_detail: "Featuring Keurig’s revolutionary Rivo machine, these coffee-break essentials are just waiting for some cookies and plenty of conversation.."
    }


  ];

  return {
    getRandomEvent: function() {
      var randomNumber = Math.floor(Math.random()*events.length);
      return events[randomNumber];
    },

    getAllEvents: function() {
      return events;
    },

  }

})();

