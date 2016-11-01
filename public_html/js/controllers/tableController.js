app.controller('TableController', ['$scope', 'TableService', function($scope, TableService){
    var vm = $scope;
    
    vm.presTot = [];
    vm.presence = {};
    vm.presence.values = ["Pres","Ass"];
    vm.presence.pres = 0;
    vm.presence.ass = 0;
    
    vm.init = function(){
        TableService.getPresTot(null, populatePresTot);
    };    
    var populatePresTot = function(response){
        var presTot = response.data.result.students;
        for (var i = 0; i < presTot.length; i++){
            vm.presTot.push(presTot[i]);
            vm.presence[""+presTot[i]._id] = 0;
        }        
    };
    vm.setPresence = function(pres, val){
        vm.presence.ass = 0;
        vm.presence.pres = 0;
        vm.presence[""+pres._id] = (val == "Pres" ? 1 : 0);
        for (var i = 0; i < vm.presTot.length; i++){
            if (vm.presence[""+vm.presTot[i]._id] == 0)
               vm.presence.ass++;
            else
               vm.presence.pres++;           
        }
    };
    vm.init();
}]);
