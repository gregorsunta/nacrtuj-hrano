import { makeAutoObservable, toJS } from 'mobx';
import { fetchCategories, fetchCategory } from '../services/api/Categories';

export interface ICategoryStore {
  fetchAndSetCategories: () => Promise<void>;
  // toggleCategoryExpandedProperty: (name: string) => void;
  // toggleSubcategoryCheckedProperty: (name: string) => void;
  categoryExists: (id: number) => boolean;
  categories: ICategory[];
  getCategory: (id: number) => ICategory | undefined;
  fetchAndSetCategory: (id: number) => Promise<void>;
}

export interface ICategory {
  id: number;
  name: string;
  subcategories: string[];
}

class CategoryStore implements ICategoryStore {
  constructor() {
    makeAutoObservable(this);
  }
  categories: ICategory[] = [];

  addCategory = (category: ICategory) => {
    this.categories.push(category);
  };

  setCategories = (categories: ICategory[]) => {
    this.categories = categories;
  };

  fetchAndSetCategories = async (): Promise<void> => {
    const { categories } = await fetchCategories();
    this.setCategories(categories);
  };

  fetchAndSetCategory = async (id: number): Promise<void> => {
    const { category } = await fetchCategory({ id: id });
    this.addCategory(category);
  };

  getCategory = (id: number): ICategory | undefined => {
    return toJS(this.categories.find((category) => category.id === id));
  };

  categoryExists = (id: number): boolean => {
    return this.categories.some((category) => category.id === id);
  };

  findCategoryIndexByName = (searchName: string): number => {
    return this.categories.findIndex(({ name }) => searchName === name);
  };

  // getSubCategories = (parentCategoryName: string): string[] | undefined => {
  //   return this.categories.find(
  //     (category) => category.name === parentCategoryName,
  //   );
  // };

  // toggleCategoryExpandedProperty = (categoryname: string) => {
  //   const index = this.findCategoryIndexByName(categoryname);
  //   const isExpanded = this.categories[index];
  //   this.categories[index].expanded = !isExpanded;
  // };

  // toggleSubcategoryCheckedProperty = (subcategoryName: string) => {
  //   const modifiedCategories = this.categories.map((category) => {
  //     return {
  //       ...category,
  //       subcategories: category.subcategories.map((subcategory) =>
  //         subcategoryName === subcategory.name
  //           ? { ...subcategory, checked: !subcategory.checked }
  //           : subcategory,
  //       ),
  //     };
  //   });
  //   this.setCategories(modifiedCategories);
  // };
}

const categoryStore = new CategoryStore();

export { categoryStore };
