import Wrapper from "./styles";

import UserAvatar from "../../assets/images/avatar.png";

const CompanyLogo = () => {
  return (
    <Wrapper>
      <span>User Name</span>
      <img src={UserAvatar} alt="User avatar" />
    </Wrapper>
  );
};

export default CompanyLogo;
