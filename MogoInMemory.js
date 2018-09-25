const MongoInMemory = require('mongo-in-memory');
 
var port = 27017;
var mongoServerInstance = new MongoInMemory(port); //DEFAULT PORT is 27017
 
mongoServerInstance.start((error, config) => {
 
    if (error) {
        console.error(error);
    } else {
 
        //callback when server has started successfully
 
        console.log("HOST " + config.host);
        console.log("PORT " + config.port);
 
        var mongouri = mongoServerInstance.getMongouri("myDatabaseName");
 
    }
 
});
 
