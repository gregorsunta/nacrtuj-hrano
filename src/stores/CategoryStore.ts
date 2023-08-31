import { makeAutoObservable } from 'mobx';
import { fetchCategories } from '../services/api/Categories';

export interface ICategoryStore {
  getCategories: () => void;
  toggleCategoryExpandedProperty: (name: string) => void;
  toggleSubcategoryCheckedProperty: (name: string) => void;
  categories: ICategory[];
}

export interface ICategory {
  name: string;
  subcategories: ISubCategory[];
  expanded: boolean;
}

export interface ISubCategory {
  name: string;
  checked: boolean;
}

class CategoryStore implements ICategoryStore {
  constructor() {
    makeAutoObservable(this);
  }
  categories: ICategory[] = [];

  setCategories = (categories: ICategory[]) => {
    this.categories = categories;
  };

  getCategories = async () => {
    const { categories } = await fetchCategories();
    this.setCategories(
      categories.map((category) => ({
        name: category.name,
        expanded: false,
        subcategories: category.subcategoryids.map((id: string) => ({
          name: id,
          checked: false,
        })),
      })),
    );
  };

  findCategoryIndexByName = (searchName: string) => {
    return this.categories.findIndex(({ name }) => searchName === name);
  };

  toggleCategoryExpandedProperty = (categoryname: string) => {
    const index = this.findCategoryIndexByName(categoryname);
    const isExpanded = this.categories[index]?.expanded;
    this.categories[index].expanded = !isExpanded;
  };

  toggleSubcategoryCheckedProperty = (subcategoryName: string) => {
    const modifiedCategories = this.categories.map((category) => {
      return {
        ...category,
        subcategories: category.subcategories.map((subcategory) =>
          subcategoryName === subcategory.name
            ? { ...subcategory, checked: !subcategory.checked }
            : subcategory,
        ),
      };
    });
    this.setCategories(modifiedCategories);
  };
}

const categoryStore = new CategoryStore();

export { categoryStore };
