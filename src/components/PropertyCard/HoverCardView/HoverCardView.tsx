import SvgIcon from "../../SvgIcon";
import Button from "../../Button";
import HoverViewWrapper from "./styles";

interface HoverCardViewProps {
  propertyImage: string;
  rentalYield?: number;
  title: string;
  propertyType: string;
  propertyLocation: string;
  style?: any;
  notAvailable?: boolean;
}

const HoverCardView: React.FC<HoverCardViewProps> = (props) => {
  const { propertyImage, rentalYield, title, propertyType, propertyLocation, style, notAvailable } = props;

  return (
    <HoverViewWrapper style={{ backgroundImage: `url("${propertyImage}")`, ...style }} id={title}>
      <div className="hover-card-view-content">
        {rentalYield && (
          <div className="rental-yield-info">
            <h6>Rental Yield {rentalYield}%</h6>
          </div>
        )}

        <div className="hover-card-view-detail-content">
          <p className="title">{title}</p>

          <div className="description-information">
            <SvgIcon type="home" text={propertyType} fill="#3B86FF" />

            <SvgIcon type="location" text={propertyLocation} fill="#3B86FF" />
          </div>

          <div className="detail-information">
            <div className="detail-item">
              <div>
                <SvgIcon type="home" fill="white" />
              </div>

              <div>
                <p className="detail-item-title">Entire Hotel</p>
                <p className="detail-item-description">All for your needs</p>
              </div>
            </div>

            <div className="detail-item">
              <div>
                <SvgIcon type="userGroup" fill="white" />
              </div>

              <div>
                <p className="detail-item-title">8 - 10 guests</p>
                <p className="detail-item-description">Great stays for guests</p>
              </div>
            </div>

            <div className="detail-item">
              <div>
                <SvgIcon type="bedroom" fill="white" />
              </div>

              <div>
                <p className="detail-item-title">5 bedrooms</p>
                <p className="detail-item-description">Fully-furnished rooms.</p>
              </div>
            </div>

            <div className="detail-item">
              <div>
                <SvgIcon type="otherInformation" fill="white" />
              </div>

              <div>
                <p className="detail-item-title">Other information</p>
                <p className="detail-item-description" style={{ color: "#3B86FF" }}>
                  Visit Property Site
                </p>
              </div>
            </div>
          </div>

          <p className="description">
            The property is situated 800 m from Rembrandtplein and 750 m from Rijksmuseum. Schiphol Airport is about
            14.5 km away. This is our guests' favourite part of Amsterdam, according to independent reviews.
          </p>

          <div className="detail-slider">
            <p>75% COMMMITTED</p>
            <div className="detail-slider-color1">
              <div className="detail-slider-color2" />
            </div>
          </div>

          <div className="detail-button">
            <Button size="large" color="secondary" disabled={notAvailable}>
              Underwrite IRO
            </Button>
            <Button size="large" color="primary" disabled={notAvailable}>
              Commit to IRO
            </Button>
          </div>
        </div>
      </div>
    </HoverViewWrapper>
  );
};

export default HoverCardView;
