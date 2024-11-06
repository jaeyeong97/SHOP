export type Icon = {
  src: string;
  alt: string;
  path: string;
  label: string;
};

export type Slider = {
  id: string;
  img: string;
};

export type Item = {
  id: string;
  name: string;
  price: number;
  color?: string[];
  sale?: string;
  img: string;
  size?: string[];
  sImgs: string[];
};

export type SelectedItem = {
  id: string;
  name: string;
  price: number;
  color?: string[];
  sale?: string;
  img: string;
  size?: string[];
  sImgs: string[];
  selectedSize: string | null;
  selectedColor: string | null;
  quantity: number;
};

export type AddressForm = {
  zonecode: number;
  address: string;
  detailAddress: string;
  addressName: string;
  personName: string;
  phone: string;
};

export type AlertMessage = {
  zonecode: string;
  address: string;
  addressName: string;
  personName: string;
  phone: string;
};
