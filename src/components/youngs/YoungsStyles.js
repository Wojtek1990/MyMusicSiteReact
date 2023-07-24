import styled from 'styled-components';

export const YoungsContainer = styled.div`
  padding: 20px;
`;

export const YoungsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const YoungsImage = styled.img`
  width: 50%;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding:20px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
`;

export const YoungsDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #fff;
  text-align: justify;
  margin-left: 20px;
  

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const YoungsList = styled.ul`
  margin-top: 20px;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const YoungsListItem = styled.li`
  font-size: 18px;
  line-height: 1.6;
  color: #fff;
  list-style: disc;
  margin-bottom: 5px;
`;

export const YoungsListTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

export const YoungsTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
