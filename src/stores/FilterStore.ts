import { makeAutoObservable } from 'mobx';

export interface IFilterStore {
  shopFilter: string[];
  subcategoryFilter: string[];
  toggleShopFilter(filter: string): void;
  toggleSubcategoryFilter(filter: string): void;
}

class FilterStore implements IFilterStore {
  constructor() {
    makeAutoObservable(this);
  }
  shopFilter: string[] = [
    'Tuš',
    'Spar',
    'Eurospin',
    'Hofer',
    'Lidl',
    'Mercator',
  ];
  subcategoryFilter: string[] = [];

  setShopFilter = (shopFilter: string[]) => {
    this.shopFilter = shopFilter;
  };

  setCategoryFilter = (subcategoryFilter: string[]) => {
    this.subcategoryFilter = subcategoryFilter;
  };

  toggleShopFilter = (filter: string) => {
    if (this.shopFilter.includes(filter)) {
      const leftover = this.shopFilter.filter((name) => name !== filter);
      this.setShopFilter(leftover);
    } else {
      this.shopFilter.push(filter);
    }
  };

  toggleSubcategoryFilter = (filter: string) => {
    if (this.subcategoryFilter.includes(filter)) {
      const leftover = this.subcategoryFilter.filter((name) => name !== filter);
      this.setCategoryFilter(leftover);
    } else {
      this.subcategoryFilter.push(filter);
    }
  };
}

const filterStore = new FilterStore();
export { filterStore };
