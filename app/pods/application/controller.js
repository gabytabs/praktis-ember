import Ember from 'ember';
var ApplicationController;

ApplicationController = Ember.Controller.extend({
  integers: [1, 2, 3, 4, 5],
  models: [
    {
      "id": "5956c629ffd7ce46909011bb",
      "name": "300x250 Enough Said"
    }, {
      "id": "5956c629ffd7ce4691900f55",
      "name": "320x50 Get Your Board in Here"
    }, {
      "id": "5956c629ffd7ce4692901b12",
      "name": "320x50 Enough Said"
    }, {
      "id": "5956c629ffd7ce4693903766",
      "name": "320x50 What a Shame"
    }, {
      "id": "5956c629ffd7ce625b905911",
      "name": "300x250 What A Shame"
    }, {
      "id": "5956c629ffd7ce625b905124",
      "name": "728x90 Enough Said"
    }, {
      "id": "5956c629ffd7ce4693903744",
      "name": "300x250 Get Your Board in Here"
    }, {
      "id": "5956c62affd7ce4691900f88",
      "name": "728x90 Get Your Board in Here"
    }, {
      "id": "5956c62affd7ce625b905911",
      "name": "728x90 What a Shame"
    }
  ],
  results: [
    {
      "count": 23302,

      "client_fees": {
         "platform": 4643.309788799646,
         "banner": 4660.400000000266
      },

      "cost": 23216.54894400032,
      "value": "total",
      "total_cost": 32520.258732798276,
      "internal_fees": {},

      "events": {
         "win": 23302.0,
         "pixel": 140.0,
         "click": 16.0
      },

      "placements": {
        "5956c629ffd7ce46909011bb": {
          "count": 3833,
          "client_fees": {
            "platform": 763.7684953999427,
            "banner": 766.6000000000373
          },
          "cost": 3818.8424769998683,
          "total_cost": 5349.210972399822,
          "internal_fees": {},
          "events": {
            "win": 3833.0,
            "pixel": 27.0,
            "click": 4.0,
            "word": 4.2
          }
        },
        "5956c629ffd7ce4691900f55": {
          "count": 6160,
          "client_fees": {
            "platform": 1227.4556751998864,
            "banner": 1232.000000000143
          },
          "cost": 6137.278376000485,
          "total_cost": 8596.734051199082,
          "internal_fees": {},
          "events": {
            "win": 6160.0,
            "pixel": 25.0,
            "click": 3.0
          }
        },
        "5956c629ffd7ce4692901b12": {
          "count": 2,
          "client_fees": {
            "platform": 0.399966,
            "banner": 0.4
          },
          "cost": 1.99983,
          "total_cost": 2.7997959999999997,
          "internal_fees": {},
          "events": {
            "win": 2.0
          }
        },
        "5956c629ffd7ce4693903766": {
          "count": 4,
          "client_fees": {
            "platform": 0.7839334,
            "banner": 0.8
          },
          "cost": 3.919667,
          "total_cost": 5.5036004,
          "internal_fees": {},
          "events": {
            "win": 4.0
          }
        },
        "5956c629ffd7ce625b905911": {
          "count": 4634,
          "client_fees": {
            "platform": 923.173036199923,
            "banner": 926.8000000000737
          },
          "cost": 4615.865181000006,
          "total_cost": 6465.838217199571,
          "internal_fees": {},
          "events": {
            "win": 4634.0,
            "pixel": 41.0,
            "click": 3.0,
          }
        },
        "5956c629ffd7ce625b905124": {
          "count": 2517,
          "client_fees": {
            "platform": 501.795528799973,
            "banner": 503.39999999997997
          },
          "cost": 2508.9776440000323,
          "total_cost": 3514.173172800054,
          "internal_fees": {},
          "events": {
            "win": 2517.0,
            "pixel": 15.0,
            "click": 2.0,
          }
        },
        "5956c629ffd7ce4693903744": {
          "count": 6,
          "client_fees": {
            "platform": 1.199898,
            "banner": 1.2
          },
          "cost": 5.99949,
          "total_cost": 8.399388,
          "internal_fees": {},
          "events": {
            "win": 6.0,
            "word": 3.2
          }
        },
        "5956c62affd7ce4691900f88": {
          "count": 4062,
          "client_fees": {
            "platform": 809.358560199937,
            "banner": 812.4000000000477
          },
          "cost": 4046.792800999842,
          "total_cost": 5668.55136119975,
          "internal_fees": {},
          "events": {
            "win": 4062.0,
            "pixel": 21.0,
            "click": 3.0
          }
        },
        "5956c62affd7ce625b905911": {
          "count": 2084,
          "client_fees": {
            "platform": 415.37469559998385,
            "banner": 416.7999999999849
          },
          "cost": 2076.8734780000864,
          "total_cost": 2909.0481736000006,
          "internal_fees": {},
          "events": {
            "win": 2084.0,
            "pixel": 11.0,
            "click": 1.0
          }
        }
      }
    }
  ]
});

export default ApplicationController;