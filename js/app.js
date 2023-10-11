
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
let currentIndex = 2    

// aggiunedo la classe active alla slide attiva
let currentSlide = itemDOMElements[currentIndex]
currentSlide.classList.add('active')

// carousel controls
const arrowTop = document.querySelector('.carousel .arrow--top')
const arrowBottom = document.querySelector('.carousel .arrow--bottom')
console.dir(arrowTop, arrowBottom)

arrowBottom.addEventListener('click', function () {
	console.log('click bottom')

	console.log(itemDOMElements[currentIndex + 1])

    // prenedere la slide attiva
	// togliere la classe active alla slide attiva
    next.addEventListener ('click', function() {

        items[item_active].classList.remove('active');
        
    
        if ( item_active === arrayPhoto.length-1 ) {
            item_active = 0;
        }
        else {
            item_active++;
        };
    
        items[item_active].classList.add('active');
     
    });    

	// prendere la slide successiva
    const nextDOMElement = document.querySelector('.next');
    console.log(nextDOMElement);
    const carouselDOMElements = document.querySelector('img.carousel__item');
    console.log(itemsDOMElements);

	// aggiungere alla slide successiva la classe active
    let currentActiveCarouselIndex = 0;  
    nextDOMElement.addEventListener("click", function() {
    carouselDOMElements[currentActiveCarouselIndex].classList.remove('active');
        if (currentActiveCarouselIndex < arrayPhoto.length -1){
            currentActiveCarouselIndex++;
        }else {
            currentActiveCarouselIndex = 0;
        }
        console.log(currentActiveCarouselIndex, arrayPhoto.length)
        carouselDOMElement[currentActiveCarouselIndex].classList.add("active")
    }
    ) 

	// incrementare il valore di currentIndex
})

arrowTop.addEventListener('click', function () {
	console.log('click top')
	console.log(itemDOMElements[currentIndex])
})
