
var baseAPPURL = 'http://10.221.5.246/';
//GOOGLE MAP KEY : AIzaSyAfYuuc9lmO0L_FvtgZE4ReJ96IloZpbZk
var app = angular.module("rezumeApp",[]);

app.controller('rezumeController', function ($scope, $http,  AppHttpService ){

    $scope.loginUser = {"userId":"","password":""};
    
    $scope.appName = "rezume"; 

    $scope.baseUrl = baseAPPURL+'api/'+$scope.appName+'/';
    
    $scope.screenName = "Home";
//    $scope.screens = {loginScreen:true,mainContent:false,addNewPage:false};
   $scope.screens = {loginScreen:false,mainContent:false, pageForm: true};
   
   $scope.selectedFiles = [
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 2",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"},
	   					{fileName:"File 1",size:"124",status:"N/A",action:"N/A"}];
   
   $scope.hideAll= function (){
	   	$scope.screens.loginScreen=false;
   		$scope.screens.mainContent=false;
   		$scope.screens.pageForm=false;
   }
    
//    $scope.rezEvents = null;
   $scope.rezEvents = [{title:"Event Title 1", eventMessage:"This is event message for event 1", eventTime:"21/03/2017 10.10AM"},
    	{title:"Event Title 2", eventMessage:"This is event message for event 2", eventTime:"21/03/2017 11.00AM"},
    	{title:"Event Title 3", eventMessage:"This is event message for event 3.br/>The next line...", eventTime:"21/03/2017 02.00PM"}];

    $scope.validateUser = function (isFormValid){
        //alert($scope.appUser);
    	
    	console.log($scope.loginUser);
    	
        console.log($scope.appUser);
        $scope.hideAll();
        $scope.screens.mainContent = true;

        //POST DATA
    };
    
    $scope.showMainPage =function (){
    	$scope.hideAll();
        $scope.screens.mainContent = true;
        $scope.screenName = "Home";
    }
    
    $scope.showFormPage =function (){
    	$scope.hideAll();
        $scope.screens.pageForm = true;
        $scope.screenName = "Files";
    }
    
    $scope.listAllSelectedFiles = function(){
    	alert(0);
    }
    

    $scope.isEmpty = function (value) {
        return !value;
    }

    $scope.showMessage = function (title, text, type){
        swal({
              title: title,
              text: text,
              type: type
            }
        );
    };
});