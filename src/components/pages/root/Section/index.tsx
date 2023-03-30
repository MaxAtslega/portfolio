import React, { ReactNode } from 'react'
import { SectionContainer, Title } from '@/components/pages/root/Section/section.styles'
import { Container } from '@/components/shared/Container'

interface Props {
  children: ReactNode
  id: string
  title: string
}

const Section: React.FC<Props> = ({ children, id, title }: Props) => {
  return (
    <SectionContainer id={id}>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </SectionContainer>
  )
}

export default Section
