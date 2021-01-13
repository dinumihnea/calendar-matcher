const mergeRanges = require("./scripts/mergeRanges")
const getFreeSlots = require("./scripts/getFreeSlots")
const { isSameDate } = require("./scripts/utils")
const { mockMap1 } = require("./mocks");
const express = require("express")
const bodyParser = require("body-parser");
const app = express()
const port = 3000
const path = require("path");

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/free-slots", (req, res) => {
  const data = new Map();
  const start = new Date(req.body.start);
  const end = new Date(req.body.end);

  req.body.participants.forEach(participant => {
    const events = mockMap1.get(participant).filter(date => isSameDate(date.start, start) && isSameDate(date.end, end));
    if (events.length) {
      data.set(participant, events)
    }
  });

  const mergedRanges = mergeRanges(data)
  const freeSlots = getFreeSlots(mergedRanges, start, end, +req.body.duration)
  res.send(freeSlots)
})

app.listen(port, () => {})
