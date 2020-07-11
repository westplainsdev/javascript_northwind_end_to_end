locatorApp.controller('location.personalizedController', function ($scope, $http, $timeout, UnitedStatesService) {

    var stores = [],
        states = [],
        loadStores = function () {
            $http.get('/api/getStores').success(function (request) {
                stores = request;
            });
        },
        loadStates = function () {
            states = UnitedStatesService.getStates();
            return states;
        },
        loadUrls = function () {
            $http.get('/api/loadUrls').success(function (result) {
                $scope.url = result;
            });
        },
        load = function () {
            loadStores();
            loadUrls();
        },
        parseStores = function () {
            var selectedState = $scope.selectedState;

            if (selectedState) {
                var filteredStores = _.where(stores, {state_code: selectedState})

                _.each(filteredStores, function (store) {
                    store.mapUrl = makeMapLink(store);
                });

                // to make sure the sort works correctly, sort by your least important sort first
                // then with you more important second. exp: by 'name' 1, by 'city' 2
                var halfSorted = _.sortBy(filteredStores, 'name');
                var fullySorted = _.sortBy(halfSorted, 'city');

                return fullySorted;
            }
        },
        makeMapLink = function (store) {
            return 'http://maps.live.com/default.aspx?where1=' + urlEncode(store.name + " " + store.address1 + ", " + store.city + " " + store.state_code) + '&v=2';
        },
        urlEncode = function (target) {
            var encoded = encodeURIComponent(target).replace(/[!'()*]/g, '');
            return encoded;
        };

    $scope.fadeToggle = false;
    $scope.states = loadStates();
    $scope.selectedState = $scope.states[0].value;

    $scope.parseStores = function () {
      //  $scope.fadeToggle = false;
        $scope.filterdStores = [];
        $scope.filterdStores = parseStores();

        if($scope.fadeToggle){
            $scope.fadeToggle = false;
            $timeout( function(){
                $scope.fadeToggle = true;
            }, 50);
            return;
        }
       $scope.fadeToggle = true;

    };

    load();
});