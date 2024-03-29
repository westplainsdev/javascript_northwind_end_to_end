// SINGLE PAGE APPLICATION API ENDPOINTS
var nodemailer = require("nodemailer"); //https://github.com/andris9/Nodemailer
var stores = require('./stores');

module.exports = {
    register: function(app) {

        app.get('/api/shop/products', function (req, res ){

            var productList = [
                { sku: 'A12B', brand: 'House Brand', description: 'Rice and Beans', price: 1.99},
                { sku: 'B23C', brand: 'Best Choice', description: 'Honey Nut Oatmeal', price: 2.49},
                { sku: 'C34D', brand: 'Value Brand', description: 'Real meat by product hot dogs', price: 5.29},
                { sku: 'D45F', brand: 'Cheap as Dirt', description: 'Strawberry Soda 6 Pack', price: 4.59}
            ];

            res.send(productList);

        });

        app.get('/api/address/people', function (req, res){

            var personList =  [
                {firstname: 'Bob', lastname: 'Jones', citystate: 'Seattle, WA'},
                {firstname: 'Sandy', lastname: 'Roberts', citystate: 'Portland, OR'},
                {firstname: 'Larry', lastname: 'Walker', citystate: 'San Francisco, CA'},
                {firstname: 'Bobby', lastname: 'Rydel', citystate: 'Chicago, IL'},
                {firstname: 'Rebecca', lastname: 'Teague', citystate: 'Memphis, TN'},
                {firstname: 'Adrian', lastname: 'Parker', citystate: 'Las Vegas, NV'}
            ];

            res.send(personList);

        });

        app.get('/api/loadUrls', function (req, res){
                var urlContainer = {
                    www: 'www.domain.com',
                    stage: 'stage.domain.com',
                    test: 'test.domain.com'
                }

            res.send(urlContainer);
        });

        app.get('/api/getStores', function (req,res){
            var storeList = stores.getStoreList();
            res.send(storeList);
        });

        app.post('/api/mail/send', function (req, res){
            // http://codeforgeek.com/2014/07/send-e-mail-node-js/
            var mailMessage = req.body.mailMessage;

            var mailMessageBody = '<p><strong>Name:</strong> ' + mailMessage.name + '&nbsp; <strong>Email:</strong> ' + mailMessage.email + '</p>'
                                + '<p><strong>Ecommerce Enhancement Request Details</strong></p><hr />'
                                + '<p><strong>What:</strong> ' + mailMessage.what + '</p>'
                                + '<p><strong>Who:</strong> ' + mailMessage.who + '</p>'
                                + '<p><strong>Dates:</strong> ' + mailMessage.dates+ '</p>'
                                + '<p><strong>Analytics:</strong> ' + mailMessage.analytics+ '</p>'
                                + '<p><strong>Customer Service:</strong> ' +  mailMessage.customerservice+ '</p>'
                                + '<p><strong>Where:</strong> ' + mailMessage.where+ '</p>';


            var smtpTransport = nodemailer.createTransport("SMTP",{
                service: "gmail",
                auth: {
                    user: "hallmarkerdev@gmail.com",
                    pass: "********"
                }
            });

            var mailOptions={
                to : 'chris.berry@contractor.hallmark.com',
                subject : 'Ecommerce Enhancement Request',
                html : mailMessageBody
            }
            console.log(mailOptions);
            smtpTransport.sendMail(mailOptions, function(error, response){
                if(error){
                    console.log(error);
                    res.send("Something prevented the email from being sent.");
                }else{
                    console.log("Message sent: " + response.message);
                    res.send("Mesasge successfully sent");
                }
            });

        });
    }
};