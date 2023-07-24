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
  LessonListTitle,
} from './JobsStyles.js';
import image1 from '../../images/background1.png';

// Importuj ikony Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Jobs = () => {
  return (
    <LessonsContainer>
      {/* Lekcja 1 */}
      <LessonSection>
        <div>
          <SectionTitle>Oprawa muzyczna eventów</SectionTitle>
          <SectionDescription>
            Oferujemy profesjonalną muzyczną oprawę wydarzeń takich jak śluby, pogrzeby, imieniny, niespodzianki weselne, zaręczyny itp. Przykładowy repertuar: 
            <LessonList>
              <LessonListTitle>Śluby, zaręczyny:</LessonListTitle>
              <LessonListItem>
                <FontAwesomeIcon icon={faMusic} style={{ marginRight: '5px' }} />
                "Ave Maria" (Bach, Gounod, Caccini)
              </LessonListItem>
              <LessonListItem>
                <FontAwesomeIcon icon={faMusic} style={{ marginRight: '5px' }} />
                "Wedding March" (Wagner, Mendelssohn")
              </LessonListItem>
              <LessonListItem>
                <FontAwesomeIcon icon={faMusic} style={{ marginRight: '5px' }} />
                "The Deum", "Marsz Księcia Danii"
              </LessonListItem>
              <LessonListItem>
                <FontAwesomeIcon icon={faMusic} style={{ marginRight: '5px' }} />
                "Can't stop falling in Love" (Presley)
              </LessonListItem>
              <LessonListItem>
                <FontAwesomeIcon icon={faMusic} style={{ marginRight: '5px' }} />
                "What a Wonderful World" (Armstrong)
              </LessonListItem>
              <LessonListItem>
                <FontAwesomeIcon icon={faMusic} style={{ marginRight: '5px' }} />
                "Halleluja"
              </LessonListItem>
              <LessonListItem>
                <FontAwesomeIcon icon={faMusic} style={{ marginRight: '5px' }} />
                I wiele, wiele innych
              </LessonListItem>
            </LessonList>
            <LessonList>
              <LessonListTitle>Pogrzeby:</LessonListTitle>
              <LessonListItem>
                <FontAwesomeIcon icon={faMusic} style={{ marginRight: '5px' }} />
                "Ave Maria" (Bach, Gounod, Caccini)
              </LessonListItem>
              <LessonListItem>
                <FontAwesomeIcon icon={faMusic} style={{ marginRight: '5px' }} />
                "Cisza"
              </LessonListItem>
              <LessonListItem>
                <FontAwesomeIcon icon={faMusic} style={{ marginRight: '5px' }} />
                "Amazing Grace"
              </LessonListItem>
              <LessonListItem>
                <FontAwesomeIcon icon={faMusic} style={{ marginRight: '5px' }} />
                Wszystkie pieśni sakralne/pogrzebowe
              </LessonListItem>
            </LessonList>
          </SectionDescription>
        </div>
        <LessonImage src={image1} alt="Lesson 1" />
      </LessonSection>

      {/* Dodaj kolejne sekcje lekcji tutaj */}
    </LessonsContainer>
  );
};

export default Jobs;
