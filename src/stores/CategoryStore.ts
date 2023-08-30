import { makeAutoObservable, toJS } from 'mobx';
import { fetchProducts } from '../services/api/Products';
import { fetchCategories } from '../services/api/Categories';

class CategoryStore {
  constructor() {
    makeAutoObservable(this);
  }
  categories: [object] | [] = [];

  setCategories = (categories: [object]) => {
    this.categories = categories;
  };

  getCategories = async () => {
    const { categories } = await fetchCategories();
    this.setCategories(
      categories.map((category) => ({
        name: category.name,
        expanded: false,
        subcategories: category.subcategoryids.map((id) => ({
          name: id,
          checked: false,
        })),
      })),
    );
  };

  findCategoryIndexByName = (searchName) => {
    return this.categories.findIndex(({ name }) => searchName === name);
  };

  toggleCategoryExpandedProperty = (categoryname) => {
    const index = this.findCategoryIndexByName(categoryname);
    const isExpanded = this.categories[index]?.expanded;
    this.categories[index].expanded = !isExpanded;
  };

  toggleSubcategoryCheckedProperty = (subcategoryName) => {
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
