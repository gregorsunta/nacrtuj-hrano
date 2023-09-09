import { action, autorun, makeObservable, observable, toJS } from 'mobx';
import { fetchProducts } from '../services/api/Products';
import { IRootStore } from './RootStore';

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
  rootStore: IRootStore;
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
  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      products: observable,
      rootStore: observable,
      clearProducts: action,
      setProducts: action,
      getProducts: action,
    });

    autorun(() => {
      this.clearProducts();
      void this.getProducts({
        categories: toJS(rootStore.filterStore.subcategoryFilter),
        page: 1,
        pageSize: 25,
        shops: toJS(rootStore.filterStore.shopFilter),
      });
    });
  }

  products: IProduct[] | [] = [];
  rootStore: IRootStore;

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

// const productStore = new ProductStore(rootStore);

export { ProductStore };
