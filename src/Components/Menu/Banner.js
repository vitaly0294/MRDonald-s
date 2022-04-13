import React from "react";
import styled from 'styled-components';
import banner from '../../image/banner.png';

const BannerImg = styled.div`
  width: 100%;
  height 210px;
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
`;

export const Banner = () => (
  <BannerImg>

  </BannerImg>
)