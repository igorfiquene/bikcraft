function accodion() {
	const titles = document.querySelectorAll('dt')
	
	Array.prototype.map.call(titles, (title) => {
		title.addEventListener('click', toggleClass)
	})

	function toggleClass(element) {
		const { srcElement } = element
		const elementSibling = srcElement.nextElementSibling
		
		elementSibling.classList.toggle('--active')
	}


}

accodion()