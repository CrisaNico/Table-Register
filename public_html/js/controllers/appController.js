app.controller('AppController',['swInfo', function(swInfo){
    
   var vm=this;
   vm.nav = [
       {
           url:'#/',
           title:'Home'
       },
       {
           url:'#/register',
           title:'Registro'
       },
       {
           url:'#/table',
           title:'Tabella'
       }
   ];
   vm.ver = swInfo.version;
   vm.today = new Date();
}]);
