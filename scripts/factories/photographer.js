function photographerFactory(data) {

	const { name, portrait, country, city, tagline, price, id } = data
	const picture = `assets/photographers/${portrait}`
	const link = `photographer.html?id=${id}`

	// Affiche les Medias dans des cards link
	function getUserCardDOM() {
		const article = document.createElement('article')
		const a = document.createElement('a')
		const img = document.createElement('img')
		const p = document.createElement('p')
		const p2 = document.createElement('p')
		const span = document.createElement('span')
		const h2 = document.createElement('h2')


		img.setAttribute('src', picture)
		img.setAttribute('alt', 'image de profil du photographe')
		a.setAttribute('href', link)
		a.setAttribute('aria-label', 'lien vers la page du photographe' + name +'')

		h2.textContent = name
		span.textContent = country + ', ' + city
		p.textContent = tagline
		p2.textContent = price + '/jour'

		article.appendChild(a)
		a.appendChild(img)
		a.appendChild(h2)
		article.appendChild(span)
		article.appendChild(p)
		article.appendChild(p2)
		return (article)
	}

	// crée l'html des infos du photographe sur la page photographer 
	function getUseDOM() {
		const content = document.createElement('div')
		const div = document.createElement('div')
		const h1 = document.createElement('h1')
		const span = document.createElement('span')
		const p = document.createElement('p')
		const button = document.createElement('button')
		const img = document.createElement('img')

		h1.textContent = name
		span.textContent = country + ', ' + city
		p.textContent = tagline
		button.textContent = 'Contactez-moi'


		content.setAttribute('class', 'content-photographer')
		button.setAttribute('class', 'contact_button')
		img.setAttribute('src', picture)
		img.setAttribute('alt', 'Photo de du photographe')
		

		content.appendChild(div)
		div.appendChild(h1)
		div.appendChild(span)
		div.appendChild(p)

		content.appendChild(button)
		content.appendChild(img)
		
		button.addEventListener('click',()=>{
			displayModal()
		})
		return content
	}


	return { name, picture, getUserCardDOM, getUseDOM }
}