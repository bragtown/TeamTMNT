'use strict';

angular.module('teamTmntApp')
  .service('TurtleService', function TurtleService($q, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    	return {
    		getTeam: function(teamId){

    			var deferred = $q.defer();
    			$http({
                method: 'GET',
                url: 'http://pure-ocean-3603.herokuapp.com/team/' + teamId
                }).success(function(data, status, headers, config){
    				if (Array.isArray(data)){
                        deferred.resolve(data[0]);
    			     } else {    
                        deferred.resolve(data);
                     }
                }).error(function(data){
    			     deferred.reject(data);
                });
                return deferred.promise;
		    },
                getTeams: function(){
                    var deferred = $q.defer();
                
                $http({
                    method: 'GET',
                    url: 'http://pure-ocean-3603.herokuapp.com/team'
                }).success(function(data){
                    deferred.resolve(data);

                }).error(function(data){
                    deferred.reject(data);
                    console.log(data);
                });
                return deferred.promise;
    	}
    }
  });
