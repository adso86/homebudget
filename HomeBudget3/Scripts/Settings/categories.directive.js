(function () {
    angular
    .module('HomeBudget')
    .directive('categoriesList', categoriesList);

    function categoriesList() {
        var directive = {
            restrict: 'E',
            template:
        '<div>'
        + '<h2>{{vm.title}}</h2>'
        + '<div ng-repeat="item in vm.list">'
        + '<h3>{{item.name}}</h3>'
        + '<span>{{item.id}}</span>'
        + '</div>'
        + '</div>',
            controller: 'CategoriesController',
            controllerAs: 'vm'
        };
        return directive;
    }
})();