/****************************************
 Example showing API Signature calculation
 for an API call to the /v2/current/{station-id}
 API endpoint
 ****************************************/

var crypto = require("crypto");

/*
Here is the list of parameters we will use for this example.
*/
var parameters = {
    "api-key": "crcanc34djha7phztdzbzxp1eoto599c",
    "api-secret": "hoxq8r61pp5pdv9cv60ciwygdnfhef10",
    "station-id": "89353", // this is an example station ID, you need to replace it with your real station ID which you can retrieve by making a call to the /stations API endpoint
    "t": Math.floor(Date.now() / 1000)
};

/*
Now we will compute the API Signature.
The signature process uses HMAC SHA-256 hashing and we will
use the API Secret as the hash secret key. That means that
right before we calculate the API Signature we will need to
remove the API Secret from the list of parameters given to
the hashing algorithm.
*/

/*
Note that since JavaScript object properties do not support
sorting we will create an array of parameter names from the
parameters object and we will then sort the parameter names
array.
*/
var parameterNamesSorted = [];
for (var parameterName in parameters) {
    parameterNamesSorted.push(parameterName);
}
parameterNamesSorted.sort();

/*
Let's take a moment to print out all parameters for debugging
and educational purposes.
*/
for (var parameterName of parameterNamesSorted) {
    console.log("Parameter name: \"" + parameterName + "\" has value \"" + parameters[parameterName] + "\"");
}

/*
Save and remove the API Secret from the set of parameters and
the parameter name array.
*/
var apiSecret = parameters["api-secret"];
delete parameters["api-secret"];
parameterNamesSorted.splice(parameterNamesSorted.indexOf("api-secret"), 1);

/*
Iterate over the remaining sorted parameters and concatenate
the parameter names and values into a single string.
*/
var data = "";
for (var parameterName of parameterNamesSorted) {
    data = data + parameterName + parameters[parameterName];
}

/*
Let's print out the data we are going to hash.
*/
console.log("Data string to hash is: \"" + data + "\"");

/*
Calculate the HMAC SHA-256 hash that will be used as the API Signature.
*/
var hmac = crypto.createHmac("sha256", apiSecret);
hmac.update(data);
var apiSignature = hmac.digest("hex");

/*
Let's see what the final API Signature looks like.
*/
console.log("API Signature is: \"" + apiSignature + "\"");

/*
Now that the API Signature is calculated let's see what the final
v2 API URL would look like for this scenario.
*/
console.log("v2 API URL: https://api.weatherlink.com/v2/current/" + parameters["station-id"] +
    "?api-key=" + parameters["api-key"] +
    "&api-signature=" + apiSignature +
    "&t=" + parameters["t"]);

let baseURL = new URL(`https://api.weatherlink.com/v2/current/" + parameters["station-id"] +
"?api-key=" + parameters["api-key"] +
"&api-signature=" + apiSignature +
"&t=" + parameters["t"])`);

/*function sendInfo() {
    var obj = JSON.parse(baseURL);
    return obj;
}
sendInfo();*/
//var http = require('http');
//http.get(baseURL);
module.exports = baseURL;