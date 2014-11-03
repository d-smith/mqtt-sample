Very basic sample to show how to run the mosca broker, with
simple publish and subscribe events.

This sample also includes a configuration file (aws-config) for running
Mosca against an Elasticache Redis backend.

To run on an EC2 instance, install node and mosca:

    sudo apt-get install git
    curl -sL https://deb.nodesource.com/setup | sudo bash -
    sudo apt-get install nodejs
    sudo npm install mosca bunyan -g

The run mosca with the aws config:

    mosca --config aws-config

Note that your elasticache instance will need to allow ingress on its port
from the VPC in which you launch your server. An easy way to validate
connectivity is to install the redis-cli and connect to your Elasticache
instance.

    sudo apt-get install redis-tools
    redis-cli -h your.endpoint.cache.amazonaws.com -p 6379

    
