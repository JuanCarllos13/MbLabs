import React from "react";
import { Container, Error } from './styles'
import { Input } from '../Input'
import { TextInputProps } from "react-native";
import { Control, Controller, FieldError } from "react-hook-form";



interface Props extends TextInputProps {
  control: Control | any;
  name: string ;
  error: string | undefined ;
}

export function InputSmall({control, error, name, ...rest}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value as string}
            
            {...rest}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )

}