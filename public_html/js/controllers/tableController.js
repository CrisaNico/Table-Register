app.controller('TableController', ['$scope', "TableService", function($scope, TableService){
    var vm = $scope;
    
    vm.presents = [];
    vm.present = {};
    
    vm.init = function(){
      vm.resetPresent();
      vm.resetPresents();
    };
    
    var populatePresents = function(response){
        var presents = response.data.result.presents;
        vm.presents.length = 0;
        for (var i = 0; i < presents.length; i++){
            vm.presents.push(presents[i]);
        }
    }
    
    vm.resetPresents = function(){
        TableService.getPresents(null, populatePresents);
    };
    
    vm.resetPresent = function(){
        vm.present.name = '';
        vm.present.index = -1;
    };
    
    vm.getPresent = function(s){
        var present = {};
        present.name = s.name
        return present;
    };
    
    vm.showPresent = function(index){
        vm.present = vm.getPresent(vm.presents[index]);
        vm.present.index = index;
    };

    vm.init();
}]);