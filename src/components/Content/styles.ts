import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

export default styled(Content)`
  background-color: #ffffff;
  overflow: auto;

  .property-wrapper {
    padding: 80px 10%;
    width: 100%;

    .property-header {
      text-align: center;
      position: relative;
      margin-bottom: 40px;

      h1 {
        color: #3a3335;
        font-weight: 800;
        font-size: 34px;
      }

      .change-mode {
        display: flex;
        position: absolute;
        top: 3px;
        right: 0;

        button {
          border-radius: 8px;
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border: 1px solid #e5e5e5;
          background: #ffffff;
        }

        button:first-child {
          margin-right: 29px;
        }

        button.active {
          background: #eef5ff;
          border: none;
        }
      }
    }
  }
`;
