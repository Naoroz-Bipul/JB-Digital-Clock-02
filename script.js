function DigitalClock(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let amOrPm = 'AM';
	if(hours > 12){
		hours = hours - 12;
		amOrPm = 'PM';
	}
	if(hours < 10){
		hours = '0' + hours;
	}
	if(minutes < 10){
		minutes = '0' + minutes;
	}
	if(seconds < 10){
		seconds = '0' + seconds;
	}
	document.getElementById('hour').innerHTML = hours;
	document.getElementById('minute').innerHTML = minutes;
	document.getElementById('second').innerHTML = seconds;
	document.getElementById('ampm').innerHTML = amOrPm;
	setInterval(DigitalClock, 1000)
}
DigitalClock();