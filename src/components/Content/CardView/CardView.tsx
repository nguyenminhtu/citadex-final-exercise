import PropertyCard from "../../PropertyCard";
import CardViewWrapper from "./styles";

import Carousel2 from "../../../assets/images/carousel2.png";
import Property1 from "../../../assets/images/property1.png";
import Property2 from "../../../assets/images/property2.png";
import Property3 from "../../../assets/images/property3.png";
import Property4 from "../../../assets/images/property4.png";

const CardView: React.FC = () => {
  return (
    <CardViewWrapper>
      <div className="available-property">
        <PropertyCard
          style={{ width: "48%" }}
          rentalYield={5}
          propertyImage={Carousel2}
          propertyType="House"
          title="Tourism Real Estate with Steady Rental Income"
          propertyLocation="Netherlands"
        />

        <PropertyCard
          style={{ width: "48%" }}
          rentalYield={8}
          propertyImage={Property1}
          propertyType="Building"
          title="Crypto Community Space"
          propertyLocation="Singapore"
        />
      </div>

      <div className="coming-soon-property">
        <PropertyCard
          style={{ width: "32%" }}
          propertyImage={Property2}
          propertyType="Building"
          title="Building with Steady Rental Income"
          propertyLocation="US"
          notAvailable
        />

        <PropertyCard
          style={{ width: "32%" }}
          propertyImage={Property3}
          propertyType="House"
          title="Villa with Steady Rental Income"
          propertyLocation="England"
          notAvailable
        />

        <PropertyCard
          style={{ width: "32%" }}
          propertyImage={Property4}
          propertyType="Apartment"
          title="Apartment with Steady Rental Income"
          propertyLocation="Denmark"
          notAvailable
        />
      </div>
    </CardViewWrapper>
  );
};

export default CardView;
