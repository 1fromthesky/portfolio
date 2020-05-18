document.addEventListener('DOMContentLoaded', function() {
	initNavToggle()
})

const btnBurger = document.querySelector('.burger-btn');
const asideMenu = document.querySelector('.hero-menu');

function winResize() {
	let currentWin = window.innerWidth

	if (currentWin > 768) {
		btnBurger.classList.remove('burger-btn_open');
	} else if (currentWin <= 480) {
		asideMenu.style.right = -currentWin + 'Px';
		asideMenu.style.width = currentWin + 'Px';
	} else {
		asideMenu.style.right = '-325Px';
		asideMenu.style.width = '325Px';
	}
}

function clickOnBurger(event) {
	event.preventDefault();
	winResize()

	if (btnBurger.classList.contains('burger-btn_open')) {
		btnBurger.classList.remove('burger-btn_open');
	} else {
		asideMenu.style.right = 0;
		btnBurger.classList.add('burger-btn_open');
	}
}

function winScroll() {
	if(window.scroll) {
		asideMenu.style.right = -window.innerWidth + 'Px';
		btnBurger.classList.remove('burger-btn_open');
	}
}

function initNavToggle() {
	window.addEventListener('resize', winResize);
	window.addEventListener('scroll', winScroll);
	btnBurger.addEventListener('click', clickOnBurger);
}
