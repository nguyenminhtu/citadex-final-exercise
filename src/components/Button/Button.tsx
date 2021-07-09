import { useMemo } from "react";

import ButtonWrapper from "./styles";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
  disabled?: boolean;
  children: any;
}

const defaultProps: ButtonProps = {
  size: "medium",
  color: "primary",
  disabled: false,
  children: "",
};

const Button: React.FC<ButtonProps> = (props = defaultProps) => {
  const { size, color, disabled, children } = props;

  const buttonSize = useMemo(() => {
    switch (size) {
      case "small":
        return {
          borderRadius: "4px",
          width: "80px",
          fontSize: "8px",
        };

      case "large":
        return {
          borderRadius: "8px",
          width: "48%",
          fontSize: "12px",
        };

      default:
        return {
          borderRadius: "8px",
          width: "48%",
          fontSize: "12px",
        };
    }
  }, [size]);

  const buttonColor = useMemo(() => {
    switch (color) {
      case "secondary":
        return {
          backgroundColor: "#fff",
          color: disabled ? "#CACACA" : "#003ACC",
          border: `1px solid ${disabled ? "#CACACA" : "#003ACC"}`,
        };

      default:
        return {
          backgroundColor: disabled ? "#CACACA" : "#003ACC",
          color: "#fff",
          border: "none",
        };
    }
  }, [color, disabled]);

  return <ButtonWrapper style={{ ...buttonSize, ...buttonColor }}>{children}</ButtonWrapper>;
};

export default Button;
