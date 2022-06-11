import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const paletteContainer = document.querySelector(".gallery");
const cardsMarkup = createGallery(galleryItems);
console.log(cardsMarkup);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup)

paletteContainer.addEventListener('click', onPaletteContainerClick);

function createGallery(galleryItems) {
    
    return galleryItems
        .map(({ preview, description, original }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
        })
        .join('');
    

}



function onPaletteContainerClick (event) {
    const link = getLinkOriginalImage(event);
    
    const instance = basicLightbox.create(`<img src=${link} width = "800" height ="600">`);

    instance.show(window.addEventListener('keydown', isEscapeDown));
    
    function isEscapeDown (evt) {
        if (evt.code === 'Escape'){
            instance.close(window.removeEventListener('keydown', isEscapeDown));        
        };
    }
}

function getLinkOriginalImage(event) {
    if (event.target.nodeName !== 'IMG'){
        return;
    }
    
    event.preventDefault();
    
    const linkImagePreview = event.target;
    const linkImageOriginal = galleryItems.find(item => item.preview === linkImagePreview.src).original;
    
    return linkImageOriginal;
}

