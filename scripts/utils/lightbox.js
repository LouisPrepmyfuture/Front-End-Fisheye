// Open the Modal
function open_lightbox_modal() {
	document.getElementById('lightbox_modal').style.display = 'flex'
}

// Close the Modal
function close_lightbox_modal() {
	let content = document.getElementById('content')
	content.removeChild(content.firstChild)
	document.getElementById('lightbox_modal').style.display = 'none'
} 



function next_lightbox() {
	let total_media = document.querySelectorAll('.card').length - 1
	let index_modal = parseInt(document.querySelector('.media-lightbox').id.split('-')[1])
	let next_index

	if(index_modal == total_media ){
		showLightbox(0)
	}else{
		next_index = index_modal + 1
		showLightbox(next_index)
	}
}


function preview_lightbox() {
	let total_media = document.querySelectorAll('.card').length - 1
	let index_modal = parseInt(document.querySelector('.media-lightbox').id.split('-')[1])
	let preview_index

	if(index_modal == 0 ){
		showLightbox(total_media)
	}else{
		preview_index =  index_modal - 1
		showLightbox(preview_index)
	}
}

function showLightbox(n) {
	let content = document.getElementById('content')
	let htmlMedia = document.querySelector('#media-'+n)
	if(content.firstChild){
		content.removeChild(content.firstChild)
	}else{
		open_lightbox_modal()
	}
	let cloneHtmlMedia = htmlMedia.cloneNode(false)
	cloneHtmlMedia.setAttribute('class','media-lightbox')
	content.appendChild(cloneHtmlMedia)
}