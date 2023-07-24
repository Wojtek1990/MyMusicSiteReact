import styled from 'styled-components';

export const LessonsContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const LessonsTitle = styled.h2`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const LessonSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const LessonImage = styled.img`
  width: 50%;
  border-radius: 8px;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const SectionTitle = styled.h3`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const SectionDescription = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 1.6;
  text-align: justify;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const LessonList = styled.ul`
  color: #fff;
  font-size: 16px;
  list-style: none;
  padding-left: 20px;
  text-align: left;
`;

export const LessonListItem = styled.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 8px;

  &::before {
    content: '\\1F3B5'; /* Dodajemy emoji nutki */
    position: absolute;
    left: 0;
    font-size: 18px;
  }
`;
