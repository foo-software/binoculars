import Element from './Element';
import ImageElement from './ImageElement';

export default interface Elements {
  body?: Element[];
  h1?: Element[];
  h2?: Element[];
  img?: ImageElement[];
  li?: Element[];
  p?: Element[];
  table?: Element[];
}
