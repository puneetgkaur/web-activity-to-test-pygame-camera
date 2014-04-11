define(function (require) {
    var activity = require("sugar-web/activity/activity");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();

        pygame_image_stream = function () {
            activity.showObjectChooser(function (error, result) {
                web_cam_output.src=result;
            });
        };
	flag=0;
	click=0;
	click_photo = function() {
         

	    click=1;
	    var insert_div=document.getElementById("snaps");
	    var image=document.createElement("img");
	    if(flag==0)
	    {
                var textNode=document.createTextNode("Here's your photograph");
		flag=1;
		insert_div.appendChild(textNode)
            }
	    image.src=pygame_image_stream;
	    image.width=200;
	    image.height=200;
            insert_div.appendChild(image);	

	}

	var web_cam_output=document.createElement("img");
	var insert_web_cam_output=document.getElementById("web_cam_output");
	insert_web_cam_output.appendChild(web_cam_output);
	while(!click)
	{
		pygame_image_stream();
	}



    });

});
