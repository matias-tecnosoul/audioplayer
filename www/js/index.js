

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	document.querySelector("#playMp3").addEventListener("touchend", playMP3, false);
	document.querySelector("#playMp3Mild").addEventListener("touchend", playMp3Mild, false);
	document.querySelector("#playRemoteFile").addEventListener("touchend", playRemoteFile, false);

}

function playMP3() {
   // var mp3URL = getMediaURL("sounds/button-1.mp3");
   var mp3URL = "sounds/button-1.mp3";
    var media = new Media(mp3URL, null, mediaError);
	media.setVolume(1.0);
    media.play();
}

function playMp3Mild() {
    var mp3URL = getMediaURL("sounds/button-1.mp3");
    var media = new Media(mp3URL, null, mediaError);
	media.setVolume(0.1);
    media.play();
}

function playRemoteFile() {
	var media = new Media("http://radios2.tecnosoul.com.ar:8000/guayraradio");
	media.setVolume(0.7);
    media.play();
}

function getMediaURL(s) {
  //  if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
    return s;
}

function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}
