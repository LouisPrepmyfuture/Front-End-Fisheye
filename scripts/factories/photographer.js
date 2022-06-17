function photographerFactory(data) {
   
    const { name, portrait, country, city, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;
    const link = `photographer.html?id=${id}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
        const img = document.createElement( 'img' );
        const p =  document.createElement( 'p' );
        const p2 =  document.createElement( 'p' );
        const span =  document.createElement( 'span' );
        const h2 = document.createElement( 'h2' );


        img.setAttribute("src", picture)
        a.setAttribute("href", link)
        
        h2.textContent = name;
        span.textContent = country + ", " + city;
        p.textContent = tagline;
        p2.textContent = price + "/jour";

        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(span);
        article.appendChild(p);
        article.appendChild(p2);
        return (article);
    }

    function getUseDOM() {
        const content = document.createElement( 'div' );
        const div = document.createElement( 'div' );
        const h1 = document.createElement( 'h1' );
        const span =  document.createElement( 'span' );
        const p =  document.createElement( 'p' );
        const button =  document.createElement( 'button' );
        const img = document.createElement( 'img' );

        h1.textContent = name;
        span.textContent =country +", "+ city;
        p.textContent = tagline;
        button.textContent = "Contactez-moi";

        
        content.setAttribute("class", "content-photographer");
        button.setAttribute("class", "contact_button");
        button.setAttribute("onclick", "displayModal()");
        img.setAttribute("src", picture);
        img.setAttribute("all", "Photo de du photographe");

        content.appendChild(div)
        div.appendChild(h1);
        div.appendChild(span);
        div.appendChild(p);

        content.appendChild(button);
        content.appendChild(img);

        
    
        return content
    }
        

    return { name, picture, getUserCardDOM , getUseDOM}
}