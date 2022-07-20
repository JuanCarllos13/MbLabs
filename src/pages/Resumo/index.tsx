import React from 'react'
import { Button } from "../../components/Forms/Button";
import {
  Container,
  Header,
  Title,
  ContainerHeader,
  Content,
  DualInfo,
  Organization,
  Column,
  InfoTicket,
  Footer,
} from './styles'


export interface TicketCardProps {
  amount: string,
  category: String,
  date: string
  Organization: string
  cell: string
  ticket: string
  event: string
}


interface Props {
  data: TicketCardProps;
  closeModal: () => void
}



export function Resume({ data, closeModal }: Props) {
  return (
    <Container>
      <Header>
        <Title>Informações do ingresso</Title>
      </Header>

      <Content>
        <ContainerHeader>
          <Organization>Responsável do Evento</Organization>
          <InfoTicket>{data.Organization}</InfoTicket>
        </ContainerHeader>

        <DualInfo>

          <Column>
            <Organization>Tipo de evento</Organization>
            <InfoTicket>{data.event}</InfoTicket>
          </Column>

          <Column>
            <Organization>Valor do Evento</Organization>
            <InfoTicket>{data.amount}</InfoTicket>
          </Column>
        </DualInfo>


        <DualInfo>
          <Column>
            <Organization>Quantidade de ingresso</Organization>
            <InfoTicket>{data.ticket} disponivel.</InfoTicket>
          </Column>


          <Column>
            <Organization>Data do evento</Organization>
            <InfoTicket>{data.date}</InfoTicket>
          </Column>


        </DualInfo>


        <ContainerHeader>
          <Organization>Telefone para contato</Organization>
          <InfoTicket>{data.cell}</InfoTicket>
        </ContainerHeader>

      </Content>

      <Footer>
        <Button title="Voltar"
          onPress={closeModal}
        />
      </Footer>

    </Container>
  )
}