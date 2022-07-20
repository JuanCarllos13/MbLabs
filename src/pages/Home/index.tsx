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
import { dateMask } from "../../utils/Mask";
import { TouchableOpacity } from "react-native";

const Intl = require('react-native-intl');

export interface DataListProps extends TicketCardProps {
  id: string;
}


export function Home() {
  const { signOut, user } = useAuth()
  const [tickets, setTickets] = useState<DataListProps[]>([])


  async function loadTicket() {
    const dataKey = "@mblabs:ticket"
    const response = await AsyncStorage.getItem(dataKey)
    const tickets = response ? JSON.parse(response) : []

    const ticketFormatted: DataListProps[] =
      tickets.map((item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });

        const date = dateMask(item.date)

        return {
          id: item.id,
          Organization: item.Organization,
          amount,
          event: item.event,
          ticket: item.ticket,
          cell: item.cell,
          category: item.category,
          date,
        }
      })

    setTickets(ticketFormatted)
  }

  function teste(index: any) {
    console.log('Entrou no aqui', index)
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
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => teste(item)}>
              <TicketCart data={item} />
            </TouchableOpacity>
          )}
        />

      </Ticket>
    </Container>
  )
}
