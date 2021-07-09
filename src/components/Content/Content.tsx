import { useState } from "react";

import Carousel from "../Carousel";
import SvgIcon from "../SvgIcon";
import CardView from "./CardView";
import ListView from "./ListView";
import ContentWrapper from "./styles";

const Content: React.FC = () => {
  const [viewMode, setViewMode] = useState("card");

  return (
    <ContentWrapper>
      <Carousel />

      <div className="property-wrapper">
        <div className="property-header">
          <h1>Properties List</h1>

          <div className="change-mode">
            <button onClick={() => setViewMode("list")} className={viewMode === "list" ? "active" : ""}>
              <SvgIcon type="listView" fill="#3B86FF" />
            </button>

            <button onClick={() => setViewMode("card")} className={viewMode === "card" ? "active" : ""}>
              <SvgIcon type="cardView" fill="#003ACC" />
            </button>
          </div>
        </div>

        {viewMode === "card" ? <CardView /> : <ListView />}
      </div>
    </ContentWrapper>
  );
};

export default Content;
