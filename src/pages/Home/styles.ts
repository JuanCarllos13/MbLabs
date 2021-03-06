import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import {DataListProps} from '.'
import {FlatList, FlatListProps} from 'react-native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color:  ${({ theme }) => theme.colors.primary};

  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`


export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;

`
export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`

export const TitleHeader = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color:  ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;

  text-align: center;

  margin: 45px;
`


export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`

export const User = styled.View`
  margin-left: 17px;
`


export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
`
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`

export const Ticket = styled.View`
  flex: 1;
  padding:  0 24px;
  margin-top: ${RFPercentage(5)}px;
` 

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 16px;
`
export const TicketList = styled(
  FlatList as new(props: FlatListProps<DataListProps>) => FlatList<DataListProps>
  ).attrs({
  showsVerticalScrollIndicator: false
})``


export const Button = styled.TouchableOpacity``