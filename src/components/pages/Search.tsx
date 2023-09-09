import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import classNames from 'classnames';
import { Button, CheckboxLabel, LoadingScreen } from '../atoms';
import { ProductPreview, DropdownFilter } from '../molecules';
import { DefaultLayout } from '../layouts';
import { useRootStore } from '../../contexts/StoreContext';
import { fetchShops } from '../../services/api/Products';

export const Search = observer(() => {
  const { categoryId } = useParams();
  const [shopState, setShopState] = useState<string[]>([]);
  const { productStore, categoryStore, filterStore, notificationStore } =
    useRootStore();

  const dropdownFilterClasses = classNames('border p-3');
  const productContainerClasses = classNames(
    productStore.products[0] &&
      `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`,
  );

  const getProductsWithFilters = () => {
    productStore.getProducts({
      categories: filterStore.subcategoryFilter,
      page: 1,
      pageSize: 25,
      shops: filterStore.shopFilter,
    });
  };

  const getActiveSubcategories = () => {
    return categoryStore.getCategory(Number(categoryId))?.subcategories;
  };

  useEffect(() => {
    const setMainCategories = async () => {
      await categoryStore.fetchAndSetCategories();
    };
    void setMainCategories();
    notificationStore.toastWarning(
      'Ker je gostovanje te spletne strani brezplačno lahko pride do daljšega nalaganja - do 30 sekund',
    );
    return () => {
      categoryStore.clearCategories();
    };
  }, []);

  useEffect(() => {
    const setShops = async (): Promise<void> => {
      const { shops } = await fetchShops();
      setShopState(shops);
    };

    void setShops();

    return () => {
      filterStore.clearSubcategoryFilter();
      productStore.clearProducts();
    };
  }, [categoryId]);

  return (
    <DefaultLayout>
      <main className={`flex flex-col items-start gap-10`}>
        <nav className="flex flex-wrap gap-4">
          {categoryStore.categories[0]
            ? categoryStore.categories.map((category) => (
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
              ))
            : new Array(6)
                .fill(null)
                .map((_) => (
                  <LoadingScreen
                    key={uuidv4()}
                    twclasses="w-36 h-8"
                  ></LoadingScreen>
                ))}
        </nav>
        <div className={`flex flex-col items-start lg:flex-row gap-10 w-full`}>
          <nav className="flex flex-col align-center max-h-min gap-10 w-full lg:w-80">
            {getActiveSubcategories() ? (
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
                        filterStore.toggleSubcategoryFilter(name);
                      }}
                      type="checkbox"
                      checked={filterStore.subcategoryFilter.includes(name)}
                    />
                  </div>
                ))}
              </DropdownFilter>
            ) : (
              <LoadingScreen twclasses="w-full h-[200px]" />
            )}

            {shopState[0] ? (
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
                        filterStore.toggleShopFilter(name);
                      }}
                      type="checkbox"
                      checked={filterStore.shopFilter.includes(name)}
                    />
                  </div>
                ))}
              </DropdownFilter>
            ) : (
              <LoadingScreen twclasses="w-full h-[200px]" />
            )}

            <Button
              onClick={getProductsWithFilters}
              variant="solid"
              twclasses="bg-darkGreen text-white whitespace-nowrap max-w-min"
            >
              <p>Potrdi filtre</p>
            </Button>
          </nav>
          <section>
            <div className={productContainerClasses}>
              {productStore.products.map(({ novo_ime, prices, id_slika }) => (
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
