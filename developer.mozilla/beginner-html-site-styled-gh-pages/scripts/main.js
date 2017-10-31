var myImage = document.querySelector("img");

myImage.onclick=function(){
	if (myImage.getAttribute('src')==="images/firefox-icon.png"){
		myImage.setAttribute('src', "images/rsz_feather-transparent.png");
	}
	else{
		myImage.setAttribute('src',"images/firefox-icon.png");
	}
}