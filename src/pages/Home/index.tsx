import React, { useCallback, useEffect, useState } from "react";
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
  TicketList,
  Button,
  TitleHeader
} from './styles'

import { useAuth } from '../../hooks/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export interface DataListProps extends TicketCardProps {
  id: string;
}


export function Home() {
  const { signOut, user } = useAuth()
  const [tickets, setTickets] = useState<DataListProps[]>([])
  const data: DataListProps[] = [
    {
      id: '1',
      Organization: "Palestra de Programação",
      amount: "R$ 12.000,00",
      category: 'Art',
      date: "12/12/2022",
      event: 'Canto',
      ticket: '1',
      cell: '(94) 64949-4949'
    },
  ]

  async function loadTicket() {
    const dataKey = "@mblabs:ticket"
    const response = await AsyncStorage.getItem(dataKey)
    const tickets = response ? JSON.parse(response) : []

    const ticketFormatted: DataListProps[] =
      tickets.map((item: DataListProps) => {
        console.log('ENTROU NO MAP')

        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });

        return {
          id: item.id,
          Organization: item.Organization,
          amount,
          event: item.event,
          ticket: item.ticket,
          cell: item.cell,
          category: item.category,
          date: item.date,
        }
      })
    
    console.log('ticketFormatted', ticketFormatted)
    setTickets(ticketFormatted)
  }

  useEffect(() => {
    loadTicket()
  }, [])

  useFocusEffect(useCallback(() => { // renderizar a lista automaticamente
    loadTicket()
  }, []))

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: user.photo }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>{user.name}</UserName>
            </User>
          </UserInfo>
          <Button onPress={signOut}>
            <Icon name={'power'} />
          </Button>
        </UserWrapper>

        <TitleHeader>
          MbLabsEvent
        </TitleHeader>

      </Header>



      <Ticket>
        <Title>Listagem</Title>

        <TicketList
          data={tickets}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TicketCart data={item} />}
        />

      </Ticket>
    </Container>
  )
}