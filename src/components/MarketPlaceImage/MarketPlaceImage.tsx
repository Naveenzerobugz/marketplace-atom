import clsx from "clsx";
import React from "react";

import * as S from "./styles";
import { IMarketPlaceLogoProps } from "./types";

const MarketPlaceImage = ({
  src,
  defaultSrc,
  w,
  h,
  isRounded = false,
  alt,
  isCover = true,
  testId = "img",
  className,
}: IMarketPlaceLogoProps) => {
  const cls = {
    img: true,
    "img-fit": isCover,
    "img-rnd": isRounded,
  };

  const imageSrc = src || defaultSrc;
  return (
    <S.ImageContent className={className}>
      <div className={clsx(cls)}>
        <img
          src={imageSrc}
          data-testid={testId}
          alt={alt}
          width={w}
          height={h}
        />
      </div>
    </S.ImageContent>
  );
};
export default MarketPlaceImage;