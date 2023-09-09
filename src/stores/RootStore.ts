import { FilterStore, ProductStore, CategoryStore, NotificationStore } from '.';
import { ICategoryStore } from './CategoryStore';
import { IFilterStore } from './FilterStore';
import { IProductStore } from './ProductStore';
import { INotificationStore } from './NotificationStore';

export interface IRootStore {
  productStore: IProductStore;
  filterStore: IFilterStore;
  categoryStore: ICategoryStore;
  notificationStore: INotificationStore;
}

class RootStore implements IRootStore {
  constructor() {
    this.filterStore = new FilterStore(this);
    this.productStore = new ProductStore(this);
    this.categoryStore = new CategoryStore(this);
    this.notificationStore = new NotificationStore(this);
  }
  productStore: IProductStore;
  filterStore: IFilterStore;
  categoryStore: ICategoryStore;
  notificationStore: INotificationStore;
}

const rootStore = new RootStore();
export { rootStore };
