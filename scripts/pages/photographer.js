async function getPhotographer() {
  // Penser à remplacer par les données récupérées dans le json
  const photographers = await getData()
  // et bien retourner le tableau photographers seulement une fois
  const photographer = photographers.photographers.find( photographer => photographer.id == getUrlId());
  const medias = photographers.media.filter( function (el)
   {
      return el.photographerId == getUrlId()
   });
  
  return {photographer, medias }
}


console.log(getPhotographer());
async function displayData(photographer) {
  const photographersSection = document.querySelector(".photograph-header");
      const photographerModel = photographerFactory(photographer);    
      const useDOM = photographerModel.getUseDOM();
      photographersSection.appendChild(useDOM);
};


async function displayDataMedia(photographer) {
       
  const mediaSection = document.querySelector(".media_section");
  pathImg = photographer.photographer.name.substring(0, photographer.photographer.name.indexOf(' '));
  pathImg = pathImg.replace(/-/g, ' ');
  pathImg =`assets/photographers/${pathImg}/`;
  
  photographer.medias.forEach((media) => {
      const photographerModel = mediaFactory(media,pathImg);
      const mediaDOM = photographerModel.getUserCardMediaDOM();
      mediaSection.appendChild(mediaDOM);
  });

};

async function countLink(photographer){
  let like = 0;
  photographer.medias.forEach((media) => {
    like = like
  });
}

async function init() {
  // Récupère les datas des photographes
  const  photographer  = await getPhotographer();
  
  displayData(photographer.photographer);
  displayDataMedia(photographer);
};

init()