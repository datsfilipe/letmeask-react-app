import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Container, Aside, Image, Strong, Paragraph, Main, MainContent, Form, Input, AuthButton, ImageButton, Separator } from '../styles/auth';
import { Button } from '../components/Button/index';
import { useAuth } from '../hooks/useAuth';
import { useLogo } from '../hooks/useLogo';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';
import { useTheme } from 'styled-components';

import light from '../styles/themes/theme_light';
import dark from '../styles/themes/theme_dark';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [ roomCode, setRoomCode ] = useState('');
  const { theme, switchTheme } = useTheme();
  const { logo, setLogo, logoDark, logoLight } = useLogo();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
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

    history.push(`/rooms/${roomCode}`);
  }

  async function handleThemeChange() {
    if (theme === light) {
      switchTheme(dark);
      setLogo(logoDark);
    } else if (theme === dark) {
      switchTheme(light);
      setLogo(logoLight);
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
          <Button onClick={handleThemeChange}>Change theme</Button>
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
        </MainContent>
      </Main>
    </Container>
  )
};
