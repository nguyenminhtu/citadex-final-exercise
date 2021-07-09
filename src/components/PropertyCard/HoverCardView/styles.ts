import styled from "styled-components";

export default styled.div<any>`
  min-height: 505px;
  border-radius: 6px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 16, 56, 0.75);
    backdrop-filter: blur(8px);
  }

  .hover-card-view-content {
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: transparent;
    overflow: hidden;

    .rental-yield-info {
      margin-top: 30px;
      width: 219px;
      height: 54.75px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;

      h6 {
        font-size: 24.64px;
        color: #003acc;
        font-weight: 700;
        margin-bottom: 0;
        padding-bottom: 0;
      }
    }

    .hover-card-view-detail-content {
      padding: 20px 20px 30px 20px;

      p,
      span {
        color: #ffffff;
        margin-bottom: 0;
      }

      p.title {
        font-weight: bold;
        font-size: 29px;
        line-height: 27px;
        height: 54px;
      }

      .description-information {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;

        span {
          font-size: 18px;
          line-height: 21px;
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

      .detail-information {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 23px;
        min-height: 56px;

        .detail-item {
          width: 24%;
          display: flex;

          svg {
            width: 20px;
            height: 20px;
          }

          .detail-item-title {
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
            padding: 0 0 0 8px;
          }

          .detail-item-description {
            font-style: normal;
            font-weight: normal;
            font-size: 10px;
            line-height: 12px;
            padding: 4px 0 0 8px;
          }
        }
      }

      p.description {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        margin-top: 20px;
        min-height: 45px;
      }

      .detail-slider {
        margin-top: 10px;

        p {
          color: #86f8ff;
          font-style: normal;
          font-weight: bold;
          font-size: 8px;
          line-height: 10px;
          padding-right: 25%;
          text-align: right;
          margin-bottom: 4px;
        }

        .detail-slider-color1 {
          background-color: rgba(0, 0, 0, 0.3);
          height: 8px;
          width: 100%;
        }

        .detail-slider-color2 {
          background: linear-gradient(90deg, #3b86ff 0%, #86f8ff 100%);
          height: 100%;
          width: 75%;
        }
      }

      .detail-button {
        margin-top: 55px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;
