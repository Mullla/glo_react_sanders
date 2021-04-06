import styled from 'styled-components';
import bannerImg from '../img/banner.jpeg';

const BannerImg = styled.div`
  background-image: ${ ({ img }) => `url(${bannerImg})`};
  background-size: cover;                     
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 310px;
`;

export const Banner = () => (
  <BannerImg />
);