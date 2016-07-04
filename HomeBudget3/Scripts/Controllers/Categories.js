(function () {
    angular
    .module('HomeBudget')
    .controller('CategoriesController', CategoriesController);

    function CategoriesController() {
        var vw = this;
        vm.list = [
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
})();
