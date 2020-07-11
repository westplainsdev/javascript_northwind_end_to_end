// EXPRESS PAGE ROUTING

module.exports = {
    register: function(app) {

        // Default routes for the entire application to launch.
        app.get('/', function(req, res){
            res.render('index');
        });

        app.get('/reference', function (req, res){
            res.render('partials/reference');
        });

        app.get('/simple', function(req, res){
            var data = {name: 'Gorilla'};
            res.render('partials/simple', data);
        });

        app.get('/alt', function(req, res){
            var data = {message: 'JavaScript starter template', layout: 'alt_layout'};
            res.render('partials/alt_content', data);
        });

        app.get('/myprofile', function(req, res){

            var data = {user:
                {
                    firstname:'Jane',
                    lastname:'Bishop',
                    company:'Some Cool Vendor',
                    email:'janesemail@contractor.hallmark.com',
                    timeZone: 'Central Time (US &amp; Canada)',
                    username:'janeuser',
                    password: '11111122333'
                }
            };


            res.render('partials/myprofile', data);
        });

        app.get('/complex', function(req, res){
            var data = {
                name: 'Gorilla',
                address: {
                    streetName: 'Broadway',
                    streetNumber: '721',
                    floor: 4,
                    addressType: {
                        typeName: 'residential'
                    }
                }
            };
            res.render('partials/complex', data);
        });

        app.get('/loop', function(req, res){
            var basketballPlayers = [
                {name: 'Lebron James', team: 'the Heat'},
                {name: 'Kevin Durant', team: 'the Thunder'},
                {name: 'Kobe Jordan',  team: 'the Lakers'}
            ];

            var days = [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
            ];

            var data = {
                basketballPlayers: basketballPlayers,
                days: days
            };

            res.render('partials/loop', data);
        });

        app.get('/logic', function(req, res){
            var data = {
                upIsUp: true,
                downIsUp: false,
                skyIsBlue: "yes"
            };

            res.render('partials/logic', data);
        });

        app.get('/question', function (req, res){
            var data = {
                instructions: 'Fill out the form below'
            };

            res.render('partials/question', data);
        });

        app.post('/question', function(req, res){
            var userName = req.body.userName;
            var data = {
                html: userName
            }
            res.render('partials/answer', data);

        });

        // THIS ISN'T NEEDED
        //app.post('/answer', function(req, res){
        //    var userName = req.body.userName;
        //    var data = {
        //        html: userName
        //    }
        //    res.render('partials/answer', data);
        //});
    }
};