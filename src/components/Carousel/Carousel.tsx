import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import CarouselItem from "../CarouselItem";
import CarouselWrapper from "./styles";

import Carousel1 from "../../assets/images/carousel1.png";
import Carousel2 from "../../assets/images/carousel2.png";
import Carousel3 from "../../assets/images/carousel3.png";

const Carousel: React.FC = () => {
  return (
    <CarouselWrapper
      dots={false}
      arrows
      prevArrow={<ArrowLeftOutlined />}
      nextArrow={<ArrowRightOutlined />}
      initialSlide={1}
      slidesToShow={1}
      centerMode
      centerPadding="10%"
    >
      {[Carousel1, Carousel2, Carousel3].map((item, index) => (
        <CarouselItem key={index} imageSrc={item} />
      ))}
    </CarouselWrapper>
  );
};

export default Carousel;
