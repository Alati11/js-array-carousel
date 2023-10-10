
// - creare un array con le foto
let arrayPhoto = [ '01.webp', '02.webp', '03.webp', '04.webp', '05.webp']

// dichiararo variabili
let container = '';
// let itemThumb = '';

// determeniare la lunghezza degli elementi contenuti 
let lunghezzaArray = arrayPhoto.length;

// -crare un ciclo for per concatenare un template
    // -leggere i dati presenti nell'array
    // -concatenare i dati
    // -stampare il risultato della concatenazione
for (let i = 0; i < lunghezzaArray; i++) {
    // console.log(i,);
   
    container += `<div class="item"><img src="./img/${ arrayPhoto[i] }"></div>`;
    // itemThumb += `<div class="thumb"><img src="./img/${ arrayPhoto[i] }"></div>`; 
    console.log(i, container)
}

// const items_slider = document.querySelector('.item-slider').innerHTML = container;
// const items_thumbnails = document.querySelector('.item-thumbnails').innerHTML = item_thumb;