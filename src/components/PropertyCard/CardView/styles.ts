import { Card } from "antd";
import styled from "styled-components";

export default styled(Card)<any>`
  box-shadow: 0px 3px 20px rgba(153, 155, 168, 0.15);
  border-radius: 8px;
  min-height: 505px;
  position: relative;

  .ant-card-cover {
    position: relative;

    .cover-image {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .not-available {
      &::after {
        content: "Coming Soon";
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(8px);
        font-weight: 700;
        font-size: 28px;
        font-family: "Oswald", sans-serif;
        color: #fff;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
    }
  }

  .ant-card-body {
    padding: 15px 20px 30px 20px;

    .ant-card-meta {
      min-height: 189px;

      .ant-card-meta-detail {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 189px;
      }
    }
  }

  .ant-card-meta-title {
    margin-bottom: 20px !important;

    p {
      font-weight: bold;
      font-size: 24px;
      line-height: 27px;
      color: #474747;
      white-space: pre-wrap;
      margin: 0;
      padding: 0;
    }
  }

  .card-description-wrapper {
    width: 100%;

    .card-description-information {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 50px;

      span {
        font-size: 18px;
        line-height: 21px;
        color: #707070;
        font-weight: normal;
      }

      svg {
        width: 26.63px;
        height: 24px;
        margin-right: 8px;
        margin-bottom: -4px;
      }

      span:nth-child(2) svg {
        width: 16.79px;
      }
    }

    .card-description-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .rental-yield-info {
    position: absolute;
    left: 0;
    top: 30px;
    width: 219px;
    height: 54.75px;
    background: #002e89;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 36.25px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;

    h6 {
      font-size: 24.64px;
      color: #fff;
      font-weight: 700;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`;
