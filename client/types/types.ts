export interface IBookProps {
  id: string;
  title: string;
  desc: string;
  cover: string;
  price: number;
}

export interface IBooksProps {}
export interface IAddProps {}
export interface IUpdateProps {}

export interface Props {
  src: string;
  alt: string;
  otherProp?: any;
}
