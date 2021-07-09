import { useEffect, useState } from "react";

import CardView from "./CardView";
import HoverCardView from "./HoverCardView";

interface PropertyCardProps {
  propertyImage: string;
  rentalYield?: number;
  title: string;
  propertyType: string;
  propertyLocation: string;
  style?: any;
  notAvailable?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = (props) => {
  const { title, notAvailable } = props;

  const [showHoverView, setShowHoverView] = useState(false);

  useEffect(() => {
    if (document.getElementById(title) && !notAvailable) {
      const currentRef: any = document.getElementById(title);
      currentRef.addEventListener("mouseenter", () => setShowHoverView(true));
      currentRef.addEventListener("mouseleave", () => setShowHoverView(false));
      return () => {
        currentRef.removeEventListener("mouseenter", () => setShowHoverView(false));
        currentRef.removeEventListener("mouseleave", () => setShowHoverView(false));
      };
    }
  }, [title, showHoverView, notAvailable]);

  return showHoverView && !notAvailable ? <HoverCardView {...props} /> : <CardView {...props} />;
};

export default PropertyCard;
