var filestable = null;
$(document).ready(function (){
	
		$('.dropdown-button').dropdown({
	        inDuration: 300,
	        outDuration: 225,
	        constrainWidth: false, // Does not change width of dropdown to that of the activator
	        hover: false, // Activate on hover
	        gutter: 0, // Spacing from edge
	        belowOrigin: false, // Displays dropdown below the button
	        alignment: 'left', // Displays dropdown with edge aligned to the left of button
	        stopPropagation: false // Stops event propagation
	      }
	    );
		
		$('#calendar').fullCalendar({
	        theme: false,
	        editable: true,
	        disableResizing:true,
	        // add event name to title attribute on mouseover
	        eventClick: function(calEvent, jsEvent, view) {
		        alert('Event: ' + calEvent.title);
		        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
		        alert('View: ' + view.name);
		        // change the border color just for fun
		        $(this).css('border-color', 'red');
		
		    }
	        
	    });
		
		filestable = $('#fileTable').DataTable();
		
//		console.log(filestable);

  });

function filesSelected(){
	filestable.clear().draw();
	var selectedFiles = document.getElementById('multiFileUpload').files;
	var tabledata = Array();
	for(var ind = 0; ind < selectedFiles.length; ind++){
		tabledata.push(
			[   (ind+1),
				selectedFiles[ind].name,
				selectedFiles[ind].size,
				"N/A",
				"N/A"
			]
		);
	}
	
	filestable.rows.add(tabledata).draw();
}