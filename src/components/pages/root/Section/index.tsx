import React, { ReactNode } from 'react'
import { Container, Title } from '@/components/pages/root/Section/section.styles'

interface Props {
  children: ReactNode
  id: string
  title: string
}

const Section: React.FC<Props> = ({ children, id, title }: Props) => {
  return (
    <Container id={id}>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}

export default Section
