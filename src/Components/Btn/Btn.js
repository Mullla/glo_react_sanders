import styled from 'styled-components';

export const Btn = styled.button`
  padding: 5px 10px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  color: inherit;
  position: relative;
  transition: all 0.3s ease-in-out;
  margin-bottom: 25px;
  margin-top: auto;
  align-self: center;
  ::before {
    content: '';
    border: 2px solid #c838f4;
    top: -2px;
    left: -2px;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  ::after {
    content: '';
    border: 2px solid #38c8f4;
    bottom: -2px;
    right: -2px;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  :hover {
    transform: scale(1.1);
    ::before,
    ::after {
      opacity: 0.4;
    }
  }
`;
