import React from 'react'
import { Container, Content, ImageContainer, SubTitle, Title } from '@/components/pages/root/Hero/hero.styles'
import Picture from '@/assets/images/picture.jpg'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <Container>
      <Content>
        <SubTitle>Hello, I am</SubTitle>
        <Title>Max Atslega</Title>
      </Content>
      <ImageContainer>
        <Image src={Picture} alt={'Picture'} />
      </ImageContainer>
    </Container>
  )
}

export default Hero
