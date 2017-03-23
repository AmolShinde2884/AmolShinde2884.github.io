function CustomMarker(latlng, map, args, blogName, blogImage) {
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);	
	this.blogName = blogName;
	this.blogImage = blogImage;
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
	
	var self = this;
	
	var div = this.div;
	
	if (!div) {
	
		div = this.div = document.createElement('div');
		
		var htmlContent = ''+
			'<div style="width:150px;"><div class="row" >'+
				'<div >'+
				  '<div class="card z-depth-5">'+
					'<div class="card-image">'+ //
					  '<img src="'+this.blogImage+'">'+
					  //'<span class="card-title">Card Title</span>'+
					  //'<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>'+
					'</div>'+
					'<div class="card-content" style="padding:10px;">'+
					  ''+this.blogName+
					  '<a href="javascript:showBlogDetails()" style="float:right;">View</a>'+
					'</div>'+
					 '<div class="marker-point"></div>'+
				  '</div>'+
				'</div>'+
			  '</div></div>';
		
		div.innerHTML = htmlContent;
		div.className = 'marker';
		
		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		//div.style.width = '20px';
		//div.style.height = '20px';
		//div.style.background = 'blue';
		
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}
		
		google.maps.event.addDomListener(div, "click", function(event) {
			alert('You clicked on a custom marker!'+self.args.marker_id);
			//google.maps.event.trigger(self, "click");
		});
		
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		div.style.left = (point.x - 80) + 'px';
		div.style.top = (point.y - 175) + 'px';
	}
};

CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}	
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;	
};