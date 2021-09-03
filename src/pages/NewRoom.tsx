import { Link, useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import illustrationImg from '../assets/images/illustration.svg';

import { Container, Aside, Image, Strong, Paragraph, Main, MainContent, Form, Input } from '../styles/auth';
import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { useLogo } from '../hooks/useLogo';
import light from '../styles/themes/theme_light';
import dark from '../styles/themes/theme_dark';
import { ButtonToggle } from '../components/ChangeThemeButton';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [ newRoom, setNewRoom ] = useState(' ');
  const { theme, switchTheme } = useTheme();
  const { logo, setLogo, logoDark, logoLight } = useLogo();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    };
    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  };

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
        <ButtonToggle
          onClick={handleThemeChange}
        />
          <Image src={logo} alt="letmeask" />
          <h2>Criar uma nova sala</h2>
          <Form onSubmit = {handleCreateRoom}>
            <Input
            type="text"
            placeholder="Nome da sala"
            onChange = {event => setNewRoom(event.target.value)}
            value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </Form>
          <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link> </p>
        </MainContent>
      </Main>
    </Container>
  )
};
