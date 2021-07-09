import { Carousel } from "antd";
import styled from "styled-components";

export default styled(Carousel)`
  .slick-prev,
  .slick-next,
  .slick-prev:hover,
  .slick-next:hover {
    background-color: #fff !important;
    height: 46px;
    width: 46px;
    z-index: 1;
    border-radius: 8px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    top: 240px !important;

    svg {
      color: #3b86ff;
      width: 18px;
      height: 18px;
    }
  }

  .slick-prev {
    left: 8.5%;
  }

  .slick-next {
    right: 8.5%;
  }

  .slick-track .slick-slide {
    padding: 0 7.5px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 7.5px;
      right: 7.5px;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
    }
  }

  .slick-track .slick-active {
    &::after {
      content: "";
      position: absolute;
      left: 7.5px;
      right: 7.5px;
      top: 0;
      bottom: 0;
      background: transparent !important;
      backdrop-filter: none !important;
    }
  }
`;
