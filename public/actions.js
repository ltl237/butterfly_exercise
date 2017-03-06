function forComments(){
	this.classList.toggle('comment')
	this.classList.toggle('commentOut')
}
function myAlert() {
	var date = Date();
	alert(date)
}
document.querySelector('#click-me').addEventListener('click', myAlert)
// document.querySelector('.comment').addEventListener('mouseleave', forComments)
