import React from "react";
import { categories } from "../../utils/categories";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
  Header
} from "./styles";

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
  data: TicketCardProps
}

export function TicketCart({ data }: Props) {
  const category = categories.filter(
    item => item.key === data.category
  )[0]

  return (
    <Container>

      <Header>
      <Title>{data.Organization}</Title>
      </Header>
  
      <Title>{data.event}</Title>

      <Amount>
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>

    </Container>
  )
}