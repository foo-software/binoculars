import Element from './Element';
import MetaElement from './MetaElement';

export default interface Artifacts {
  Elements?: Element[];
  MetaElements?: MetaElement[];
  TitleElement?: Element;
}
