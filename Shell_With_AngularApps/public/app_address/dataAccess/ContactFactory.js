addressApp.factory('ContactFactory', function($http){
    return {
        getDataList:  function(){
            return $http.get('/api/address/people');
        }
    }
});