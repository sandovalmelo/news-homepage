const toggleIcon = document.getElementById("toggle-icon");
const nav = document.getElementById("nav");
const menuIcon = document.getElementById("menu-icon");

toggleIcon.addEventListener("click", () => {
	nav.classList.toggle("active");

	if (nav.classList.contains("active")) {
		menuIcon.setAttribute("src", "./images/icon-menu-close.svg");
		document.body.style.overflow = "hidden";
	}

	if (!nav.classList.contains("active")) {
		menuIcon.setAttribute("src", "./images/icon-menu.svg");
		document.body.style.overflow = "auto";
	}
});
