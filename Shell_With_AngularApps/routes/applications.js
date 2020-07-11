module.exports = {
    register: function (app) {
        app.get('/address', function (req, res){
            var data = { description: 'AngularJS address book example application.'}
            res.render('apps/address', data);
        });

        app.get('/shop', function (req, res){
            var data = { description: 'AngularJS shopping cart example application.'}
            res.render('apps/shop', data);
        });

        app.get('/shows', function (req, res){
            var data = { description: 'AngularJS master / details example.', instructions: 'Click one of the links below to view the details'}
            res.render('apps/shows', data);
        });

        app.get('/chance', function (req, res){
            var data = { description: 'AngularJS random information example application.'}
            res.render('apps/chance', data);
        });

        app.get('/locator', function (req, res){
            var data = { description: 'AngularJS store locator example application.'}
            res.render('apps/storelocator', data);
        });

        app.get('/grades', function (req, res){
            var data = { description: 'AngularJS grade book example application.'}
            res.render('apps/grades', data);
        });

        app.get('/customers', function (req, res){
            var data = { description: 'AngularJS example application using MicroService SQL provider.'}
            res.render('apps/customer', data);
        });
    }
};