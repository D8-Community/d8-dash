/*
Template Name: D8 Design
Author: D8 Design
Website: https://D8 Design.com/
Contact: D8 Design@gmail.com
File: Session Timeout
*/

$.sessionTimeout({
	keepAliveUrl: 'pages-starter.html',
	logoutButton:'Logout',
	logoutUrl: 'pages-login.html',
	redirUrl: 'pages-lock-screen.html',
	warnAfter: 3000,
	redirAfter: 30000,
	countdownMessage: 'Redirecting in {timer} seconds.'
});