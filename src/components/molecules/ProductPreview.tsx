import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageMissing from '../../assets/images/missing-image.jpg';

interface IProductPreview {
  imgSrc?: string;
  name: string;
  prices?: string[];
}

export const ProductPreview = ({ imgSrc, name, prices }: IProductPreview) => {
  const [imgSrcChecked, setImgSrcChecked] = useState<string | null>(null);
  const checkImage = async (url) => {
    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return url;
        } else {
          return null;
        }
      })
      .catch((err) => console.info(err));
  };

  useEffect(() => {
    const handleImgSrc = async () => {
      if (await checkImage(imgSrc)) {
        setImgSrcChecked(imgSrc);
      } else {
        setImgSrcChecked(ImageMissing);
      }
    };
    handleImgSrc();
  }, [imgSrc]);

  return (
    <div className="drop-shadow rounded-md flex flex-col items-center bg-white">
      <div className="h-40 w-40">
        <img className="object-cover" src={imgSrcChecked} />
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
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
