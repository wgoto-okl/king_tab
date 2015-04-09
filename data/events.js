var EventsManager = (function() {

  var events = [
    {
      event_id: "51749",
      event_title: "Ocean View",
      event_description: "You don't have to live by the sea to soak up its natural beauty. From sweeping seascapes to sculptural accents, these pieces will be a breath of fresh salt air in any space.",
      products: [
        {
          okl_sku: 'GOH11516',
          product_id: '3451194'
        },
        {
          okl_sku: 'DSU10824',
          product_id: '3451194'
        },
        {
          okl_sku: 'GOH11518',
          product_id: '3451194'
        },
        {
          okl_sku: 'NUL11792',
          product_id: '3451194'
        }
      ]
    },
    {
      event_id: "17944",
      event_title: "NESPRESSO",
      event_description: "Nespresso began with a simple but revolutionary idea: Create the perfect cup of espresso. Now you can get that exquisite crema, tantalizing aroma, and full-bodied taste in your own home&mdash;just like a skilled barista. Better yet, with your purchase you'll receive a $100 credit to buy additional Nespresso products. The perfect cup awaits.",
      products: [
        {
          okl_sku: 'GOH11516',
          product_id: '3451194'
        },
        {
          okl_sku: 'DSU10824',
          product_id: '3451194'
        },
        {
          okl_sku: 'GOH11518',
          product_id: '3451194'
        },
        {
          okl_sku: 'NUL11792',
          product_id: '3451194'
        }
      ]
    },

    {
      event_id: "51943",
      event_title: "the TRAVELER",
      event_description: "Get global-chic style without the frequent-flyer miles. This eclectic collection of furnishings, art, and decor will give any space a well-collected, bohemian vibe.",
      products: [
        {
          okl_sku: 'GOH11516',
          product_id: '3451194'
        },
        {
          okl_sku: 'DSU10824',
          product_id: '3451194'
        },
        {
          okl_sku: 'GOH11518',
          product_id: '3451194'
        },
        {
          okl_sku: 'NUL11792',
          product_id: '3451194'
        }
      ]
    },
    {
      event_id: "52227",
      event_title: "PERK UP, Let's get CAFFEINATED!",
      event_description: "Featuring Keurig's revolutionary Rivo machine, these coffee-break essentials are just waiting for some cookies and plenty of conversation..",
      products: [
        {
          okl_sku: 'GOH11516',
          product_id: '3451194'
        },
        {
          okl_sku: 'DSU10824',
          product_id: '3451194'
        },
        {
          okl_sku: 'GOH11518',
          product_id: '3451194'
        },
        {
          okl_sku: 'NUL11792',
          product_id: '3451194'
        }
      ]
    },
    {
      event_id: "51734",
      event_title: "What's not to love about blue and white?",
      event_description: "Both fresh and timeless, it's a pairing that works with any style. Shop this collection of art, furniture, and more to infuse your own space with this power palette.",
      products: [
        {
          okl_sku: 'GOH11516',
          product_id: '3451194'
        },
        {
          okl_sku: 'DSU10824',
          product_id: '3451194'
        },
        {
          okl_sku: 'GOH11518',
          product_id: '3451194'
        },
        {
          okl_sku: 'NUL11792',
          product_id: '3451194'
        }
      ]
    },
    {
      event_id: "49944",
      event_title: "the Glamorous Guest Room",
      event_description: "Bring five-star polish to your guest bedroom with a sumptuous statement-making bed, eye-catching colors, elegant patterned decor, and touches of metallic shine.",
      products: []
    },
    {
      event_id: "49991",
      event_title: "A BRIGHT Entrance",
      event_description: "Spring is the perfect time to rethink and refresh the entryway; after all, it’s everyone’s first and last impression of your home (including yours!).",
      products: []
    },
    {
      event_id: "51778",
      event_title: "The Organized Gardener",
      event_description: "Equal parts luck and preparation, cultivating a garden is no easy task. Luckily, we know how to make it look effortless.",
      products: []
    },
    {
      event_id: "51789",
      event_title: "Well Read",
      event_description: "Brainy is the new sexy, they say. We agree when it comes to decor. A curated, cultured mix of books, art, accents,  and furniture creates a smart, sophisticated mood that oozes intelligence and a bit of intrigue—just like a great mind.",
      products: []
    },
    {
      event_id: "52142",
      event_title: "BRADBURN GALLERY HOME",
      event_description: "From their Atlanta factory, Fran and Bruce Bradburn filter worldly inspiration through their own unique vision to produce a range of decor that’s as eclectic as it is refined.",
      products: []
    },
    {
      event_id: "52693",
      event_title: "Easy Updates",
      event_description: "Looking to add that perfect pop to the patio? These bold pillows and lightweight, beachy blankets, in durable, easy-care fabrics, will do just that with style to spare.",
      products: []
    }
  ];

  return {
      curEvent: null,

      getRandomEvent: function() {
          var randomNumber = Math.floor(Math.random()*events.length);
          if(randomNumber !== this.curEvent) {
              this.curEvent = randomNumber;
              return events[randomNumber];
          } else {
              return this.getRandomEvent();
          }
      },

      getAllEvents: function() {
          return events;
      }

  }

})();

