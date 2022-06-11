
import { galleryItems } from './gallery-items.js';
// Change code below this line





const paletteContainer = document.querySelector(".gallery");
const cardsMarkup = createGallery(galleryItems);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup)

paletteContainer.addEventListener('click', onPaletteContainerClick);

function createGallery(galleryItems) {
    
    return galleryItems
        .map(({ preview, description, original }) => {
            return `
        <li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `;
        })
        .join('');
    

}



function onPaletteContainerClick (event) {
    const link = getLinkOriginalImage(event);

    var lightbox =  new SimpleLightbox('.gallery .gallery__item', {link});
    lightbox.show(window.addEventListener('keydown', isEscapeDown));
    function isEscapeDown (evt) {
        if (evt.code === 'Escape'){
            lightbox.close(window.removeEventListener('keydown', isEscapeDown));        
        } if (evt.code === 'click') {
            lightbox.close(window.removeEventListener('keydown', isEscapeDown));  
        }
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
