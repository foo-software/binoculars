import CatPicDataInterface from '../../interfaces/CatPicData';
import getCatContent from './getCatContent';

export default ({
  catPicData,
  h1,
}: {
  catPicData: CatPicDataInterface;
  h1: string;
}) => {
  const caption = catPicData.caption || 'Random Kitty';
  return `
    ${h1 && `<h1>${h1}</h1>`}
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
