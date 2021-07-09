import { Card } from "antd";

import SvgIcon from "../../SvgIcon";
import Button from "../../Button";
import CardViewWrapper from "./styles";

const { Meta } = Card;

interface CardViewProps {
  propertyImage: string;
  rentalYield?: number;
  title: string;
  propertyType: string;
  propertyLocation: string;
  style?: any;
  notAvailable?: boolean;
}

interface CardDescriptionProps {
  propertyType: string;
  propertyLocation: string;
  notAvailable?: boolean;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ propertyType, propertyLocation, notAvailable }) => {
  return (
    <div className="card-description-wrapper">
      <div className="card-description-information">
        <SvgIcon type="home" text={propertyType} fill="#003ACC" />

        <SvgIcon type="location" text={propertyLocation} fill="#003ACC" />
      </div>

      <div className="card-description-button">
        <Button size="large" color="secondary" disabled={notAvailable}>
          Underwrite IRO
        </Button>
        <Button size="large" color="primary" disabled={notAvailable}>
          Commit to IRO
        </Button>
      </div>
    </div>
  );
};

const CardView: React.FC<CardViewProps> = (props) => {
  const { propertyImage, rentalYield, title, propertyType, propertyLocation, style, notAvailable } = props;

  return (
    <CardViewWrapper
      cover={
        <div
          className={`cover-image ${notAvailable ? "not-available" : ""}`}
          style={{ height: 278, backgroundImage: `url("${propertyImage}")` }}
        />
      }
      style={style}
      id={title}
    >
      <Meta
        title={<p>{title}</p>}
        description={
          <CardDescription
            notAvailable={notAvailable}
            propertyType={propertyType}
            propertyLocation={propertyLocation}
          />
        }
      />

      {rentalYield && (
        <div className="rental-yield-info">
          <h6>Rental Yield {rentalYield}%</h6>
        </div>
      )}
    </CardViewWrapper>
  );
};

export default CardView;
