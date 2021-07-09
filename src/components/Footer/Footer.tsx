import FooterWrapper from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <span className="footer-text">© 2021 All rights reserved</span>
      <span className="footer-link">Privacy Policy</span>
      <span className="footer-link">Term of Use</span>
    </FooterWrapper>
  );
};

export default Footer;
