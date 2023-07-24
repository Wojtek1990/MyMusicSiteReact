import styled from 'styled-components';

export const ContactContainer = styled.div`
  background: linear-gradient(180deg, #444, #222);
  color: #fff;
  padding: 30px 20px;
  text-align: center;
  min-height: 58vh;
  @media (min-width: 768px) {
    /* Dla szerokości ekranu większej niż 768px */
    padding: 50px 20px; /* Zwiększamy padding na większych ekranach */
  }
`;

export const ContactTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff; /* Zmiana na biały kolor czcionki */
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  opacity: 1;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #222, #111);
  color: #fff;
  padding: 20px;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FooterIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 10px;
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;
