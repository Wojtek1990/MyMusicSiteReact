import React from 'react';
import {
  LessonsContainer,
  LessonsTitle,
  LessonSection,
  SectionTitle,
  SectionDescription,
  LessonImage,
  LessonList,
  LessonListItem,
} from './LessonsStyles';
import image1 from '../../images/background1.png';
// Importuj pozostałe obrazy dla innych lekcji

const Lessons = () => {
  return (
    <LessonsContainer>

      {/* Lekcja 1 */}
      <LessonSection>
        <LessonImage src={image1} alt="Lesson 1" />
        <div>
          <SectionTitle>Prywatne lekcje gry na instrumentach</SectionTitle>
          <SectionDescription>
            Oferujemy lekcje gry na skrzypcach, trąbce i fortepianie. Zapraszamy dzieci od 7 roku życia oraz młodzież i dorosłych w każdym wieku do gry na skrzypcach, trąbce i fortepianie. Dla najmłodszych przewidziane są lekcje 30-minutowe, starsze dzieci młodzież i dorośli mogą mieć zajęcia 45-minutowe, lub podwójne lekcje dla najwytrzymalszych. Dzieci do lat 7 zapraszamy na zajęcia umuzykalniające. Będziemy: 
            <LessonList>
              <LessonListItem>uczyli się podstaw techniki gry,</LessonListItem>
              <LessonListItem>uczyli się podstaw rytmiki,</LessonListItem>

              <LessonListItem>grali utwory różnych gatunków muzycznych,</LessonListItem>
              <LessonListItem>czytali nuty,</LessonListItem>
              <LessonListItem>uczyli się teorii muzyki (dla chętnych),</LessonListItem>
              <LessonListItem>rozwijali słuch muzyczny,</LessonListItem>
              <LessonListItem>uczyli się radzić sobie z tremą.</LessonListItem>

            </LessonList>
          </SectionDescription>
        </div>
      </LessonSection>

     

    </LessonsContainer>
  );
};

export default Lessons;
