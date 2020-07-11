customerApp.factory('PersistService', function () {

    var localCustomer = {}, localInfo = {},

        setCustomer = function (customer) {
            localCustomer = customer;
        },

        setOrderInfo = function (orderInfo) {
            localInfo = orderInfo;
        },
        getCustomer = function () {
            return localCustomer;
        },
        getOrderInfo = function () {
            return localInfo;
        };


    return {
        SetCustomer: setCustomer,
        SetOrderInfo: setOrderInfo,
        GetCustomer: getCustomer,
        GetOrderInfo: getOrderInfo
    }
});