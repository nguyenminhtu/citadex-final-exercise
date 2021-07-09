import Button from "../../Button";
import SvgIcon from "../../SvgIcon";
import ListViewWrapper from "./styles";

import Carousel2 from "../../../assets/images/carousel2.png";
import Property1 from "../../../assets/images/property1.png";
import Property2 from "../../../assets/images/property2.png";
import Property3 from "../../../assets/images/property3.png";
import Property4 from "../../../assets/images/property4.png";

const ListView: React.FC = () => {
  return (
    <ListViewWrapper>
      <table className="property-table">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>
              <div>
                <SvgIcon type="sortIcon" fill="#474747" />
                <span>Property Name</span>
              </div>
            </th>
            <th style={{ width: "10%" }}>
              <div>
                <SvgIcon type="sortIcon" fill="#474747" />
                <span>Rental Yield</span>
              </div>
            </th>
            <th style={{ width: "10%" }}>
              <div>
                <SvgIcon type="sortIcon" fill="#474747" />
                <span>Country</span>
              </div>
            </th>
            <th style={{ width: "10%" }}>
              <div>
                <SvgIcon type="sortIcon" fill="#474747" />
                <span>Property Type</span>
              </div>
            </th>
            <th style={{ width: "5%" }}>
              <div>
                <SvgIcon type="sortIcon" fill="#474747" />
                <span>IRO</span>
              </div>
            </th>
            <th style={{ width: "10%" }}>
              <div>
                <SvgIcon type="sortIcon" fill="#474747" />
                <span>Deal Size</span>
              </div>
            </th>
            <th style={{ width: "10%" }}>
              <div>
                <SvgIcon type="sortIcon" fill="#474747" />
                <span>Commitment</span>
              </div>
            </th>
            <th style={{ width: "15%" }}></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div>
                <img src={Carousel2} alt="property" />

                <p className="property-name">Tourism Real Estate with Steady Rental Income</p>
              </div>
            </td>
            <td className="rental-yield">5%</td>
            <td className="country">Netherlands</td>
            <td className="property-type">House</td>
            <td className="iro">Yes</td>
            <td className="deal-size">{">"} $500,000</td>
            <td className="commitment">
              <span>4.90</span>
              <span>(15)</span>
            </td>
            <td>
              <span className="button-group">
                <Button size="small" color="primary">
                  Commit to IRO
                </Button>
                <Button size="small" color="secondary">
                  Underwrite IRO
                </Button>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img src={Property1} alt="property" />

                <p className="property-name">Crypto Community Space</p>
              </div>
            </td>
            <td className="rental-yield">8%</td>
            <td className="country">Singapore</td>
            <td className="property-type">Building</td>
            <td className="iro">Yes</td>
            <td className="deal-size">{">"} $500,000</td>
            <td className="commitment">
              <span>4.55</span>
              <span>(45)</span>
            </td>
            <td>
              <span className="button-group">
                <Button size="small" color="primary">
                  Commit to IRO
                </Button>
                <Button size="small" color="secondary">
                  Underwrite IRO
                </Button>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <div className="not-available">
                  <img src={Property2} alt="property" />
                </div>

                <div>
                  <p className="coming-soon">Coming Soon</p>
                  <p className="property-name">Building with Steady Rental Income</p>
                </div>
              </div>
            </td>
            <td className="rental-yield">NA</td>
            <td className="country">US</td>
            <td className="property-type">Building</td>
            <td className="iro">No</td>
            <td className="deal-size">{">"} $500,000</td>
            <td className="commitment">
              <span>4.91</span>
              <span>(98)</span>
            </td>
            <td>
              <span className="button-group">
                <Button size="small" color="primary" disabled={true}>
                  Commit to IRO
                </Button>
                <Button size="small" color="secondary" disabled={true}>
                  Underwrite IRO
                </Button>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <div className="not-available">
                  <img src={Property3} alt="property" />
                </div>

                <div>
                  <p className="coming-soon">Coming Soon</p>
                  <p className="property-name">Villa with Steady Rental Income</p>
                </div>
              </div>
            </td>
            <td className="rental-yield">NA</td>
            <td className="country">England</td>
            <td className="property-type">House</td>
            <td className="iro">No</td>
            <td className="deal-size">{"<"} $500,000</td>
            <td className="commitment">
              <span>4.95</span>
              <span>(73)</span>
            </td>
            <td>
              <span className="button-group">
                <Button size="small" color="primary" disabled={true}>
                  Commit to IRO
                </Button>
                <Button size="small" color="secondary" disabled={true}>
                  Underwrite IRO
                </Button>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <div className="not-available">
                  <img src={Property4} alt="property" />
                </div>

                <div>
                  <p className="coming-soon">Coming Soon</p>
                  <p className="property-name">Apartment with Steady Rental Income</p>
                </div>
              </div>
            </td>
            <td className="rental-yield">NA</td>
            <td className="country">Denmark</td>
            <td className="property-type">Apartment</td>
            <td className="iro">No</td>
            <td className="deal-size">{"<"} $500,000</td>
            <td className="commitment">
              <span>4.60</span>
              <span>(10)</span>
            </td>
            <td>
              <span className="button-group">
                <Button size="small" color="primary" disabled={true}>
                  Commit to IRO
                </Button>
                <Button size="small" color="secondary" disabled={true}>
                  Underwrite IRO
                </Button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </ListViewWrapper>
  );
};

export default ListView;
