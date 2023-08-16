import { Header, Footer } from '../organisms';

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="h-full grow flex">
        <div
          className="bg-lightYellow font-bold p-5 pt-64
          flex flex-col items-end gap-24"
        >
          <p className="text-9xl h-min">
            <span>PLANIRAJ</span> <span className="text-darkOrange">HRANO</span>
          </p>
          <p className="font-normal text-2xl">
            Ta spletna stran je namenjena iskanju in primerjavi živil in
            sestavljanju nakupnih košaric živil, ki jih ponujajo največje
            trgovske znamke v Sloveniji.
          </p>
        </div>
        <div className="bg-yellow grow p-96"></div>
      </main>
      <Footer />
    </div>
  );
};

export { Home };
