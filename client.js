const soap = require('soap');
const url = "http://localhost:3030/bmicalculator?wsdl";
const args = { weight: 120, height: 2 };

soap.createClient(url, function (err, client) {
    if (err)
        console.error(err);
    else {
        // console.log(client.calculateBMI());
        client.calculateBMI(args, function (err, response) {
            if (err)
                console.error(err);
            else {
                console.log(response);
            }
        })
    }
});