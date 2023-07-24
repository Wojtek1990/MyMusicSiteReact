import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ef476f;
  }
`;

export const FooterIconLink = styled.a`
  font-size: 20px;
  margin: 0 8px;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ef476f;
  }
`;
