var mqtt = require('mqtt'), url = require('url');

var brokerUrl = url.parse('mqtt://localhost:4883');
var client = mqtt.createClient(brokerUrl.port, brokerUrl.hostname);

client.on('connect', function() {
  client.subscribe('tempdata', function() {
    client.on('message', function(topic, message, packet) {
      console.log('temp is ' + message);
    });
  })
});
