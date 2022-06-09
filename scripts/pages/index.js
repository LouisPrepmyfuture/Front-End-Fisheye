
 async function getData() {
    try{
        let response = await fetch("http://127.0.0.1:5500/data/photographers.json")
        if(response.ok){
            let data = await response.json()
            return data;
        }else{
            console.error('Retour du serveur :', response.status)
        }
    }catch(e){
        console.log(e)
    }
} 


    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = await getData()
        // et bien retourner le tableau photographers seulement une fois
        
        
        return  photographers
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
  

    init();
