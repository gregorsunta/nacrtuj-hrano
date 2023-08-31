import { makeAutoObservable } from 'mobx';
import { fetchProducts } from '../services/api/Products';

export interface IProduct {
  novo_ime: string;
  prices: Price[];
  id_slika: string;
}

export interface Price {
  enota: string;
  redna_cena_na_kilogram_liter: string;
  trgovina: string;
}

export interface IProductStore {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  getProducts: (variables: {
    categories: string[];
    page: number;
    pageSize: number;
  }) => void;
}

class ProductStore implements IProductStore {
  constructor() {
    makeAutoObservable(this);
  }
  products: IProduct[] | [] = [];

  setProducts = (products: IProduct[]) => {
    this.products = products;
  };

  getProducts = async (variables: {
    categories: string[];
    page: number;
    pageSize: number;
  }) => {
    const { productsByCategories } = await fetchProducts(variables);
    this.setProducts(productsByCategories);
  };
}

const productStore = new ProductStore();

export { productStore };
