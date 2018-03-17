const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

let south = [
  { school: "UMBC", votes: 0 },
  { school: "Kansas State", votes: 0 },
  { school: "Kentucky", votes: 0 },
  { school: "Buffalo", votes: 0 },
  { school: "Loyala-Chicago", votes: 0 },
  { school: "Tennessee", votes: 0 },
  { school: "Nevada", votes: 0 },
  { school: "Cincinnati", votes: 0 }
];
let east = [
  { school: "Villanova", votes: 0 },
  { school: "Alabama", votes: 0 },
  { school: "West Virginia", votes: 0 },
  { school: "Marshall", votes: 0 },
  { school: "Florida", votes: 0 },
  { school: "Texas Tech", votes: 0 },
  { school: "Butler", votes: 0 },
  { school: "Purdue", votes: 0 },
];
let west = [
  { school: "Xavier", votes: 0 },
  { school: "Florida State", votes: 0 },
  { school: "OSU", votes: 0 },
  { school: "Gonzaga", votes: 0 },
  { school: "Houston", votes: 0 },
  { school: "Michigan", votes: 0 },
  { school: "Texas A&M", votes: 0 },
  { school: "UNC", votes: 0 },
];
let midwest = [
  { school: "Kansas", votes: 0 },
  { school: "Seton Hall", votes: 0 },
  { school: "Clemson", votes: 0 },
  { school: "Aurburn", votes: 0 },
  { school: "Syracuse", votes: 0 },
  { school: "Michigan State", votes: 0 },
  { school: "URI", votes: 0 },
  { school: "Duke", votes: 0 },
];
let southVotes = 0;
let eastVotes = 0;
let westVotes = 0;
let midwestVotes = 0;

app.get('/api/south', (req, res) => {
  res.send({ region: south, voteCount: southVotes });
});
app.get('/api/east', (req, res) => {
  res.send({ region: east, voteCount: eastVotes });
});
app.get('/api/west', (req, res) => {
  res.send({ region: west, voteCount: westVotes });
});
app.get('/api/midwest', (req, res) => {
  res.send({ region: midwest, voteCount: midwestVotes });
});

app.put('/api/south/:id', (req, res) => {
  let id = req.params.id;
  let southMap = south.map(item => { return item.school; });
  let index = southMap.indexOf(id);
  let winner = south[index];
  winner.votes = winner.votes + 1;
  southVotes = southVotes + 1;
  res.send(winner);
});
app.put('/api/east/:id', (req, res) => {
  let id = req.params.id;
  let eastMap = east.map(item => { return item.school; });
  let index = eastMap.indexOf(id);
  let winner = east[index];
  winner.votes = winner.votes + 1;
  eastVotes = eastVotes + 1;
  res.send(winner);
});
app.put('/api/west/:id', (req, res) => {
  let id = req.params.id;
  let westMap = west.map(item => { return item.school; });
  let index = westMap.indexOf(id);
  let winner = west[index];
  winner.votes = winner.votes + 1;
  westVotes = westVotes + 1;
  res.send(winner);
});
app.put('/api/midwest/:id', (req, res) => {
  let id = req.params.id;
  let midwestMap = midwest.map(item => { return item.school; });
  let index = midwestMap.indexOf(id);
  let winner = midwest[index];
  winner.votes = winner.votes + 1;
  midwestVotes = midwestVotes + 1;
  res.send(winner);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
