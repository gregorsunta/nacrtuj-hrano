import { DefaultLayout } from '../layouts';
import { Header, Footer } from '../organisms';
import { ProductPreview, DropdownFilter } from '../molecules';
import { v4 as uuidv4 } from 'uuid';
import { Button, CheckboxLabel } from '../atoms';
import { useEffect, useState } from 'react';
import { useStores } from '../../contexts/StoreContext';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import { fetchShops } from '../../services/api/Products';
import classNames from 'classnames';

export const Search = observer(() => {
  const { categoryId } = useParams();
  // const [pageNumber, setPageNumber] = useState<number>(1);
  const [shopState, setShopState] = useState<string[]>([]);
  const { productStore, categoryStore, filterStore } = useStores();
  const { getProducts, products, clearProducts } = toJS(productStore);
  const {
    shopFilter,
    subcategoryFilter,
    clearSubcategoryFilter,
    toggleShopFilter,
    toggleSubcategoryFilter,
  } = toJS(filterStore);
  const {
    categories,
    fetchAndSetCategory,
    fetchAndSetCategories,
    categoryExists,
    getCategory,
    clearCategories,
  } = toJS(categoryStore);

  const dropdownFilterClasses = classNames('border p-3');

  const getProductsWithFilters = () => {
    clearProducts();
    getProducts({
      categories: subcategoryFilter,
      page: 1,
      pageSize: 25,
      shops: shopFilter,
    });
  };

  const getActiveSubcategories = () => {
    return getCategory(Number(categoryId))?.subcategories;
  };

  useEffect(() => {
    const setMainCategories = async () => {
      await fetchAndSetCategories();
    };
    // void setMainCategories();
    void setMainCategories();
    return () => {
      clearCategories();
    };
  }, []);

  useEffect(() => {
    // const setSubcategories = async (): Promise<void> => {
    //   const categoryNumber = Number(categoryId);
    //   if (!categoryNumber) {
    //     return;
    //   }
    //   if (!categoryExists(categoryNumber)) {
    //     await fetchAndSetCategory(categoryNumber);
    //   }
    //   const category = getCategory(categoryNumber);
    //   setCategoryState(category);
    // };
    const setShops = async (): Promise<void> => {
      const { shops } = await fetchShops();
      setShopState(shops);
    };

    // void setSubcategories();
    void setShops();

    return () => {
      clearSubcategoryFilter();
      clearProducts();
    };
  }, [categoryId]);

  return (
    <DefaultLayout>
      <main className={`flex flex-col items-start gap-10`}>
        <header className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Button
              key={uuidv4()}
              to={`/search/${category.id}`}
              variant="solid"
              twclasses={`${
                Number(categoryId) === category.id
                  ? 'bg-darkOrange text-white'
                  : 'bg-gray-200 text-gray-800'
              } whitespace-nowrap`}
            >
              <span>{category.name}</span>
            </Button>
          ))}
        </header>
        <div className={`flex flex-col items-start lg:flex-row gap-10 w-full`}>
          <nav className="p-3 flex flex-col align-center max-h-min gap-10 w-full lg:w-80">
            <DropdownFilter
              orientation="column"
              itemOrientation="column"
              variant="solid"
              name="Kategorije"
              twclasses={dropdownFilterClasses}
            >
              {getActiveSubcategories()?.map((name) => (
                <div key={uuidv4()}>
                  <CheckboxLabel
                    name={name}
                    id={name}
                    key={uuidv4()}
                    onChange={() => {
                      toggleSubcategoryFilter(name);
                    }}
                    type="checkbox"
                    checked={subcategoryFilter.includes(name)}
                  />
                </div>
              ))}
            </DropdownFilter>
            <DropdownFilter
              orientation="column"
              itemOrientation="column"
              variant="solid"
              name="Trgovine"
              twclasses={dropdownFilterClasses}
            >
              {shopState.map((name) => (
                <div key={uuidv4()}>
                  <CheckboxLabel
                    name={name}
                    id={name}
                    key={uuidv4()}
                    onChange={() => {
                      toggleShopFilter(name);
                    }}
                    type="checkbox"
                    checked={shopFilter.includes(name)}
                  />
                </div>
              ))}
            </DropdownFilter>
            <Button
              onClick={getProductsWithFilters}
              variant="solid"
              twclasses="bg-darkGreen text-white whitespace-nowrap max-w-min"
            >
              <p>Potrdi filtre</p>
            </Button>
          </nav>
          <section>
            <div
              className={
                'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
              }
            >
              {products.map(({ novo_ime, prices, id_slika }) => (
                <ProductPreview
                  key={uuidv4()}
                  twclasses={'border'}
                  name={novo_ime}
                  prices={prices}
                  imgSrc={`https://www.primerjaj-cene.si/WebImages/primerjalnik_images/a8_primerjalnik_velike-${id_slika}.jpg`}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </DefaultLayout>
  );
});
