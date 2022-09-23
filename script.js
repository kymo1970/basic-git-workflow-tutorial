//Javascript for Webpage.
document.addEventListener("DOMContentLoaded", function(event)
	{
		let myHeader = document.getElementById("header-id")
		setTimeOut(() => {
			myHeader.classList.remove("hidden");
		}, 3000)
	});
