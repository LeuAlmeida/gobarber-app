import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: 'https://api.adorable.io/avatar/50/leonardo.png' }}
        />

        <Info>
          <Name>Leonardo Almeida</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>
      <TouchableOpacity>
        <Icon name="event-busy" size={20} color="#F54C75" />
      </TouchableOpacity>
    </Container>
  );
}
