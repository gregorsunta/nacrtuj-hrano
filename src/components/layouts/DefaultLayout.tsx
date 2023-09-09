import classNames from 'classnames';
import { Footer, Header, ToastContainer } from '../organisms';
import { useRootStore } from '../../contexts/StoreContext';
import { observer } from 'mobx-react-lite';

interface Props {
  children: JSX.Element;
  twclasses?: string;
}

const DefaultLayout = observer(({ children, twclasses }: Props) => {
  const container = classNames('py-5 px-10 flex flex-col min-h-screen gap-10');
  const { notificationStore } = useRootStore();
  return (
    <div className={`${twclasses} ${container} `}>
      <Header />
      {children}
      <Footer />
      <ToastContainer toasts={notificationStore.toasts} />
    </div>
  );
});

export { DefaultLayout };
