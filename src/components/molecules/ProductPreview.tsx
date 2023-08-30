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
    <div className="flex flex-row bg-white">
      <div className="flex flex-col justify-end">
        <img src={imgSrcChecked} />
        <p>{name}</p>
      </div>
      <div className="flex flex-col">
        {prices?.map((price) => (
          <p key={uuidv4()}>{price.redna_cena_na_kilogram_liter}</p>
        ))}
      </div>
    </div>
  );
};
