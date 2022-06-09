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
    return { name, picture, getUserCardDOM }
}