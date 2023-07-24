import styled from 'styled-components';

export const AboutUsContainer = styled.div`
  padding: 20px;
`;

export const AboutUsTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #fff; /* Ustawiamy kolor napisu na biały */
`;

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background: linear-gradient(180deg, #222, #333);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const SectionContent = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 22px;
  color: #fff;
  text-align: center; /* Wyśrodkowanie tytułu */
  display: flex; /* Dodajemy flex, aby skorzystać z flexbox */
  justify-content: center; /* Wyśrodkowanie wzdłuż osi poziomej (X) */
`;

export const SectionDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #fff;
  text-align: left; /* Ustawiamy tekst na lewo */
  padding-left: 20px; /* Dodajemy padding po lewej stronie */
  border-left: 2px solid #ef476f; /* Dodajemy linie po lewej stronie */
`;

export const SectionImage = styled.div`
  width: 50%;
  height: 350px;
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;
