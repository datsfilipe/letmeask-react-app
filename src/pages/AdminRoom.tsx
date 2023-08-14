import { useNavigate, useParams } from 'react-router-dom';

import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';

import { Button } from '../components/Button/index';
import { Question, FooterButton } from '../components/Question/index';
import { RoomCode } from '../components/RoomCode/index';
// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';

import { Header, Content, Main, RoomTitle, H1, Span, QuestionsList } from '../styles/room';
import { database } from '../services/firebase';
import { useTheme } from '../hooks/useTheme';
import light from '../styles/themes/theme_light';
import dark from '../styles/themes/theme_dark';
import { ButtonToggle } from '../components/ChangeThemeButton/index';

import logoLight from '../assets/images/logo-light.svg';
import logoDark from '../assets/images/logo-dark.svg';

import lightModeImg from '../assets/images/light-mode.svg';
import nightModeImg from '../assets/images/night-mode.svg'

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  // const { user } = useAuth();
  const navigate = useNavigate();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { theme, switchTheme, logo } = useTheme();

  const { title, questions } = useRoom(roomId);



  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    navigate('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (
      window.confirm('Você tem certeza de que deseja excluir essa pergunta?')
    ) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  async function handleThemeChange() {
    if (theme === light) {
      switchTheme(dark, logoDark, nightModeImg);
    } else if (theme === dark) {
      switchTheme(light, logoLight, lightModeImg);
    } else {
      throw new Error('Unknown theme / cannot provide logo');
    }
  }

  return (
    <div id="page-room">
      <Header>
        <ButtonToggle
          onClick={handleThemeChange}
        />
        <Content className="content">
          <img src={logo} alt="Letmeask" />
          <div>
            <RoomCode code={params.id} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </Content>
      </Header>
      <Main>
        <RoomTitle className="room-title">
          <H1>Sala {title}</H1>
          {questions.length > 0 && <Span>{questions.length} pergunta(s)</Span>}
        </RoomTitle>

        <QuestionsList>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <FooterButton
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img src={checkImg} alt="Marcar pergunta como respondida" />
                    </FooterButton>
                    <FooterButton
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </FooterButton>
                  </>
                )}
                <FooterButton
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </FooterButton>
              </Question>
            );
          })}
        </QuestionsList>
      </Main>
    </div>
  );
}
