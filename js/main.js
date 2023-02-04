const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const navBtnBox = document.querySelector('.burger-btn__box');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const whiteSection = document.querySelector('.white-section');
const allP = document.querySelectorAll('p');
const allA = document.querySelectorAll('a');
const allH3 = document.querySelectorAll('h3');
const allH2 = document.querySelectorAll('h2');
const allLi = document.querySelectorAll('li');
const allBtns = document.querySelectorAll('button');
const blocks = document.querySelectorAll('.white-block');
const footerYear = document.querySelector('.footer__year');
const footer = document.querySelector('footer');
const contrastBtn = document.querySelector('.contrast-box');
const headerLogo1 = document.querySelector('.header__logo--1');
const headerLogo2 = document.querySelector('.header__logo--2');
const headerLogo3 = document.querySelector('.header__logo--3');

const handleNav = () => {
	nav.classList.toggle('nav--active');

	navBtnBars.classList.remove('black-bars-color');

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

//AutomaticYear
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

//Function Observer

const handleObserver = () => {
	const currentSection = window.scrollY;
	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color');
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

// contrast btn

const contrastFc = () => {
	allSections.forEach((section, index) => {
		if (index !== 0 && index !== 2) {
			section.classList.toggle('contrast-styles');
		}
	});
	blocks.forEach(block => {
		block.classList.toggle('contrast-styles');
	});
	allP.forEach(p => {
		p.classList.toggle('contrast-styles');
	});
	allA.forEach(a => {
		a.classList.toggle('contrast-styles');
	});
	allH2.forEach(h2 => {
		h2.classList.toggle('contrast-styles');
	});
	allH3.forEach(h3 => {
		h3.classList.toggle('contrast-styles');
	});
	allBtns.forEach(btn => {
		btn.classList.toggle('contrast-styles');
	});
	allLi.forEach(li => {
		li.classList.toggle('contrast-styles');
	});

	whiteSection.classList.toggle('white-section');

	footer.classList.toggle('contrast-styles');

	headerLogo1.classList.toggle('contrast__logo--1');
	headerLogo2.classList.toggle('contrast__logo--2');
	headerLogo3.classList.toggle('contrast__logo--3');
	contrastBtn.classList.toggle('contrast-box--logo');
};

navBtn.addEventListener('click', handleNav);
handleCurrentYear();
window.addEventListener('scroll', handleObserver);
contrastBtn.addEventListener('click', contrastFc);
