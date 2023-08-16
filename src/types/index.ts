import { CustomStepperEnum } from '../enam';
import { ReactNode } from 'react';

export interface IDataTable {
  arr?: any[];
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface AccountPagesState {
  status: number;
  count: CustomStepperEnum;
  globalArrayAccount: IProduct[];
}

export interface IButtonProps {
  text: string;
  handleClick: () => void;
}
export interface IMainContain {
  children?: ReactNode;
  step: CustomStepperEnum;
}
