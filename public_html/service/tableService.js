app.service('TableService', [ '$http', 'URL', function( $http, URL ){
    
    var onError = function(response)
        {console.log("Errore di chiamata: ", response)};

    
    var getDayTot = function(request, onReady){
        var data = request? request.data : {};
        $http({
            url : URL.REST + '/registro.json',
            method : "GET",
            data : data,
            dataType : "json"
        }).then(onReady, onError);
    }    
    return {
        getDayTot : getDayTot
    };
}]);