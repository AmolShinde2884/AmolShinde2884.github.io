
app.factory('AppHttpService', function($http) {
    return {
        get: function(url,headers) {

        	var req = {
    				method: 'get',
    				url: url,
    				headers: headers
    		}

            return $http(req).then(function(response) {
                return response;
            },function(error) {
                return error;
            });
        },

        post: function(url,headers,data) {

        	var req = {
    				method: 'POST',
    				url: url,
    				headers: headers,
    				data:data
    		}

            return $http(req).then(function(response) {
                return response;
            },function(error) {
                return error;
            });
        }
    };

});