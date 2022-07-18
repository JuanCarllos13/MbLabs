import React, { useState } from "react";
import { InputForm } from "../../components/Forms/InputForm";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { Keyboard, Modal, TouchableWithoutFeedback, Alert, ScrollView } from 'react-native'
import { SelectCategory } from "../../components/Forms/CategorySelect";
import { CategorySelect } from '../CategorySelect'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TicketTypes
} from "./styles";
import { Button } from "../../components/Forms/Button";
import { InputCell } from "../../components/Forms/InputCell";
import { InputSmall } from "../../components/Forms/inputSmall";
import {useNavigation} from '@react-navigation/native'

export type FormData = {
  Organization: string;
  event: string,
  Date: string
  ticket: string
  amount: string;
  cell: string

}

type NavigationProps = {
  navigate:(screen:string) => void;
}

const schema = Yup.object().shape({
  Organization: Yup
    .string()
    .required('Nome da empresa é obrigatório'),
  event: Yup
    .string()
    .required('Nome do evento é obrigatório'),
  Date: Yup
    .number()
    .typeError("Informe um valor numérico")
    .positive("O valor não pode ser negativo")
    .required("Informe a data do evento"),
  amount: Yup
    .number()
    .typeError("Informe um valor numérico")
    .positive("O valor não pode ser negativo")
    .required("O valor é obrigatório"),
  ticket: Yup
    .number()
    .typeError("Informe um valor numérico")
    .positive("O valor não pode ser negativo")
    .required("O valor é obrigatório"),
  cell: Yup
    .string()
    .required("Informe um celular para Contato")
})

export function Register() {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const navigation = useNavigation<NavigationProps>()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  function handleCloseCategorySelectModal() {
    setCategoryModalOpen(false)
  }

  function handleOpenCategorySelectModal() {
    setCategoryModalOpen(true)
  }

  async function handleTicket(form: FormData) {

    if (category.key === 'category')
      return Alert.alert("Selecione a categoria")

    const newTicket = {
      id: String(uuid.v4()),
      Organization: form.Organization,
      event: form.event,
      cell: form.cell,
      date: form.Date,
      amount: form.amount,
      category: category.key,
      ticket: form.ticket
    }

    try {
      const dataKey = "@mblabs:ticket"
      const data = await AsyncStorage.getItem(dataKey)
      const currentData = data ? JSON.parse(data) : []

      const dataFormatted = [
        ...currentData,
        newTicket
      ]

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))

      reset()
      setCategory({
        key: 'category',
        name: 'Categoria',
      })
      navigation.navigate("Listagem")
    } catch (err) {
      console.log(err)
      Alert.alert("Não foi possível salvar")
    }

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <Form>
            <Fields>
              <InputForm
                control={control}
                name="Organization"
                placeholder="Nome da Empresa ou Universidade"
                autoCapitalize="sentences"
                autoCorrect={false}
                error={errors.Organization && errors.Organization.message}
              />

              <InputForm
                control={control}
                name="event"
                placeholder="Nome do Evento"
                autoCapitalize="sentences"
                autoCorrect={false}
                error={errors.event && errors.event.message}
              />



              <InputForm
                control={control}
                name="Date"
                placeholder="Data do Evento"
                keyboardType="numeric"
                error={errors.Date && errors.Date.message}
              />

              <TicketTypes>
                <InputSmall
                  control={control}
                  name="amount"
                  placeholder="Preço"
                  keyboardType="numeric"
                  error={errors.amount && errors.amount.message}
                />

                <InputSmall
                  control={control}
                  name="ticket"
                  placeholder="Quantidade"
                  keyboardType="numeric"
                  error={errors.ticket && errors.ticket.message}
                />
              </TicketTypes>

              <InputCell
                control={control}
                name="cell"
                error={errors.cell && errors.cell.message}
              />

              <SelectCategory
                title={category.name}
                onPress={handleOpenCategorySelectModal}
              />

            </Fields>
            <Button title="Enviar" onPress={handleSubmit(handleTicket)} />
          </Form>
        </ScrollView>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeCategorySelect={handleCloseCategorySelectModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}