const mergeRanges = require("./scripts/mergeRanges")
const getFreeSlots = require("./scripts/getFreeSlots")
const { mockMap1 } = require("./mocks");
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const path = require('path');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/free-slots', (req, res) => {
  const data = new Map();
  req.body.participants.forEach(participant => {
    data.set(participant, mockMap1.get(participant))
  });
  const mergedRanges = mergeRanges(data)
  const freeSlots = getFreeSlots(mergedRanges, new Date(req.body.start), new Date(req.body.end), +req.body.duration)
  res.send(freeSlots)
})

app.listen(port, () => {})
