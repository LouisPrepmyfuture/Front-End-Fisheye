async function getPhotographer() {

	const photographers = await getData()

	const photographer = photographers.photographers.find( photographer => photographer.id == getUrlId())
	const medias = photographers.media.filter( function (el)
	{
		return el.photographerId == getUrlId()
	})

	return {photographer, medias }
}

// affiche toute le photographe
async function displayData(photographer) {
	const photographersSection = document.querySelector('.photograph-header')
	const photographerModel = photographerFactory(photographer)    
	const useDOM = photographerModel.getUseDOM()
	photographersSection.appendChild(useDOM)
}

// affiche toute les photos du photographe
async function displayDataMedia(photographer, optionTri = 'date') {
				
	const mediaSection = document.querySelector('.media_section')
	let pathImg

	pathImg = photographer.photographer.name.substring(0, photographer.photographer.name.indexOf(' '))
	pathImg = pathImg.replace(/-/g, ' ')
	pathImg =`assets/photographers/${pathImg}/`
	
	photographer.medias = myFilter(photographer.medias, optionTri)

	photographer.medias.forEach((media) => {
		const photographerModel = mediaFactory(media,pathImg)
		const mediaDOM = photographerModel.getUserCardMediaDOM()
		mediaSection.appendChild(mediaDOM)
	})

}
// affiche le total des like d'un photographe
async function showTotalLink(photographer){
	let likes = 0
	photographer.medias.forEach((media) => {
		likes = likes + media.likes
	})

	const blockLikes = document.querySelector('.likes')
	const blockContent = document.createElement( 'div' )
	const blockLeft = document.createElement( 'span' )
	const blockRight = document.createElement( 'span' )
	const i = document.createElement( 'i' )
	const likesContent = document.createElement( 'span' )

	blockContent.setAttribute('class', 'fixed-contenty')
	i.setAttribute('class', 'heart fas fa-heart')

	likesContent.textContent = likes
	likesContent.setAttribute('id','sumLike')
	blockRight.textContent = photographer.photographer.price + '€/ jour'

	blockLikes.appendChild(blockContent)
	blockLeft.appendChild(i)
	blockLeft.appendChild(likesContent)
	blockContent.appendChild(blockLeft)
	blockContent.appendChild(blockRight)
}

// return un select et écoute un change sur se meme select
function showTrieMedia(photographer){
	const labelSelect = document.createElement('label')
	const selectList = document.createElement('select')
	const trie = document.querySelector('#trie')
	const options =['date','popularite','title']
	labelSelect.textContent += labelSelect.textContent+'Trier par'

	selectList.id = 'selecttrie'
	trie.appendChild(labelSelect)
	trie.appendChild(selectList)
	selectList.setAttribute('role', 'listBox')
	selectList.setAttribute('ariaActivedescendant', 'IDREF')

	for (let i = 0 ;i < options.length ;i++) {
		const option = document.createElement('option')
		option.value = options[i]
		option.text = options[i]
		selectList.appendChild(option)
	}

	selectList.addEventListener('change', () => {
		deleteChild('.media_section')
		displayDataMedia(photographer, selectList.value)
	})
}

// supprime tout les enfants d'un parent 
function deleteChild(parent) {
	let e = document.querySelector(parent)
	let child = e.lastElementChild 
	while (child) {
		e.removeChild(child)
		child = e.lastElementChild
	}
}

// trie selon array par sa date ou popularité ou titre
function myFilter(varArray, trie){
	if(trie == 'date'){
		varArray.sort(function (a, b) {
			return new Date(a.date) - new Date(b.date)
		})
	}else if(trie == 'popularite'){
		varArray.sort(function (a, b) {
			return a.likes - b.likes
		})
	}else if(trie == 'title'){
		return varArray.sort(function (a, b) {
			return  a.title.localeCompare(b.title)
		})
	}
	return varArray
}


async function init() {
	// Récupère les datas des photographes
	const  photographer  = await getPhotographer()

	showTotalLink(photographer)
	displayData(photographer.photographer)
	showTrieMedia(photographer)
	displayDataMedia(photographer)
}

init()