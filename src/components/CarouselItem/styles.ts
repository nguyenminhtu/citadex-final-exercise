import styled from "styled-components";

export default styled.div`
  height: 488px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .basic-info {
    padding-left: 30px;
    margin-bottom: 30px;

    p {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 0;
      padding-bottom: 0;
      line-height: 27px;
      display: flex;
    }

    span {
      margin: 10px 40px 0 0;
      font-size: 18px;
      line-height: 21px;
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

  .promotion-info {
    width: 219px;
    height: 54.75px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 36.25px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

    h6 {
      font-size: 24.64px;
      color: #003acc;
      font-weight: 700;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`;
