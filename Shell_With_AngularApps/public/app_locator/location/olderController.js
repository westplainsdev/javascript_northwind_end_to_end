locatorApp.controller('location.olderController', function($scope, $http){


    var currentPage = 0,
        maxSize = 5,
        allStores = [],
        storeMarkers = [];

    var infoWindow;

    $scope.message = "Older Search version";
    $scope.showHide = false;
    $scope.maxSize = maxSize;


    var buildMarkers = function(collection){

        if(storeMarkers.length > 0){
            storeMarkers = [];
        }

        $scope.map.storeMarkers = [];

        _.forEach(collection, function(item) {
            var  idKey = "id";

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(item.latitude, item.longitude),
                title: item.name
            });

            marker.content = '<strong>' + item.name + '</strong><br/>' + item.address1 +'<br/>'+
                             item.city + ', ' + item.stateCode + ' ' + item.postalCode + '</span><br/>'+
                             '<a href="">Directions</a><br/>'+ item.phone;


            marker[idKey] = item.ID;

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });

            storeMarkers.push(marker);
        });
    };


   // var infoWindow = new google.maps.InfoWindow();


    $scope.keypressCallback = function($event) {
        var locationQuery = $scope.query;

        $http.get('http://stores.hallmark.com/api/geocode?search=' + locationQuery)
            .then(function(response) {
                var lat, lon, urlparams;
                lat = response.data.latitude;
                lon = response.data.longitude;

                var mapOptions = {
                        center: new google.maps.LatLng(lat, lon),
                        zoom: 10,
                        mapTypeId: google.maps.MapTypeId.TERRAIN
                };

                $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
                $scope.map.storeMarkers = [];

                urlparams = 'latitude=' + lat + '&longitude=' + lon;
                return $http.get('http://stores.hallmark.com/api/stores?' + urlparams);
            })
            .then(function(response) {
                allStores = response.data.stores;
                $scope.totalItems = allStores.length;
                $scope.storeCollection = allStores.slice(currentPage, maxSize);
            })
            .then(function() {
                buildMarkers($scope.storeCollection);
                $scope.map.storeMarkers = storeMarkers;
            });


        $event.preventDefault();
    };


    $scope.openInfoWindow = function(e, selectedMarker){

        infoWindow = new google.maps.InfoWindow({
            position: new google.maps.LatLng(selectedMarker.latitude, selectedMarker.longitude)

        });

        var tempMarker = new google.maps.Marker({
            map: $scope.map,
           // position: new google.maps.LatLng(selectedMarker.latitude, selectedMarker.longitude),
            title: selectedMarker.name
        });

        tempMarker.content = '<strong>' + selectedMarker.name + '</strong><br/>' + selectedMarker.address1 +'<br/>'+
        selectedMarker.city + ', ' + selectedMarker.stateCode + ' ' + selectedMarker.postalCode + '</span><br/>'+
        '<a href="">Directions</a><br/>'+ selectedMarker.phone;



        infoWindow.open( $scope.map,tempMarker);
    }


    $scope.pageChanged = function() {
        var setPage = $scope.currentPage - 1,
            pageRange = setPage + 5;

        $scope.storeCollection = allStores.slice(setPage, pageRange);
        buildMarkers($scope.storeCollection);
        $scope.map.storeMarkers = storeMarkers;

    };

});