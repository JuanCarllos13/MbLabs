import React from "react";
import { InputForm } from "../../components/Forms/InputForm";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import {
  Container,
  Header,
  Title,
  Form,
  Fields
} from "./styles";
import { Button } from "../../components/Forms/Button";

export type FormData = {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),
  amount: Yup
    .number()
    .typeError("Informe um valor numérico")
    .positive("O valor não pode ser negativo")
    .required("O valor é obrigatório")
})

export function Register() {

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>

        <Fields>
          <InputForm
            control={control}
            name="name"
            placeholder="Nome da Empresa ou Universidade"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />

          <InputForm
            control={control}
            name="name"
            placeholder="Nome do Evento"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />

          <InputForm
            control={control}
            name="amount"
            placeholder="Data do Evento"
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
          />

          <InputForm
            control={control}
            name="amount"
            placeholder="Preço"
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
          />
        </Fields>
        <Button title="Enviar" onPress={() => { }} />

      </Form>
    </Container>
  )
}