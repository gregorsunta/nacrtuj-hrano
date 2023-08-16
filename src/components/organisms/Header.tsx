import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

const Header = () => {
  return (
    <header className="max-w-full p-5 flex justify-normal items-end gap-4 ">
      <Logo className="h-12 w-max" />
      <p className="text-4xl">
        Plan: <span className="text-darkOrange">hrana</span>
      </p>
    </header>
  );
};

export { Header };
