import video_1 from '../../media/vid/1.mp4'
import video_2 from '../../media/vid/2.mp4'



const media = [
   { video: video_1, title: 'Christmas' },
   { video: video_2, title: 'Girls' },

];

const renderMediaItem = (video = video_1, title = "Christmas") =>
   `<article class="gallery__item">
   <video class="gallery__video" controls="controls">
               <source src="${video}" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
            </video>
   <div class="gallery__content-title">
      <h3 class="gallery__title">${title}</h3>
   </div>
</article>`;


const renderMediaList = (list) => {
   let mediaList = list.map(item => renderMediaItem(item.video, item.title)).join('');
   document.querySelector('.gallery__items').insertAdjacentHTML('beforeend', mediaList)

}

renderMediaList(media);



