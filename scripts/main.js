/*
let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/bik-industries.png') {
		myImage.setAttribute('src', 'images/printer.jpeg');
	} else {
		myImage.setAttribute('src', 'images/bik-industries.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function() {
	let myName = prompt('Please enter your name.');
	if(myName) {
		myHeading.textContent = 'Welcome to BIK Industries, ' + myName;
	} else {
		myHeading.textContent = 'BIK Industries';
	}
}
function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Welcome to BIK Industries, ' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to BIK Industries, ' + myName;
}

myButton.onclick = function() {
	setUserName();
}
*/
