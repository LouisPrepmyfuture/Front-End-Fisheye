function mediaFactory(data, pathImg) {
  const { id, photographerId, title, image, likes, date, price } = data;
  console.log(pathImg)
  const picture = pathImg + image ;
  const link = `photographer.html?id=${id}`;


  function getUserCardMediaDOM(){
    const card = document.createElement( 'div' );
    const img = document.createElement( 'img' );
    const body = document.createElement( 'div' );
    const h2 = document.createElement( 'h2' );
    const a = document.createElement( 'a' );
    const i = document.createElement( 'i' );

    
    card.setAttribute("class", "card")
    img.setAttribute("src", picture);
    body.setAttribute("class", "card-body");
    i.setAttribute("class", "heart fas fa-heart");
    h2.textContent = title;
    a.textContent = likes;

    card.appendChild(img);
    card.appendChild(body);
    body.appendChild(h2);
    body.appendChild(a);
    a.appendChild(i);
    

    return card;
  }

  return {getUserCardMediaDOM}
  
}