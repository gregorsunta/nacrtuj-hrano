import { DefaultLayout } from '../layouts';

export const HowItWorks = () => {
  return (
    <DefaultLayout twclasses="bg-lightYellow">
      <div className="flex flex-col items-center">
        <main className="lg:w-[1000px] flex flex-col gap-16">
          <div>
            <h1>
              <span className="text-gray-500">Kako</span>
              <br />
              <span className="text-green"> deluje?</span>
            </h1>
          </div>
          <ul className="flex flex-col gap-5 text-[28px]">
            <li>
              <span>1. Pridobimo.</span>
              <p>Podatke o izdelkih pridobimo iz tretje spletne strani.</p>
            </li>
            <li>
              <span>2. Obdelamo.</span>
              <p>Podatke obdelamo, uredimo in shranimo v našo bazo izdelkov.</p>
            </li>
            <li>
              <span>3. Postrežemo.</span>
              <p>
                Izdelke vam nato postrežemo na podlagi vaših izbranih
                parametrov.
              </p>
            </li>

            <p>
              <span>POZOR:</span> Podatki{' '}
              <span className="text-darkOrange font-bold">niso</span> v naši
              lasti in{' '}
              <span className="text-darkOrange font-bold">
                ne moremo jamčiti{' '}
              </span>
              točnosti cen, slik, razpoložljivosti ali drugih informacij o
              kateremkoli izdelku.
            </p>
          </ul>
        </main>
      </div>
    </DefaultLayout>
  );
};
