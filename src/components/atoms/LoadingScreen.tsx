interface ILoadingScreen {
  twclasses: string;
}

export const LoadingScreen = ({ twclasses }: ILoadingScreen) => {
  return (
    <div
      className={`bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse w-36 h-8 rounded-3xl ${twclasses}`}
    ></div>
  );
};
