 var canvas = null;
 var context = null;
 var x = 0;
 var y = 0;
 var img = null;
 var frameRate = 1000/30;
 var frame = 0;
 var assets = [
 	"../../images/robo.png",
 	"../../images/robo.png",
 	"../../images/robo.png",
 	"../../images/robo.png",
 	"../../images/robo.png",
 	"../../images/robo.png",
 	"../../images/robo.png",
 	"../../images/robo.png",
 	"../../images/robo.png",
 	"../../images/robo.png",
 	"../../images/robo.png",
 	"../../images/robo.png",
 	"../../images/robo.png"
 ];

var frames = [];

var onImageLoad = function(){
 	console.log('image loaded');
 	// context.drawImage(img, 192, 192);
 }



 var setup = function () {
 	canvas = document.getElementById('canvas');
 	context = canvas.getContext('2d');
 	canvas.width = window.innerWidth;
 	canvas.height = window.innerHeight;

 	// for (var i = 0; i < assets.length; i++) {
 	// 	frames[i] = new Image();
 	// 	frames[i].src = assets[i];
 	// }

 	setInterval(animate, frameRate);

 	// img = new Image();
 	// img.onload = onImageLoad;
 	// img.src = "../../images/robo.png";

 }

var animate = function () {
	console.log(frame);
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(frames[frame], x, y);
	x++;
	y++;
	frame = ( frame + 1 ) % frames.length;
 }

 setup();
