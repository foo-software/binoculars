import Element from './Element';
import Elements from './Elements';
import MetaElement from './MetaElement';

export default interface Artifacts {
  Elements?: Elements;
  MetaElements?: MetaElement[];
  TitleElement?: Element;
}
