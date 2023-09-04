import { toJS } from 'mobx';
import { useStores } from '../../contexts/StoreContext';
import { DefaultLayout } from '../layouts';
import { Footer, Header } from '../organisms';
import { useEffect } from 'react';
import { Button } from '../atoms';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';

export const Category = observer(() => {
  const { categoryStore } = useStores();
  const { categories, fetchAndSetCategories } = toJS(categoryStore);

  useEffect(() => {
    const setCategories = async () => {
      if (!categories[0]) {
        await fetchAndSetCategories();
      }
      console.log(categories);
    };
    void setCategories();
  }, []);
  return (
    <DefaultLayout
      HeaderContent={(addClassNames) => <Header twclasses={addClassNames} />}
      MainContent={(addClassNames) => (
        <main className={addClassNames}>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={uuidv4()}
                to={`/search/${category.id}`}
                variant="solid"
                twclasses="bg-darkOrange whitespace-nowrap"
              >
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </main>
      )}
      FooterContent={(addClassNames) => <Footer twclasses={addClassNames} />}
    ></DefaultLayout>
  );
});
