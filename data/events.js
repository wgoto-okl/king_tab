var EventsManager = (function() {

  var events = [
    {
      event_id: "51749",
      event_title: "Ocean View",
      event_description: "You don't have to live by the sea to soak up its natural beauty. From sweeping seascapes to sculptural accents, these pieces will be a breath of fresh salt air in any space.",
      products: [
        {
          okl_sku: 'FMV00646',
          product_id: '2670120'
        },
        {
          okl_sku: 'PHI10440',
          product_id: '2321619'
        },
        {
          okl_sku: 'PHI10244',
          product_id: '1634182'
        },
        {
          okl_sku: 'NER22110',
          product_id: '3563502'
        }
      ]
    },
    {
      event_id: "51943",
      event_title: "the TRAVELER",
      event_description: "Get global-chic style without the frequent-flyer miles. This eclectic collection of furnishings, art, and decor will give any space a well-collected, bohemian vibe.",
      products: [
        {
          okl_sku: 'TWO10384',
          product_id: '3575385'
        },
        {
          okl_sku: 'AAM10001',
          product_id: '583532'
        },
        {
          okl_sku: 'HNF10023',
          product_id: '3664052'
        },
        {
          okl_sku: 'IRP10550',
          product_id: '3679986'
        }
      ]
    },
    {
      event_id: "52227",
      event_title: "PERK UP, Let's get CAFFEINATED!",
      event_description: "Featuring Keurig's revolutionary Rivo machine, these coffee-break essentials are just waiting for some cookies and plenty of conversation..",
      products: [
        {
          okl_sku: 'ODA10202',
          product_id: '1946610'
        },
        {
          okl_sku: 'BDM10146',
          product_id: '3264375'
        },
        {
          okl_sku: 'HCY10020',
          product_id: '2211246'
        },
        {
          okl_sku: 'POL10574',
          product_id: '3297504'
        }
      ]
    },
    {
      event_id: "51734",
      event_title: "What's not to love about blue and white?",
      event_description: "Both fresh and timeless, it's a pairing that works with any style. Shop this collection of art, furniture, and more to infuse your own space with this power palette.",
      products: [
        {
          okl_sku: 'TEF10611',
          product_id: '1621318'
        },
        {
          okl_sku: 'QJU10029',
          product_id: '2334641'
        },
        {
          okl_sku: 'LOA01280',
          product_id: '27777'
        },
        {
          okl_sku: 'NER21736',
          product_id: '3759913'
        }
      ]
    },
    {
      event_id: "49944",
      event_title: "the Glamorous Guest Room",
      event_description: "Bring five-star polish to your guest bedroom with a sumptuous statement-making bed, eye-catching colors, elegant patterned decor, and touches of metallic shine.",
      products: [
        {
          okl_sku: 'SFM21130',
          product_id: '3399833'
        },
        {
          okl_sku: 'LTR10051',
          product_id: '1440676'
        },
        {
          okl_sku: 'EVN11178',
          product_id: '787818'
        },
        {
          okl_sku: 'LKI10243',
          product_id: '1686554'
        }
      ]
    },
    {
      event_id: "49991",
      event_title: "A BRIGHT Entrance",
      event_description: "Spring is the perfect time to rethink and refresh the entryway; after all, it’s everyone’s first and last impression of your home (including yours!).",
      products: [
        {
          okl_sku: 'vmf_vendor_IVG_3422007_1420232511765_666085',
          product_id: '3422007',
          is_vintage: true
        },
        {
          okl_sku: 'vmf_vendor_DXX_1557514_1374626097370_853715',
          product_id: '1557514',
          is_vintage: true
        },
        {
          okl_sku: 'vmf_vendor_SWP_3047577_1412455248372_628042',
          product_id: '3047577',
          is_vintage: true
        },
        {
          okl_sku: 'vmf_vendor_LRD_3150369_1414983237958_270735',
          product_id: '3150369',
          is_vintage: true
        }
      ]
    },
    {
      event_id: "51778",
      event_title: "The Organized Gardener",
      event_description: "Equal parts luck and preparation, cultivating a garden is no easy task. Luckily, we know how to make it look effortless.",
      products: [
        {
          okl_sku: 'ESS10138',
          product_id: '637728'
        },
        {
          okl_sku: 'UFU10035',
          product_id: '2486111'
        },
        {
          okl_sku: 'ESS11072',
          product_id: '1384894'
        },
        {
          okl_sku: 'ABR10697',
          product_id: '2202983'
        }
      ]
    },
    {
      event_id: "51789",
      event_title: "Well Read",
      event_description: "Brainy is the new sexy, they say. We agree when it comes to decor. A curated, cultured mix of books, art, accents,  and furniture creates a smart, sophisticated mood that oozes intelligence and a bit of intrigue—just like a great mind.",
      products: [
        {
          okl_sku: 'GKQ10321',
          product_id: '3206660'
        },
        {
          okl_sku: 'UMT10007',
          product_id: '3544058'
        },
        {
          okl_sku: 'vmf_vendor_LKR_3796950_1427748646971_703365',
          product_id: '3796950',
          is_vintage: true
        },
        {
          okl_sku: 'DKJ10859',
          product_id: '3541408'
        }
      ]
    },
    {
      event_id: "52142",
      event_title: "BRADBURN GALLERY HOME",
      event_description: "From their Atlanta factory, Fran and Bruce Bradburn filter worldly inspiration through their own unique vision to produce a range of decor that’s as eclectic as it is refined.",
      products: [
        {
          okl_sku: 'TEF10287',
          product_id: '1319273'
        },
        {
          okl_sku: 'TEF10970',
          product_id: '2544785'
        },
        {
          okl_sku: 'TEF10913',
          product_id: '2175307'
        },
        {
          okl_sku: 'TEF10609',
          product_id: '1621316'
        }
      ]
    },
    {
      event_id: "52693",
      event_title: "Easy Updates",
      event_description: "Looking to add that perfect pop to the patio? These bold pillows and lightweight, beachy blankets, in durable, easy-care fabrics, will do just that with style to spare.",
      products: [
        {
          okl_sku: 'FUX10030',
          product_id: '2323812'
        },
        {
          okl_sku: 'JIT12080',
          product_id: '2255702'
        },
        {
          okl_sku: 'FUX10057',
          product_id: '2323837'
        },
        {
          okl_sku: 'FUX10156',
          product_id: '2927339'
        }
      ]
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
      },

      getAllEventIds: function () {
          return events.map(function (event) {
              return event.event_id;
          });
      }
  }

})();

