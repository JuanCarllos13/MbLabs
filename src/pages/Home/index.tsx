import React from "react";
import { Text, View } from "react-native";
import { TicketCart, TicketCardProps } from "../../components/TicketCard";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  Ticket,
  Title,
  TicketList
} from './styles'

export interface DataListProps extends TicketCardProps {
  id: string;
}

export function Home() {
  const data: DataListProps[] = [
    {
    id: '1', 
    title: "Palestra de Programação",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: "dollar-sign"
    },
    date: "12/12/2022"
  },
  {
    id: '2', 
    title: "Show",
    amount: "R$ 13.000,00",
    category: {
      name: "Alimentação",
      icon: "dollar-sign"
    },
    date: "02/07/2022"
  }
]
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/86435195?v=4' }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Juan</UserName>
            </User>
          </UserInfo>
          <Icon name={'power'} />
        </UserWrapper>
      </Header>


      <Ticket>
        <Title>Listagem</Title>

        <TicketList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TicketCart data={item}/>}
        />

      </Ticket>
    </Container>
  )
}