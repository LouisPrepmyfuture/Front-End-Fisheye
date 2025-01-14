
function mediaFactory(data, pathImg) {

	const { title, image, video } = data
	let {likes} = data 
	let media, mediaBlock


	//crée une carde
	function getUserCardMediaDOM(){
		const card = document.createElement( 'div' )
		const body = document.createElement( 'div' )
		const content_media = document.createElement( 'button' )
		const h2 = document.createElement( 'h2' )
		const like = document.createElement( 'a' )
		const i = document.createElement( 'i' )
		
		
		const card_id = document.querySelectorAll('.card').length

		if(video != null){
			media = pathImg + video
			mediaBlock = document.createElement( 'video' )
		}else{
			media = pathImg + image
			mediaBlock = document.createElement( 'img' )
		}
			
		mediaBlock.setAttribute('src', media)

		mediaBlock.setAttribute('id', 'media-'+card_id)
		h2.setAttribute('id', 'media-title-'+card_id)
		content_media.setAttribute('onclick', 'showLightbox('+card_id+')')
		
		content_media.setAttribute('class', 'card-content')
		card.setAttribute('class', 'card lightbox')
		body.setAttribute('class', 'card-body')
		i.setAttribute('class', 'like heart fas fa-heart')

		h2.textContent = title
		like.textContent = likes			
		like.setAttribute('aria-label','likes')
		like.setAttribute('href',' ')
		like.setAttribute('class', 'btn-like')

		card.appendChild(content_media)
		content_media.appendChild(mediaBlock)

		card.appendChild(body)
		body.appendChild(h2)
		body.appendChild(like)
		like.appendChild(i)
			
			
		// Ajoute un like 
		like.addEventListener('click', function clickLike(e) {
			e.preventDefault()
			e.stopImmediatePropagation()
			likes += 1
			like.innerHTML = likes
			like.appendChild(i)
			getSumLikes(i)
			like.removeEventListener('click', clickLike)
		})

		return card
	}

	//adissionne tout les like  
	function getSumLikes() {
		const likesDomList = document.querySelectorAll('.btn-like')
		let sum = 0

		likesDomList.forEach((domElem) => {
			const likeadd = parseInt(domElem.textContent)
			sum = sum + likeadd
		})
		const likesContainer = document.querySelector('#sumLike')
		likesContainer.innerHTML = sum
	}

	return {getUserCardMediaDOM}
	
}