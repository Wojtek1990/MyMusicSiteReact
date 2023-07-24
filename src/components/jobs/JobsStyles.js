import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';



export const LessonsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const LessonsTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 30px;
`;

export const LessonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
`;

export const LessonImage = styled.img`
  width: 50%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    max-height: none;
  }
`;

export const LessonListTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;

export const LessonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 500px;
`;

export const LessonListItem = styled.li`
  font-size: 16px;
  color: #fff;
  margin-bottom: 5px;
  position: relative;
  padding-left: 30px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    display: inline-block;
  }
`;


// Dodaj inne style potrzebne do komponentu Lessons
