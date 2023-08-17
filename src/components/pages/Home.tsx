import { Header, Footer } from '../organisms';
import { ReactComponent as Cikel } from '../../assets/icons/cikel.svg';
import { useEffect, useState } from 'react';

const Home = () => {
  const [show, setShow] = useState(false);

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
