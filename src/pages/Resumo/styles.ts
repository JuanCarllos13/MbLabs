import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TextInputMask } from 'react-native-masked-text'


export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  
  width: 100%;
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family:  ${({ theme }) => theme.fonts.regular};
  font-size:  ${RFValue(18)}px;
`


export const ContainerHeader = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;
  padding-top: 20px;
`

export const DualInfo = styled.View`
  width: 100%;
  margin: 30px 0;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Column = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const Content = styled.View``

export const Organization = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family:  ${({ theme }) => theme.fonts.bold};
  font-size:  ${RFValue(13)}px;

`

export const InfoTicket = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family:  ${({ theme }) => theme.fonts.regular};
  font-size:  ${RFValue(13)}px;
`

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
  flex: 1;
  justify-content: flex-end;
`