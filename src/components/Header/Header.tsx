import CompanyLogo from "../CompanyLogo";
import UserAvatar from "../UserAvatar";

import HeaderWrapper from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <CompanyLogo />

      <UserAvatar />
    </HeaderWrapper>
  );
};

export default Header;
