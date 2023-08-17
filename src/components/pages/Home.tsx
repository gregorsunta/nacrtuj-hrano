import { Header, Footer } from '../organisms';
import { Button } from '../atoms/';
import { ReactComponent as Cikel } from '../../assets/icons/cikel.svg';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

const Home = () => {
  const [show, setShow] = useState(false);
  const unfadeClasses = classNames('opacity-100 translate-y-0');
  const transitionClasses = classNames(
    'inline-block',
    'opacity-0',
    'transition-all',
    'duration-1000',
  );

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-lightYellow px-64">
      <Header />
      <main className="h-full grow flex justify-between pt-40">
        <div className="font-normal flex flex-col gap-28">
          <p className="flex flex-col gap-3 text-9xl h-min font-bold">
            <span
              className={`text-darkOrange ${transitionClasses} ${
                show && unfadeClasses
              }`}
            >
              poišči
            </span>
            <br />
            <span
              className={`text-green delay-500 transform translate-y-40 ${transitionClasses} ${
                show && unfadeClasses
              }`}
            >
              primerjaj
            </span>
            <br />
            <span
              className={`text-darkGreen delay-1000 transform translate-y-40 ${transitionClasses} ${
                show && unfadeClasses
              }`}
            >
              izberi
            </span>
          </p>
          {/* <div className="flex gap-4">
            <Button variant="solid" twclasses="bg-darkOrange text-white">
              Poišči
            </Button>
            <Button variant="solid" twclasses="bg-darkGreen text-white">
              Primerjaj
            </Button>
          </div> */}
        </div>

        <Cikel />
      </main>
      <Footer />
    </div>
  );
};

export { Home };
