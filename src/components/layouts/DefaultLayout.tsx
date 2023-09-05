import classNames from 'classnames';
import { Footer, Header } from '../organisms';

interface Props {
  children: JSX.Element;
  twclasses?: string;
}

const DefaultLayout = ({ children, twclasses }: Props) => {
  const container = classNames('py-5 px-10 flex flex-col min-h-screen gap-10');

  return (
    <div className={`${twclasses} ${container} `}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export { DefaultLayout };
