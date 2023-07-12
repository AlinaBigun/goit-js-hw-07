import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryUl = document.querySelector(".gallery")
galleryUl.insertAdjacentHTML("beforeend", createGallery(galleryItems));

function createGallery(items) {
    return items
        .map(({original,preview,description}) =>
            `<li class="gallery__item">
  <a class="gallery__link" href = "${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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

const modalEl = e.target.dataset.source;
const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${modalEl}"width ="1200" height ="800">
    </div>
`)

    instance.show()





}
