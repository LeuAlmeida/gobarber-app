import React from 'react';

import Background from '~/components/Background';

import { Container, Title } from './styles';

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
      </Container>
    </Background>
  );
}
