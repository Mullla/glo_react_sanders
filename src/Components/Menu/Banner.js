import styled from 'styled-components';
import bannerImg from './../../img/banner.jpeg';

export const Banner = styled.div`
  background-image: url(${bannerImg});
  background-size: cover;                     
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 310px;
`;
