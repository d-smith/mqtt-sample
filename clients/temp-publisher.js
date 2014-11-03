var mqtt = require('mqtt'), url = require('url');

var brokerUrl = url.parse('mqtt://localhost:4883');
var client = mqtt.createClient(brokerUrl.port, brokerUrl.hostname);

function randomTemp (low, high) {
    return Math.random() * (high - low + 1) + low;
}

var startSensorPoll = function() {
  console.log('sensor poll starting');
  setInterval(function() {
    console.log('read temperature');
    client.publish('tempdata', randomTemp(60,65).toString());
  }, 1000);
};

client.on('connect', function() {
  startSensorPoll();
});
