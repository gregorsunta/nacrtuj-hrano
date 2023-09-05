import { DefaultLayout } from '../layouts';
import { observer } from 'mobx-react-lite';

export const Error = observer(() => {
  return (
    <DefaultLayout>
      <main className={`grid place-content-center`}>
        <h2>404: Stran ne obstaja.</h2>
      </main>
    </DefaultLayout>
  );
});
