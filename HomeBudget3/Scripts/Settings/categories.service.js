(function () {
    'use strict';

    angular
    .module('HomeBudget')
    .factory('categoriesservice', categoriesservice);

    function categoriesservice() {
        var service = {
            getCategories: getCategories
        };

        return service;

        /////////

        function getCategories() {
            return [
                {
                    name: 'Żywność',
                    id: 1
                },
            {
                name: 'Odzież',
                id: 2
            },
            {
                name: 'Samochód',
                id: 3
            }
            ];
        }
    }
})();