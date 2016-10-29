app.controller('TableController', ['$scope', 'TableService', function($scope, TableService){
    var vm = $scope;
    
    vm.presTot = [];
    vm.presence = {};
    
    vm.init = function(){
      vm.resetPresence();
      vm.resetPresTot();
    };
    
    var populatePresTot = function(response){
        var presTot = response.data.result.students;
        vm.presTot.length = 0;
        for (var i = 0; i < presTot.length; i++){
            vm.presTot.push(presTot[i]);
        }
    };
    
    vm.resetPresTot = function(){
        TableService.getPresTot(null, populatePresTot);
    };
    
    vm.resetPresence = function(){
        vm.presence.name = '';
        vm.presence.index = -1;
    };
    
    vm.getPresence = function(s){
        var presence = {};
        presence.name = s.name
        return presence;
    };
    
    vm.showPresence = function(index){
        vm.presence = vm.getPresence(vm.presence[index]);
        vm.presence.index = index;
    };

    vm.init();
}]);
