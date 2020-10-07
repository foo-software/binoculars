import CatPicDataInterface from '../../interfaces/CatPicData';
import getCatContent from './getCatContent';

export default (catPicData: CatPicDataInterface) => {
  const caption = catPicData.caption || 'Random Kitty';
  return `
    <h1>Hello world</h1>
    <figure>
      <img class="cat" src="${catPicData.url}" width="${
    catPicData.width
  }" height="${catPicData.height}" alt="${caption}" />
      <figcaption>
        ${caption}
      </figcaption>
    </figure>
    ${getCatContent({
      keyword1: 'ipsum',
      keyword2: 'lorem',
    })}
  `;
};
