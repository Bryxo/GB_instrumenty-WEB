import audio_1 from '../../media/audio/1.mp3'
import audio_2 from '../../media/audio/2.mp3'
import audio_3 from '../../media/audio/3.mp3'


const songs = [
   { audio: audio_1, title: 'Пение птиц' },
   { audio: audio_2, title: 'Пение птиц (Ручей)' },
   { audio: audio_3, title: 'Звуки леса' },

];

const renderMediaItem = (audio = audio_1, title = "Пение птиц") =>
   `<article class="gallery__item">
   <audio controls class="gallery__audio">
   <source src="${audio}" type="audio/mpeg">
   </audio>
   <div class="gallery__content-title">
      <h3 class="gallery__title">${title}</h3>
   </div>
</article>`;


const renderMediaList = (list) => {
   let mediaList = list.map(item => renderMediaItem(item.audio, item.title)).join('');
   document.querySelector('.gallery__items').insertAdjacentHTML('beforeend', mediaList)

}

renderMediaList(songs);



