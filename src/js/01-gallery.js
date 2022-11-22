// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');

const galleryCard = creatGalleryItemCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCard);

function creatGalleryItemCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join(' ');
}

const gallery = new SimpleLightbox('.gallery a', {
  sourceAttr: 'href',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
// Change code below this line

console.log(galleryItems);
