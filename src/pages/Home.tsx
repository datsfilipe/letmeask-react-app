import { useNavigate } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Container, Aside, Image, Strong, Paragraph, Main, MainContent, Form, Input, AuthButton, ImageButton, Separator } from '../styles/auth';
import { Button } from '../components/Button/index';
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';
import { useTheme } from '../hooks/useTheme';

import light from '../styles/themes/theme_light';
import dark from '../styles/themes/theme_dark';
import { ButtonToggle } from '../components/ChangeThemeButton';

import logoLight from '../assets/images/logo-light.svg';
import logoDark from '../assets/images/logo-dark.svg';

import lightModeImg from '../assets/images/light-mode.svg';
import nightModeImg from '../assets/images/night-mode.svg'

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [ roomCode, setRoomCode ] = useState('');
  const { theme, switchTheme, logo } = useTheme();


  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }
    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exist');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room is already closed');
      return;
    }

    navigate(`/rooms/${roomCode}`);
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
    <Container id="page-auth">
      <Aside>
        <Image src = {illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
        <Strong>Crie salas de Q&amp;A ao-vivo</Strong>
        <Paragraph>Tire as dúvidas da sua audiência em tempo real</Paragraph>
      </Aside>
      <Main>
        <MainContent className="main-content">
          <ButtonToggle
            className="theme-button"
            onClick={handleThemeChange}
          />
            <Image src={logo} alt="letmeask" />
            <AuthButton onClick={handleCreateRoom} className="create-room">
              <ImageButton src={googleIconImg} alt="logo do Google" />
              Crie sua sala com Google
            </AuthButton>
            <Separator className="separator">ou entre em uma sala</Separator>
            <Form onSubmit={handleJoinRoom}>
              <Input
                type="text"
                placeholder="Digite o código da sala"
                onChange={event => setRoomCode(event.target.value)}
                value={roomCode}
              />
              <Button type="submit">
                Entrar na sala
              </Button>
            </Form>
            <footer>
              <ul>
                <li>
                  <a href="https://iconscout.com/icons/moon" target="_blank" rel="noreferrer">Moon Icon</a> by <a href="https://iconscout.com/contributors/oviyan">Amoghdesign</a>
                </li>
                |
                <li>
                  <a href="https://iconscout.com/icons/bright" target="_blank" rel="noreferrer">Bright Icon</a> by <a href="https://iconscout.com/contributors/chamedesign">Chamestudio</a>
                </li>
                |
                <li>
                  <a href="https://iconscout.com/icons/chat" target="_blank" rel="noreferrer">Chat Icon</a> by <a href="https://iconscout.com/contributors/irfansusanto98" target="_blank" rel="noreferrer">Barudak Lier</a>
                </li>
              </ul>
            </footer>
        </MainContent>
      </Main>
    </Container>
  )
};
