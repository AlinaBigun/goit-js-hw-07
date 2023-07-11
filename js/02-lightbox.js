import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUl = document.querySelector(".gallery")
galleryUl.insertAdjacentHTML("beforeend", createGallery(galleryItems));

function createGallery(items) {
    return items
        .map(({original,preview,description}) =>
           `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
</li>`).join("")
}
 galleryUl.addEventListener("click", onImageClick);

function onImageClick(e) {
    e.preventDefault();
    const elNodeName = e.target.nodeName;
    if (elNodeName !== `IMG`) {
        return;
    }

}

//--SimpleLightBox--//
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

