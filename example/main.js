/**
 * Project: angular-infinite-scroll
 * User: Evgeny Reznichenko "<kusakyky@gmail.com>"
 */


angular
    .module('scrollApp', ['ui.InfiniteScroll'])
    .controller('mainCtrl', ['$scope', function ($scope) {

        $scope.list = [];

        function loadMore() {
            for (var i = 0, l = 40; i < l; i += 1) {
                $scope.list.push(Math.random() * 10000 | 0);
            }
        }

        //bind on scroll event
        $scope.onScroll = function () {
            loadMore();
        }

        //load first
        loadMore();
    }]);