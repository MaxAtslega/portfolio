'use client'

import React from 'react'
import { HeroContainer, Content, ImageContainer, SubTitle, Title } from '@/components/pages/root/Hero/hero.styles'
import Picture from '@/assets/images/picture.jpg'
import Image from 'next/image'
import { Container } from '@/components/shared/Container'

const Hero: React.FC = () => {
  return (
    <Container>
      <HeroContainer>
        <Content>
          <SubTitle>Hello, I am</SubTitle>
          <Title>Max Atslega</Title>
        </Content>
        <ImageContainer>
          <Image src={Picture} alt={'Picture'} />
        </ImageContainer>
      </HeroContainer>
    </Container>
  )
}

export default Hero
