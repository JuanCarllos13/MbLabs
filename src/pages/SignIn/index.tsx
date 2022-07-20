import React, { useState } from "react";
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
  Image,
  ActivityIndicator,
} from "./styles";

import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google.svg'

import { SignInButton } from '../../components/SignInButton'
import { useAuth } from '../../hooks/auth'
import { Alert, Platform } from "react-native";

export function SignIn() {
  const [isLoading, setIsloading] = useState(false)
  const { signInGoogle, signInWithApple } = useAuth()

  async function handleSignInGoogle() {
    try {
      setIsloading(true)
      return await signInGoogle()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Google')

    }
  }

  async function handleSignInApple() {
    try {
      setIsloading(true)
      return await signInWithApple()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Apple')
      setIsloading(false)
    }
  }


  return (
    <Container>
      <Header>
        <TitleWrapper>

          <Image
            source={require('../../assets/MB.png')}
          />

          <Title>
            MbLabs {'\n'}
            Gestão de eventos

          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInGoogle}
          />

          {
            Platform.OS === 'ios' && 
            <SignInButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handleSignInApple}
            />
          }
        </FooterWrapper>

        {isLoading && <ActivityIndicator />}

      </Footer>

    </Container>
  )
}