import { Header } from '../organisms/Header';

interface IDefaultLayoutProps {
  mainContent: JSX.Element;
}

const DefaultLayout = ({ mainContent }: IDefaultLayoutProps) => {
  return (
    <>
      <Header></Header>
      <main>{mainContent}</main>
    </>
  );
};

export { DefaultLayout };
