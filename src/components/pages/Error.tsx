import { DefaultLayout } from '../layouts';
import { Footer, Header } from '../organisms';
import { observer } from 'mobx-react-lite';

export const Error = observer(() => {
  return (
    <DefaultLayout
      HeaderContent={(addClassNames) => <Header twclasses={addClassNames} />}
      MainContent={(addClassNames) => (
        <main className={`grid place-content-center ${addClassNames}`}>
          <h2>404: Stran ne obstaja.</h2>
        </main>
      )}
      FooterContent={(addClassNames) => <Footer twclasses={addClassNames} />}
    ></DefaultLayout>
  );
});
