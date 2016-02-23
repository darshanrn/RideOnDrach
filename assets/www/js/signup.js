   function createCORSRequest(method, url) {
	  var xhr = new XMLHttpRequest();
	  if ("withCredentials" in xhr) {

	    // Check if the XMLHttpRequest object has a "withCredentials" property.
	    // "withCredentials" only exists on XMLHTTPRequest2 objects.
	    xhr.open(method, url, true);

	  } else if (typeof XDomainRequest != "undefined") {

	    // Otherwise, check if XDomainRequest.
	    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
	    xhr = new XDomainRequest();
	    xhr.open(method, url);

	  } else {

	    // Otherwise, CORS is not supported by the browser.
	    xhr = null;

	  }
	  return xhr;
	}
	
	function addUser()
	{
		var name = document.getElementById('username').value;
		var password = document.getElementById('password').value;
		var mobile = document.getElementById('mobile').value;
		var url = "http://128.199.246.169:8888/addnew?name="+name+"&password="+password+"&mobile="+mobile;
		var xhr = createCORSRequest('GET', url);
		if (!xhr) {
		  throw new Error('CORS not supported');
		}
		xhr.onload = function() {
		 var responseText = xhr.responseText;
		 console.log(responseText);
		 alert(responseText );
		 document.getElementById("continue_button").style.visibility="visible";
		};

		xhr.onerror = function() {
		  console.log('There was an error!');
		};
		xhr.send();
	}