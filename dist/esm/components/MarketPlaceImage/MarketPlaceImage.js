import clsx from "clsx";
import React from "react";
import * as S from "./styles";
var MarketPlaceImage = function (_a) {
    var src = _a.src, defaultSrc = _a.defaultSrc, w = _a.w, h = _a.h, _b = _a.isRounded, isRounded = _b === void 0 ? false : _b, alt = _a.alt, _c = _a.isCover, isCover = _c === void 0 ? true : _c, _d = _a.testId, testId = _d === void 0 ? "img" : _d, className = _a.className;
    var cls = {
        img: true,
        "img-fit": isCover,
        "img-rnd": isRounded
    };
    var imageSrc = src || defaultSrc;
    return (React.createElement(S.ImageContent, { className: className },
        React.createElement("div", { className: clsx(cls) },
            React.createElement("img", { src: imageSrc, "data-testid": testId, alt: alt, width: w, height: h }))));
};
export default MarketPlaceImage;
//# sourceMappingURL=MarketPlaceImage.js.map