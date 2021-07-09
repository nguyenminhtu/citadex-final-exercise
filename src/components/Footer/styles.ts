import { Layout } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

export default styled(Footer)`
  height: 56px;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;

  .footer-text {
    color: #908e8e;
    margin-right: 18px;
  }

  .footer-link {
    font-weight: bold;
    color: #3a3335;
    margin-right: 14px;
  }
`;
