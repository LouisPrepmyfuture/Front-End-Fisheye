function displayModal() {
	const modal = document.getElementById('contact_modal')
	const main = document.getElementById('main')
	const preview = document.getElementById('preview')
	preview.focus()
	modal.setAttribute('aria-hidden', 'false')
	main.setAttribute('aria-hidden', 'true')
	main.classList.add('no-sroll')
	modal.style.display = 'block'
	
}

function closeModal() {
	const modal = document.getElementById('contact_modal')
	const main = document.getElementById('main')
	modal.setAttribute('aria-hidden', 'true')
	main.setAttribute('aria-hidden', 'false')
	main.classList.remove('no-sroll')
	modal.style.display = 'none'
}


function submitModal(event){
	event.preventDefault()
	const mediaSection = document.querySelector('.inputModal')

	if(ModalValidater() === true){
		console.log(mediaSection.value)
		closeModal()
	}else{
		return false
	}
}

function ModalValidater(){
	let first = document.getElementById('first-name')
	let last = document.getElementById('last-name')
	let email = document.getElementById('email')

	let message = document.getElementById('message')

	let reguliareEmail = /^(([^<>()[]\.,:s@]+(.[^<>()[]\.,:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
	let reguliaretxt = /[a-zA-Z]/

	let nbError = 0

	const formDatas = document.querySelectorAll('.formData')

	for(let i = 0;formDatas.length > i ;i++){
		cleanErrorForm(formDatas[i])
	}


	if(!first.value || first.value.length < 1 ){
		showErrorForm(first, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom')
		nbError++
	} else if(!reguliaretxt.test(first.value)){
		showErrorForm(first, 'Le prénom n\'est pas valide')
		nbError++
	}

	if(!last.value || last.length < 1 ){
		showErrorForm(last, 'Veuillez entrer 2 caractères ou plus pour le champ du nom')
		nbError++
	} else if(!reguliaretxt.test(last.value)){
		showErrorForm(last, 'Le Nom n\'est pas valide')
		nbError++
	}
   
	if(!email.value){
		showErrorForm(email, 'Vous devez entrer votre date de naissance.')
		nbError++
	}else if(!reguliareEmail.test(email.value)){
		showErrorForm(email, ' L\'adresse mail n\'est pas valide')
		nbError++
	}     


	if(!message.value || message.length < 10 ){
		showErrorForm(message, 'Veuillez entrer 10 caractères ou plus dans le champ Message')
		nbError++
	} else if(!reguliaretxt.test(message.value)){
		showErrorForm(message, 'Le Nom n\'est pas valide')
		nbError++
	}


	if(nbError > 0){
		return false
	}else{
		console.log('formulaire envoyé')
	}
	return  true
}

// affiche les erreuur du formulaire
function showErrorForm(element, message) {
	element.parentNode.dataset.error = message  
	element.parentNode.dataset.errorVisible = 'true'  
	element.parentNode.classList.add('erreur')
}

function cleanErrorForm(element) {
	element.dataset.error = ''  
	element.dataset.errorVisible = 'false'  
	element.classList.remove('erreur')
}
  


