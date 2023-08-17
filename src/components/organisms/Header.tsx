import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { Button } from '../atoms/Button';

const Header = () => {
  return (
    <header className="max-w-full py-4 flex justify-normal items-center justify-between gap-4 ">
      <div className="flex items-end gap-3">
        <Logo className="h-12 w-max" />
        <p className="text-3xl font-caveat font-bold whitespace-nowrap">
          <span className="text-darkGreen">Plan: </span>
          <span className="text-darkOrange">hrana</span>
        </p>
      </div>
      <div className="flex gap-6">
        <Button variant="text" twclasses="text-darkGreen">
          Kako deluje
        </Button>
        <Button variant="text" twclasses="text-darkGreen">
          Vpis
        </Button>
        <Button variant="solid" twclasses="bg-white text-darkOrange">
          Registracija
        </Button>
      </div>
    </header>
  );
};

export { Header };
