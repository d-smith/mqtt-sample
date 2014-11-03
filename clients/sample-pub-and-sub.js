var mqtt = require('mqtt'), url = require('url');

var mqtt_url = url.parse('mqtt://localhost:4883');

var client = mqtt.createClient(mqtt_url.port, mqtt_url.hostname);

client.on('connect', function() {
  client.subscribe('hello/world', function() {
    client.on('message', function(topic, message, packet) {
      console.log('receieved ' + message + ' on ' + topic);
    });
  });

  client.publish('hello/world', 'my message', function() {
    console.log('message published');
    client.end();
  });
});
