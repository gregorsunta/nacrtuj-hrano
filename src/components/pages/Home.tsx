import { ReactComponent as Cikel } from '../../assets/icons/cikel.svg';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { DefaultLayout } from '../layouts';

const Home = () => {
  const [show, setShow] = useState(false);
  const container = classNames(
    'px-5 sm:px-16 md:px-20 lg:px-40 xl:px-60 xxl:w-[1500px]',
  );
  const sectionContainer = classNames('pt-10');

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <DefaultLayout twclasses="bg-lightYellow">
      <main className={`flex flex-col gap-10 px-40 ${container}`}>
        <section
          className={`flex flex-col xs:flex-row justify-between items-start max-xs:gap-24 xs:items-center gap ${sectionContainer}`}
        >
          <h1 className="flex-shrink-0 text-7xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex flex-col gap-6">
            <span
              className={`inline-block text-darkOrange transition-all duration-0 opacity-0 ${
                show && 'translate-y-0 opacity-100'
              }`}
            >
              poišči
            </span>
            <span
              className={`inline-block text-green transition-all duration-500  delay-500 transform  ${
                show ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'
              } `}
            >
              primerjaj
            </span>
            <span
              className={`inline-block text-darkGreen transition-all duration-1000 delay-1000 transform ${
                show ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'
              }
    }`}
            >
              izberi
            </span>
          </h1>
          <Cikel className="h-72 xs:h-36 sm:h-54 md:h-60 lg:h-72 xl:h-96" />
        </section>
        <section className={`${sectionContainer}`}>
          {/* <h2>Kako deluje</h2> */}
          {/* <p></p> */}
        </section>
      </main>
    </DefaultLayout>
  );
};

export { Home };
