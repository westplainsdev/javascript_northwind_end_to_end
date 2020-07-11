chanceApp.service('LocalStorageService', function(){

    var checkStorage = function(action){
        var taste = localStorage.getItem('favoriteflavor');
        var storageActiveFlag, localMessage;

        var locationAction = {
            'add': function () {
                if (taste) {
                    localMessage = 'local storage has already been added';
                } else {
                    localStorage.setItem('favoriteflavor', 'vanilla');
                    localMessage = 'local storage has been added';
                }
                return  {
                    message: localMessage,
                    flag: true
                };
            },
            'read': function () {
                if (taste) {
                    localMessage = taste;
                    storageActiveFlag = true;
                } else {
                    localMessage = 'local storage is empty';
                }
                return  {
                    message: localMessage,
                    flag: storageActiveFlag
                }
            },
            'remove': function () {
                if (taste) {
                    localStorage.removeItem('favoriteflavor');
                    localMessage = 'removed ' + taste + ' from local storage';
                } else {
                    localMessage = 'no keys found in local storage';
                }
                return  {
                    message: localMessage,
                    flag: false
                }
            },
            'default': function () {
                if (taste) {
                    storageActiveFlag = true;
                } else {
                    storageActiveFlag = false;
                }
                return  {
                    message: '',
                    flag: storageActiveFlag
                }
            }

        };
        return (locationAction[action] || locationAction['default'])();
    }

    return {
        checkStorage: checkStorage
    }
});
