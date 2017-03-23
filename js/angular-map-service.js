
var baseAPPURL = 'http://10.221.5.246/';
//GOOGLE MAP KEY : AIzaSyAfYuuc9lmO0L_FvtgZE4ReJ96IloZpbZk
var app = angular.module("androidApp",[]);

app.controller('androidController',function ($scope, $http,  AppHttpService){

    $scope.baseUrl = baseAPPURL+'api/travlog/';
    $scope.appBlogs = [];
    $scope.loadAllBlogsForMap = function (){
            var response = AppHttpService.get($scope.baseUrl+'blogs/data',{"search":'{}'});
            $scope.appBlogs = null;

            console.log('call started...');
            response.then(function (result){
                if(result.status == 200){
                    $scope.appBlogs = result.data;
                    console.log('Data Received...'+$scope.appBlogs);

                    for(var ind = 0; ind < $scope.appBlogs.length; ind++){
                        var blog = $scope.appBlogs[ind];
                        var location2 = new google.maps.LatLng(blog.location.lat, blog.location.lng);
                        overlay = new CustomMarker(
                            location2,
                            map,
                            {
                                marker_id: blog._id
                            },
                            blog.blogName,
                            blog.imagePath
                        );
                    }

                }
                else{
                    alert("Error occurred while loading data Login","Error.","error");
                }

            });
            console.log('call end...');
        }

});