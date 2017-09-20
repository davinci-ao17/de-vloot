if (typeof(Storage) !== "undefined") {
	var page = localStorage.getItem("page");
	if(page != null) {
    	document.getElementById("b-" + page).click();
	} else {
    	localStorage.setItem("page", "home");
	}
}

function openPage(evt, page, title, subtitle) {
	var i, tabcontent, tablinks
	tabcontent = document.getElementsByClassName("tabcontent")
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none"
	}
	tablinks = document.getElementsByClassName("tablinks")
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "")
	}
	document.getElementById(page).style.display = "block"
	evt.currentTarget.className += " active"

	document.getElementById("header-title").innerHTML = title;
	document.getElementById("header-subtitle").innerHTML = subtitle;

	if (typeof(Storage) !== "undefined") {
    	localStorage.setItem("page", page);
	}
}