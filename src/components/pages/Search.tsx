import { DefaultLayout } from '../layouts';
import { Header, Footer } from '../organisms';
import { DropdownFilter, ProductPreview } from '../molecules';
import { v4 as uuidv4 } from 'uuid';
import { Button, Input } from '../atoms';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useStores } from '../../contexts/StoreContext';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

export const Search = observer(() => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const { productStore, categoryStore } = useStores();

  const { getProducts, products } = toJS(productStore);

  const {
    getCategories,
    toggleCategoryExpandedProperty,
    toggleSubcategoryCheckedProperty,
    categories,
  } = toJS(categoryStore);

  const handleCheckedValue = (name: string) => {
    if (checkedValues.includes(name)) {
      const leftover = checkedValues.filter((item) => item !== name);
      setCheckedValues(leftover);
    } else {
      const withExtra = [...checkedValues, name];
      setCheckedValues(withExtra);
    }
  };

  useEffect(() => {
    getProducts({
      categories: checkedValues,
      page: 1,
      pageSize: 2,
    });
    getCategories();
  }, []);

  useEffect(() => {
    getProducts({
      categories: checkedValues,
      page: 1,
      pageSize: 25,
    });
  }, [checkedValues]);

  return (
    <DefaultLayout
      HeaderContent={(addClassNames) => (
        <Header twclasses={`${addClassNames}`} />
      )}
      MainContent={(addClassNames) => (
        <main className={`flex flex-row ${addClassNames}`}>
          <nav>
            {categories?.map(({ name, subcategories, expanded }) => (
              <DropdownFilter key={uuidv4()} expanded={expanded} onClick>
                <Button
                  variant="text"
                  onClick={() => toggleCategoryExpandedProperty(name)}
                >
                  {name}
                </Button>
                {subcategories.map(({ name, checked }) => (
                  <div key={uuidv4()} className="flex flex-row">
                    <Input
                      id={name}
                      key={uuidv4()}
                      onChange={() => {
                        handleCheckedValue(name);
                        toggleSubcategoryCheckedProperty(name);
                      }}
                      type="checkbox"
                      checked={checked}
                    />
                    <label htmlFor={name}>{name}</label>
                  </div>
                ))}
              </DropdownFilter>
            ))}
          </nav>
          <section className={'grid grid-cols-5 gap-5'}>
            {products?.map(({ novo_ime, prices, id_slika }) => (
              <ProductPreview
                name={novo_ime}
                prices={prices}
                imgSrc={`https://www.primerjaj-cene.si/WebImages/primerjalnik_images/a8_primerjalnik_male-${id_slika}.jpg`}
              />
            ))}
          </section>
        </main>
      )}
      FooterContent={(addClassNames) => (
        <Footer twclasses={`${addClassNames}`} />
      )}
    ></DefaultLayout>
  );
});
