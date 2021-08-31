import { Link, useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Container, Aside, Image, Strong, Paragraph, Main, MainContent, Form, Input } from '../styles/auth';
import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [ newRoom, setNewRoom ] = useState(' ');

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

  return (
    <Container id="page-auth">
      <Aside>
        <Image src = {illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
        <Strong>Crie salas de Q&amp;A ao-vivo</Strong>
        <Paragraph>Tire as dúvidas da sua audiência em tempo real</Paragraph>
      </Aside>
      <Main>
        <MainContent className="main-content">
          <Image src={logoImg} alt="letmeask" />
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
