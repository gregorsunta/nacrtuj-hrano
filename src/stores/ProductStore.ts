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
  date: string;
}

export interface IProductStore {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  getProducts: (variables: {
    categories: string[];
    page: number;
    pageSize: number;
    shops: string[];
  }) => void;
  clearProducts: () => void;
}

class ProductStore implements IProductStore {
  constructor() {
    makeAutoObservable(this);
  }
  products: IProduct[] | [] = [];

  clearProducts = () => {
    this.products = [];
  };

  setProducts = (products: IProduct[]) => {
    this.products = products;
  };

  getProducts = async (variables: {
    categories: string[];
    page: number;
    pageSize: number;
    shops: string[];
  }) => {
    if (!variables.categories[0]) {
      console.info('Categories empty, aborting getProducts');
      return;
    }
    const { products } = await fetchProducts(variables);
    this.setProducts(products);
  };
}

const productStore = new ProductStore();

export { productStore };
