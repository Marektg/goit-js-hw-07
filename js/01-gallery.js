import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");
// tworzenie galerii
const photo = galleryItems.map((image) => `<div class="gallery__item">
  <a class="gallery__link" href=${image.original}>
    <img
      class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt="${image.description}"
    />
  </a>
</div>`).join("");

list.insertAdjacentHTML("beforeend", photo);

list.addEventListener("click", (event) => {
    event.preventDefault();
    modal(event);
})
// list.addEventListener("keydown", (event) =>zamknij(event));
function modal(event) {

    const adress = event.target.dataset.source;
    console.log(adress);
    const desc = event.target.alt;
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src=${adress} alt=${desc}>
    </div>
`);
    instance.show();
    
}
// function zamknij(event) {
  

//   if (event.key === "Escape") {
//     const modalWindow = document.querySelectorAll("div.modal");
//     console.log(modalWindow);
//     // const mod = modalWindow[0];
//     modalWindow.close(); 
//   }
// }
console.log(galleryItems);
