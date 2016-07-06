(function () {
    'use strict';

    angular
    .module('HomeBudget')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categoriesservice'];

    function CategoriesController(categoriesService) {
        var vm = this;

        vm.list = [];
        vm.title = 'Kategorie';

        activate();

        function activate() {
            vm.list = categoriesService.getCategories();
        }
    }
})();
