(function (angular) {

    "use strict";

    function getItemsShownDefault() {
        return {
            "key_people": 3,
            "grants_given": 3,
            "grants_received": 3,
            "investments_made": 3,
            "investments_received": 3,
            "collaborations": 3,
            "employments": 3,
            "relations": 3,
            "data_given": 3,
            "data_received": 3,
            "revenues": 3,
            "expenses": 3
        };
    }

    function Controller($scope) {
        $scope.itemsShownDefault = getItemsShownDefault();
        $scope.itemsShown = getItemsShownDefault();

        $scope.showMore = showMore;
        $scope.showLess = showLess;

        $scope.$on("entityChange", onEntityChange);

        function onEntityChange() {
            // Reset items shown in details list.
            $scope.itemsShown = getItemsShownDefault();
        }

        function showMore(type) {
            $scope.itemsShown[type] = $scope.currentEntity[type].length;
        }

        function showLess(type) {
            $scope.itemsShown[type] = $scope.itemsShownDefault[type];
        }
    }

    Controller.$inject = ["$scope"];

    angular
        .module("civic-graph")
        .controller("detailsCtrl", Controller);
})(angular);
