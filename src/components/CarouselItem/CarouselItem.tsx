import SvgIcon from "../SvgIcon";
import Wrapper from "./styles";

interface CarouselItemProps {
  imageSrc: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ imageSrc }) => {
  return (
    <Wrapper style={{ backgroundImage: `url('${imageSrc}')` }}>
      <div className="basic-info">
        <p>Tourism Real Estate with Steady Rental Income</p>

        <p>
          <SvgIcon type="home" text="House" fill="White" />

          <SvgIcon type="location" text="Netherlands" fill="White" />
        </p>
      </div>

      <div className="promotion-info">
        <h6>Rental Yield 5%</h6>
      </div>
    </Wrapper>
  );
};

export default CarouselItem;
