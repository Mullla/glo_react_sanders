import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  margin-top: auto;
  & span:first-child {
    flex-grow: 1;
  }
`;

export const TotalPrice = styled.span`
  text-align: right;
  margin-left: 20px;
  min-width: 65px;
  font-weight: 700;
`;

export const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;
