import React from "react";
import { Container, Error, InputMask } from './styels'
import { Input } from '../Input'
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";


interface Props{
  control: Control | any;
  name: string;
  error: string | undefined;
}

export function InputCell({ control, error, name, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputMask
          type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
            value={value as string}
            onChangeText={onChange}
            keyboardType="numeric"
            placeholder="Celular"
            {...rest}
          />

        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )

}


