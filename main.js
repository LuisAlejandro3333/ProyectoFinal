const api_url_trending = `https://api.giphy.com/v1/gifs/trending?api_key=t2xmSJ9UhIzYgKzWOhfK6oWFk5V0cQ2B`;
const api_url_search = `https://api.giphy.com/v1/gifs/search`;
let buscar = "?q=";
const apikey = `d0enPboUaYVoSYhIjpuFSZWPlwNX0VMg`;

let q = "";
urlCompleta ="";
let pagina = 1;


let observador = new IntersectionObserver((entradas, observador) => { 
    entradas.forEach(entradas => { 
        if (entradas.isIntersecting) { 
            pagina++;
            traerDestacados();
        }
}) 
},{
    rootMargin: `0px, 0px 50px 0px`,
    threshold: 1.0

})
    

const traerDestacados = async () => {
    await fetch(api_url_trending).then ((Response) => {
        return Response.json();
    }).then((giphy) => {
        console.log(giphy);

        for(let i = 0; i <giphy.data.length; i++){
            const gif = document.createElement("img");
            gif.src = giphy.data[i].images["original"].url;
            document.getElementById("galeria").appendChild(gif);
        }
    })
    const gifsEnPantalla = document.querySelectorAll(`#galeria img`);
    let ultimoGif = gifsEnPantalla[gifsEnPantalla.length - 1];
    observador.observe(ultimoGif)
}
traerDestacados();

const boton = document.getElementById("boton");
boton.onclick = () => {
    document.getElementById('galeria').innerHTML = "";
    q = document.getElementById('search').value;
    urlCompleta = api_url_search + buscar + q + apikey;
    getData();
}
boton.onclick = () => { 
    searchValue();
}
// scroll infinito a los Gifs de la busqueda
let observador2 = new IntersectionObserver((entradas, observador) => { 
    entradas.forEach(entradas => {
        if (entradas.isIntersecting) {
            pagina++;
            getData();
        }
}) 
},{
    rootMargin: `0px, 0px 50px 0px`,
    threshold: 1.0

})
//Buscamos l que deseamos

const getData = async () => {
    try { 
    await fetch(urlCompleta).then ((response) => {
        return response.json();
    }).then((giphy) => {
        console.log(giphy);
    })

    for(let i = 0; i <giphy.data.length; i++){
        const gif = document.createElement("img");
        gif.src = giphy.data[i].images["original"].url;
        document.getElementById("galeria").appendChild(gif);
    }

const gifsEnPantalla = document.querySelectorAll(`#galeria img`);
let ultimoGif = gifsEnPantalla[gifsEnPantalla.length - 1];
observador.observe(ultimoGif)
} catch (e) { 
    document.getElementsById(`galeria`).innerHTML = "<b style=`color:yellow`>Su busqueda no tiene resultado";
} 

    // Ultimas busquedas
    const enviarvalor = (search) => {
        document.getElementById("galeria").innerHTML ="";
        q = document.getElementById("search").value;
        
        //esta linea de busqueda infinita
        if (q == "") {
            q= document.getElementById("search2").value;
        }
        urlCompleta = epi_url_search + buscar + q +apikey
        getData();
    }}
