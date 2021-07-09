import styled from "styled-components";

export default styled.div`
  .property-table {
    thead {
      th {
        text-align: center;
        border-bottom: 1px solid #e5e5e5;
        padding: 17px 15px;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 18px;
        color: #474747;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        svg {
          margin-right: 8px;
        }
      }

      th:first-child {
        text-align: left;

        div {
          justify-content: flex-start;
        }
      }
    }

    tbody {
      td {
        text-align: center;
        padding: 11px 0;
      }

      td:first-child {
        text-align: left;

        & > div {
          display: flex;
          align-items: center;

          img {
            margin: 0 15px 0 8px;
            width: 68px;
            height: 48px;
            border-radius: 6px;
          }

          div.not-available {
            position: relative;

            &::after {
              content: "";
              position: absolute;
              top: 0;
              left: 8px;
              right: 15px;
              bottom: 0;
              background: rgba(0, 0, 0, 0.6);
              backdrop-filter: blur(4px);
              border-radius: 6px;
            }
          }

          p {
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            margin-bottom: 0;
          }

          .coming-soon {
            color: #003acc;
            font-weight: bold;
            font-size: 10px;
            line-height: 16px;
            text-transform: uppercase;
          }
        }
      }

      tr:first-child td {
        padding-top: 29px !important;
      }

      td.rental-yield {
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.1px;
        color: #3a3335;
      }

      td.country,
      td.property-type,
      td.iro {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.1px;
        color: #707070;
      }

      td.deal-size {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.1px;
        color: #3a3335;
      }

      td.commitment {
        span {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.1px;
          color: #908e8e;
        }

        span:first-child {
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.1px;
          color: #3a3335;
          margin-right: 4px;
        }
      }

      span.button-group {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          height: 24px;
          width: 47% !important;
        }
      }
    }
  }
`;
