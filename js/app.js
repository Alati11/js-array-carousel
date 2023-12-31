
// - creare un array con le foto
let arrayPhoto = [ 
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
]

// dichiararo variabili
const carouselDOMElement = document.querySelector('.carousel'); 
console.log(carouselDOMElement, arrayPhoto); 

// determeniare la lunghezza degli elementi contenuti 
// -crare un ciclo for per concatenare un template
    // -leggere i dati presenti nell'array
    // -concatenare i dati
    // -stampare il risultato della concatenazione
for (let i = 0; i < arrayPhoto.length; i++) {
    console.log(arrayPhoto[i])
	const src = arrayPhoto[i]
   
    const html = `<img class="carousel__item" src="${src}" alt="" />`
	carouselDOMElement.innerHTML = carouselDOMElement.innerHTML + html
}

// recuperando dal DOM tutte le immagini stampate nel ciclo for
const itemDOMElements = document.querySelectorAll('.carousel__item')
console.log(itemDOMElements)

// meorizzando lo stato del carosello (indice della slide attiva)
let currentIndex = 0    

// aggiunedo la classe active alla slide attiva
let currentSlide = itemDOMElements[currentIndex]
currentSlide.classList.add('active')

// carousel controls
const arrowTop = document.querySelector('.carousel .arrow--top')
const arrowBottom = document.querySelector('.carousel .arrow--bottom')
console.dir(arrowTop, arrowBottom)

arrowBottom.addEventListener('click', function () {
	console.log('click bottom')


    // prenedere la slide attiva
	// togliere la classe active alla slide attiva

    // loop
        const activeSlideElement = itemDOMElements[currentIndex]
	    activeSlideElement.classList.remove('active')
   

        if ( currentIndex === arrayPhoto.length-1 ) {
            currentIndex = 0
        }
        else {
            currentIndex++;
        };
    
        // prendere la slide successiva
        const nextSlideElement = itemDOMElements[currentIndex]

	// aggiungere alla slide successiva la classe active
	    nextSlideElement.classList.add('active')
    });    


        arrowTop.addEventListener('click', function () {
	    console.log('click top')

        const activeSlideElement = itemDOMElements[currentIndex]
	    activeSlideElement.classList.remove('active')

	    if (currentIndex === 0) {
		currentIndex = itemDOMElements.length - 1
	    } else {
		currentIndex--
	    }

	    const nextSlideElement = itemDOMElements[currentIndex]
	    nextSlideElement.classList.add('active')

})
