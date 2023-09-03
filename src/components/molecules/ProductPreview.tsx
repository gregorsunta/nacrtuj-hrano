import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageMissing from '../../assets/images/missing-image.jpg';
import ImageLoading from '../../assets/images/missing-image.jpg';

interface IProductPreview {
  imgSrc?: string;
  name: string;
  prices?: IPrice[];
}

interface IPrice {
  redna_cena_na_kilogram_liter: string;
  enota: string;
  trgovina: string;
  date: string;
}

export const ProductPreview = ({ imgSrc, name, prices }: IProductPreview) => {
  const [imgSrcChecked, setImgSrcChecked] = useState<string | undefined>(
    undefined,
  );
  const [imgLoading, setImgLoading] = useState(false);
  const checkImage = async (url: string) => {
    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return url;
        } else {
          return null;
        }
      })
      .catch((err) => {
        console.info(err);
      });
  };

  useEffect(() => {
    const handleImgSrc = async (src: string | undefined) => {
      setImgLoading(true);
      if (!src) {
        setImgSrcChecked(ImageMissing);
        return;
      }
      const img = await checkImage(src);
      if (!img) {
        setImgSrcChecked(ImageMissing);
      } else {
        setImgSrcChecked(src);
      }
      setImgLoading(false);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleImgSrc(imgSrc);
  }, [imgSrc]);

  return (
    <div className="drop-shadow rounded-md flex flex-col items-center bg-white">
      <div className="h-48 w-38">
        <img
          className="object-contain h-full"
          src={!imgLoading ? imgSrcChecked : ImageLoading}
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-lg text-darkGreen">{name}</p>
        <div className="flex flex-col">
          {prices?.map((price) => (
            <p key={uuidv4()}>
              <span className="text-darkOrange font-bold">
                {price.redna_cena_na_kilogram_liter}
              </span>
              <span>{price.enota}</span>
              <span className="text-darkGreen"> {price.trgovina}</span>
              <span className="text-green"> {price.date}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
