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



async function displayData(photographer) {
  const photographersSection = document.querySelector(".photograph-header");
      const photographerModel = photographerFactory(photographer);    
      const useDOM = photographerModel.getUseDOM();
      photographersSection.appendChild(useDOM);
};


async function displayDataMedia(photographer, optionTri = "date") {
       
  const mediaSection = document.querySelector(".media_section");
  pathImg = photographer.photographer.name.substring(0, photographer.photographer.name.indexOf(' '));
  pathImg = pathImg.replace(/-/g, ' ');
  pathImg =`assets/photographers/${pathImg}/`;
  // console.log(photographer.medias)  je comptrent pas
  photographer.medias = myFilter(photographer.medias, optionTri);
  // console.log(photographer.medias)  je comptrent pas

  photographer.medias.forEach((media) => {
      const photographerModel = mediaFactory(media,pathImg);
      const mediaDOM = photographerModel.getUserCardMediaDOM();
      mediaSection.appendChild(mediaDOM);
  });

};

async function showTotalLink(photographer){
  let likes = 0;
  photographer.medias.forEach((media) => {
    likes = likes + media.likes
  });

  const blockLikes = document.querySelector(".likes");
  const blockContent = document.createElement( 'div' );
  const blockLeft = document.createElement( 'span' );
  const blockRight = document.createElement( 'span' );
  const i = document.createElement( 'i' );
  const likesContent = document.createElement( 'span' );

  blockContent.setAttribute("class", "fixed-contenty")
  i.setAttribute("class", "heart fas fa-heart");

  likesContent.textContent = likes;
  likesContent.setAttribute("id","sumLike");
  blockRight.textContent = photographer.photographer.price + "€/ jour"

  blockLikes.appendChild(blockContent)
  blockLeft.appendChild(i)
  blockLeft.appendChild(likesContent)
  blockContent.appendChild(blockLeft)
  blockContent.appendChild(blockRight)
}

function showTrieMedia(photographer){
  const selectList = document.createElement('select');
  const tri = document.querySelector("#tri");
  const options =["date","popularite","title"]

  selectList.id = "selectTri";
  tri.appendChild(selectList);

  for (var i = 0; i < options.length; i++) {
    const option = document.createElement("option");
    option.value = options[i];
    option.text = options[i];
    selectList.appendChild(option);
  }

  selectList.addEventListener("change", () => {
    console.log(selectList.value);
    deleteChild(".media_section");
    displayDataMedia(photographer, selectList.value);
  });
}

function deleteChild(parent) {
  let e = document.querySelector(parent);
  
  //e.firstElementChild can be used.
  var child = e.lastElementChild; 
  while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
  }
}


function myFilter(varArray, trie){
 if(trie == "date"){
  varArray.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
 }else if(trie == "popularite"){
  varArray.sort(function (a, b) {
    return a.likes - b.likes;
  });
 }else if(trie == "title"){
  return varArray.sort(function (a, b) {
    return  a.title.localeCompare(b.title)
  });
 }
 return varArray
}


async function init() {
  // Récupère les datas des photographes
  const  photographer  = await getPhotographer();
  
  showTotalLink(photographer)
  displayData(photographer.photographer);
  showTrieMedia(photographer)
  displayDataMedia(photographer);
};

init()