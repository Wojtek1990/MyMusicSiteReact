import styled from 'styled-components';

import headerBackgroundImage from './background1.png'; // Załóżmy, że to jest ścieżka do pliku z obrazem

export const HeaderContainer = styled.div`
  position: relative;
  color: black;
  height: 60px;
  background-color: #fff;
  padding: 30px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  border-bottom: 2px solid #444;
  // background-image: url(${headerBackgroundImage}); /* Dodajemy zdjęcie w tle */
  background-size: cover;
  background-position: center;


  @media (max-width: 768px) {
    align-items: center;
    padding: 40px 10px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0., 0.9); /* Dodajemy efekt cienia */

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
