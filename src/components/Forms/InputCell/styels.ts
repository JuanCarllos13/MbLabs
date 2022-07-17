import { TextInputMask } from "react-native-masked-text";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
`

export const Error = styled.Text`
  color: ${({theme}) => theme.colors.attention};
  font-size: ${RFValue(10)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin: 5px 0;
`

export const InputMask = styled(TextInputMask)`
    width: 100%;
  padding: 16px 18px;

  font-size: ${RFValue(14)}px;
  font-family:  ${({theme}) => theme.fonts.regular};

  background-color: ${({theme}) => theme.colors.shape};
  color: ${({theme}) => theme.colors.text_dark};
  border-radius: 5px;

  margin-bottom: 18px;

`