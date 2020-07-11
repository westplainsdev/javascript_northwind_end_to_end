locatorApp.controller('location.displayController', function($scope, $http){


    var currentPage = 0,
        maxSize = 5,
        allStores = [],
        storeMarkers = [];

    $scope.message = "Store Locations";
    $scope.showHide = false;
    $scope.maxSize = maxSize;

    var buildMarkers = function(collection){

        if(storeMarkers.length > 0){
            storeMarkers = [];
        }

        _.forEach(collection, function(item) {
            var  idKey = "id";
            var ret = {
                latitude: item.latitude,
                longitude: item.longitude,
                title: item.name,
                show: false

            };
            ret[idKey] = item.ID;

            storeMarkers.push(ret);
        });
    };


    $scope.keypressCallback = function($event) {
        var locationQuery = $scope.query;

        $http.get('http://stores.hallmark.com/api/geocode?search=' + locationQuery)
            .then(function(response) {
                if(response.data.success){
                    var lat, lon, urlparams;
                    lat = response.data.latitude;
                    lon = response.data.longitude;

                    $scope.map = { center: { latitude: lat, longitude: lon }, zoom: 10, storeMarkers: [] };

                    urlparams = 'latitude=' + lat + '&longitude=' + lon;
                    return $http.get('http://stores.hallmark.com/api/stores?' + urlparams);
                }
               return response;
            })
            .then(function(response) {
                if(response.data.stores) {
                    allStores = response.data.stores;
                    $scope.totalItems = allStores.length;
                    $scope.storeCollection = allStores.slice(currentPage, maxSize);
                }
            })
            .then(function() {
                if($scope.storeCollection !== undefined){
                    buildMarkers($scope.storeCollection);
                    $scope.map.storeMarkers = storeMarkers;
                }
            });


        $event.preventDefault();
    };

    $scope.openInfoWindow = function(selectedStore){
       // alert('clicked: ' + selectedStore.name + ' ' + selectedStore.ID);

        var markers =  _.where($scope.map.storeMarkers, { 'id': selectedStore.ID });
        var foundMarker = markers[0];

        console.log(foundMarker);

        //var infowindow = new google.maps.InfoWindow({
        //    content: selectedStore.name
        //});

        //var infoWindow = new google.maps.InfoWindow({
        //   content: foundMarker.title
        //
        //});
        //
        //var tempMarker = new google.maps.Marker({
        //    map: $scope.map,
        //   // position: new google.maps.LatLng(selectedMarker.latitude, selectedMarker.longitude),
        //    title: foundMarker.name
        //});
        //
        // infoWindow.open($scope.map, foundMarker);


    };

    $scope.pageChanged = function() {
        var setPage = $scope.currentPage - 1,
           pageRange = setPage + 5;

        $scope.storeCollection = allStores.slice(setPage, pageRange);
        buildMarkers($scope.storeCollection);
        $scope.map.storeMarkers = storeMarkers;

    };

});