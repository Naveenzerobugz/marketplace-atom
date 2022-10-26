import baseStyled from "styled-components";
export const styled = baseStyled;

export const ImageContent = styled.div.attrs<{ className?: string }>(props => ({
  className: props.className,
}))`
  img {
    border: 0 none;
    max-width: auto !important;
  }

  &-fit img {
    display: inline-block;
    object-fit: cover;
  }

  &.img-rnd {
    img {
      border: 0;
      border-radius: 50%;
    }
  }
`;
