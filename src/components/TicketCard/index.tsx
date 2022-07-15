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
  Date
} from "./styles";

interface CategoryProps {
  name: string,
  icon: string
}

export interface TicketCardProps {
  title: string,
  amount: string,
  category: CategoryProps,
  date: string
}

interface Props {
  data: TicketCardProps
}

export function TicketCart({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount>
        {data.amount}
      </Amount>

      <Footer>
        <Category>
        <Icon name={data.category.icon} />
        <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>

    </Container>
  )
}