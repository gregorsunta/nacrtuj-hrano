import { makeAutoObservable } from 'mobx';
import { fetchProducts } from '../services/api/Products';

class ProductStore {
  constructor() {
    makeAutoObservable(this);
  }
  products: [object] | [] = [];

  setProducts = (products: [object]) => {
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
