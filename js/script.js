//	Slick slider
$(document).ready(function () {
	$('.features__text').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		appendDots: $('.features__tabs'),
		autoplay: true,
		customPaging: function (slider, i) {
			return $('<button type="button" />').text(`TAB ${i + 1}`);
		},
		responsive: [
			{
				breakpoint: 768,
				settings: {
					appendDots: $('.features__text')
				}
			},
			// {
			// 	breakpoint: 480,
			// 	settings: {
			// 		fade: true,
			// 	}
			// }
		]
	})
})

$(document).ready(function () {
	$('.pricing__row').slick({
		slidesToShow: 3,
		autoplay: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			},
			{
				breakpoint: 424,
				settings: {
					slidesToShow: 1,
					fade: true
				}
			}
		]
	})
})

//	Scroll to section
const menuList = document.querySelectorAll('.header__menu-link[data-goto]')
if (menuList.length > 0) {
	menuList.forEach(menuLink => {
		menuLink.addEventListener('click', function (element) {
			const menuLinkElement = element.target
			if (menuLinkElement.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoSection = document.querySelector(menuLink.dataset.goto)
				const gotoSectionValue = gotoSection.getBoundingClientRect().top + pageYOffset

				if (menuIcon.classList.contains('_active')) {
					document.body.classList.remove('_lock')
					menuIcon.classList.remove('_active')
					menuBody.classList.remove('_active')
				}

				window.scrollTo({
					top: gotoSectionValue,
					behavior: "smooth"
				})
			} element.preventDefault()
		})
	})
}

//	Menu burger button
const menuIcon = document.querySelector('.header__menu-icon')
const menuBody = document.querySelector('.header__menu-body')
if (menuIcon) {
	menuIcon.addEventListener('click', element => {
		document.body.classList.toggle('_lock')
		menuIcon.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})
}