define({ "api": [
  {
    "type": "get",
    "url": "/results/",
    "title": "",
    "name": "Results",
    "group": "AbejaTest",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>of the Mongo Document</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Sex",
            "description": "<p>of the Interviewee</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "Hungry",
            "description": "<ul> <li>representative value of Hunger (1-5)</li> </ul> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "Tired",
            "description": "<ul> <li>representative value of Tiredness (1-5)</li> </ul> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "Sleepy",
            "description": "<ul> <li>representative value of Sleepiness (1-5)</li> </ul> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "DateInserted",
            "description": "<ul> <li>UTC date inserted</li> </ul> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/routes/api.js",
    "groupTitle": "AbejaTest"
  }
] });