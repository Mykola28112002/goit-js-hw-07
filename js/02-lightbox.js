
import { galleryItems } from './gallery-items.js';
// Change code below this line

const paletteContainer = document.querySelector(".gallery");

const listImages = galleryItems
                    .map(item => `<div class='gallery__item'>
                                    <a class="gallery__link" href=${item.original}>
                                        <img class='gallery__image'
                                            src = ${item.preview}
                                            alt = ${item.description}
                                        />
                                    </a>
                                </div>`)
                    .join('');



paletteContainer.innerHTML = listImages;

paletteContainer.addEventListener('click', showModal);

const lightbox = new SimpleLightbox('.gallery a', {captions: true, captionSelector: 'img', captionsData: 'alt', captionDelay: 250});

function showModal(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();
}