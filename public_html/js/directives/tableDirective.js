app.directive ('appTable', function(){
    return { 
    restrict: 'E', 
    scope: { 
      items: '=' 
    }, 
    templateUrl: 'js/directives/table.html' 
  };  
});