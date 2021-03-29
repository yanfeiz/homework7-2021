var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	document.getElementsByClassName("video").load();
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	video.volume = 0.0;
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Style Video");
	video.classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Video");
	video.classList.remove("oldSchool")
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate)
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast Video");
	video.playbackRate /= 0.95;
	console.log(video.playbackRate)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';

});
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Chaging volume");
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Chaging position");
	console.log(video.currentTime)
	if (video.currentTime == video.duration){
		video.currentTime = 0;
		video.play();
	}else{
		video.currentTime += 15;
		video.play();
	}
});
