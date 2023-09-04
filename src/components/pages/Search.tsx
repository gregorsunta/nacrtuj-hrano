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
import { ICategory } from '../../stores/CategoryStore';
import { fetchShops } from '../../services/api/Products';

export const Search = observer(() => {
  const { categoryId } = useParams();
  // const [pageNumber, setPageNumber] = useState<number>(1);
  const [categoryState, setCategoryState] = useState<ICategory>();
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

  const { fetchAndSetCategory, categoryExists, getCategory } =
    toJS(categoryStore);

  const getProductsWithFilters = () => {
    clearProducts();
    getProducts({
      categories: subcategoryFilter,
      page: 1,
      pageSize: 25,
      shops: shopFilter,
    });
  };

  useEffect(() => {
    const setCategory = async (): Promise<void> => {
      const categoryNumber = Number(categoryId);
      if (!categoryNumber) {
        return;
      }
      if (!categoryExists(categoryNumber)) {
        await fetchAndSetCategory(categoryNumber);
      }
      const category = getCategory(categoryNumber);
      setCategoryState(category);
    };

    const setShops = async (): Promise<void> => {
      const { shops } = await fetchShops();
      setShopState(shops);
    };

    void setCategory();
    void setShops();

    return () => {
      clearSubcategoryFilter();
      clearProducts();
    };
  }, []);

  return (
    <DefaultLayout
      HeaderContent={(addClassNames) => (
        <Header twclasses={`${addClassNames}`} />
      )}
      MainContent={(addClassNames) => (
        <main
          className={`flex flex-col xl:flex-row gap-10  items-start ${addClassNames}`}
        >
          <nav className="p-3 flex flex-col bg-white max-h-min drop-shadow gap-10 w-full xl:w-64">
            <DropdownFilter
              orientation="column"
              itemOrientation="column"
              variant="solid"
              name="Kategorije"
            >
              {categoryState?.subcategories.map((name) => (
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
              twclasses="bg-darkGreen text-white whitespace-nowrap"
            >
              <p>Potrdi filtre</p>
            </Button>
          </nav>
          <section>
            <div
              className={
                'grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 '
              }
            >
              {products.map(({ novo_ime, prices, id_slika }) => (
                <ProductPreview
                  key={uuidv4()}
                  name={novo_ime}
                  prices={prices}
                  imgSrc={`https://www.primerjaj-cene.si/WebImages/primerjalnik_images/a8_primerjalnik_velike-${id_slika}.jpg`}
                />
              ))}
            </div>
          </section>
        </main>
      )}
      FooterContent={(addClassNames) => (
        <Footer twclasses={`${addClassNames}`} />
      )}
    ></DefaultLayout>
  );
});
