import classNames from 'classnames';

interface Props {
  HeaderContent: (addClassNames: string) => JSX.Element; // function type for passing additional classnames
  MainContent: (addClassNames: string) => JSX.Element;
  FooterContent: (addClassNames: string) => JSX.Element;
}

const DefaultLayout = ({
  HeaderContent,
  MainContent,
  FooterContent,
}: Props) => {
  const container = classNames(
    'px-5 sm:px-16 md:px-20 lg:px-40 xl:px-60 xxl:w-[1500px]',
  );

  // const Header = cloneElement(HeaderContent, { classNames: container });
  // const Main = cloneElement(MainContent, { classNames: container });
  // const Footer = cloneElement(FooterContent, { classNames: container });

  return (
    <div className="bg-lightYellow flex flex-col min-h-screen">
      {HeaderContent(container)}
      {MainContent(container)}
      {FooterContent(container)}
    </div>
  );
};

export { DefaultLayout };
