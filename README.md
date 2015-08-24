# hilltopperson
hilltop API wrapper

## Installation

```
npm install --save mediasuitenz/hilltopperson#v1.0.1
```

## Usage
### setup module:
```js
var hilltop = require('hilltopperson')
var ht = hilltop('http://path/to/hilltop/api')
```

### use module:

Find all records:
```js
ht.find(function (err, data) {

})
```

Find a subset of records:
```js
ht.find({ siteId: '12345' }, function (err, data) {

})
```

Test for existence:
```js
ht.exists({ siteId: '12345' }, function (err, data) {

})
```

### Hilltop data

Data returned from find looks like:
```json
[
  {
    "tableKey":1,
    "title":"Are Are Creek at Kaituna Tuamarina Track",
    "siteID":"12345",
    "siteIDNew":null
  },
  {
    "tableKey":2,
    "title":"Awatere at Awapiri",
    "siteID":"12346",
    "siteIDNew":null
  },
  {
    "tableKey":3,
    "title":"Branch at Weir Intake",
    "siteID":"12347",
    "siteIDNew":null
  }
]
```

### Querying

The query object can be used to match any of the keys that are returned in the hilltop data
set so you can use, tableKey, title, siteId or siteIDNew as keys. Theres no fuzzy matching
at this time but this could be easily added if needed.
