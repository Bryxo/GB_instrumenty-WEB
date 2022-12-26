import img_1 from '../../media/images/1.jpg'
import img_2 from '../../media/images/2.jpg'
import img_3 from '../../media/images/3.jpg'
import img_4 from '../../media/images/4.gif'

const gallery = [
   { image: img_1, title: 'Мельница у реки' },
   { image: img_2, title: 'Горы осенью' },
   { image: img_3, title: 'Деревья летом' },
   { image: img_4, title: 'Котик' },
];

const renderGalleryItem = (image = image_1, title = "Мельница у реки") =>
   `<article class="gallery__item">
   <div class="gallery__img">
      <img class="gallery__img-card" src=${image} alt="${title}">
      <div class ="gallery__overlay">
      </div>
   </div>
   <div class="gallery__content-title">
      <h3 class="gallery__title">${title}</h3>
   </div>
</article>`;


const renderGalleryList = (list) => {
   let galleryList = list.map(item => renderGalleryItem(item.image, item.title)).join('');
   document.querySelector('.gallery__items').innerHTML = galleryList;

}

renderGalleryList(gallery);

