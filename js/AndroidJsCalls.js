
function updateImagePath(imagePath){
    //alert('In javascript \nimagePath='+imagePath);
    var imagePath = baseAPPURL+imagePath;
    angular.element(document.getElementById('androidAppBody')).scope().setImage(imagePath);
    //$("#blogImg").attr("src",baseAPPURL+imagePath);
}

function setSelectedLocation(locationName, lat, lng){
  //  alert('Selected Location Name= '+locationName+'\nLat = '+lat+'\nLng = '+lng);
    var location = {name:locationName,lat:lat, lng:lng};
    angular.element(document.getElementById('androidAppBody')).scope().setLocation(location);
}