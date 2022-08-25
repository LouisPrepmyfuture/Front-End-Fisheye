
function mediaFactory(data, pathImg) {
	const { id, photographerId, title, image, date, price, video } = data
	let {likes} = data 
	let media, mediaBlock
	const link = `photographer.html?id=${id}`

 
	function getUserCardMediaDOM(){
		const card = document.createElement( 'div' )
		const body = document.createElement( 'div' )
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
		mediaBlock.setAttribute('id', 'media-'+card_id)
		mediaBlock.setAttribute('onclick', 'showLightbox('+card_id+')')

		card.setAttribute('class', 'card lightbox')
		body.setAttribute('class', 'card-body')
		i.setAttribute('class', 'like heart fas fa-heart')
		h2.textContent = title
		like.textContent = likes
		like.setAttribute('class', 'btn-like')

		card.appendChild(mediaBlock)
		card.appendChild(body)
		body.appendChild(h2)
		body.appendChild(like)
		like.appendChild(i)
			
			
			
		like.addEventListener('click', function clickLike(e) {
			e.stopImmediatePropagation()
			likes += 1
			like.innerHTML = likes
			like.appendChild(i)
			getSumLikes(i)
			like.removeEventListener('click', clickLike)
		})

		return card
	}

	function getSumLikes(i) {
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