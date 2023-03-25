import React from 'react'
import { Container, CardContainer } from '@/components/pages/root/Technologies/technologies.styles'
import { technologies } from '@/components/pages/root/Technologies/technologies'

const Technologies: React.FC = () => {
  return (
    <Container>
      {technologies.frameworks.map((technologie, index) => {
        return (
          <CardContainer color={technologie.color} key={index}>
            {technologie.icon}
            <span>{technologie.title}</span>
          </CardContainer>
        )
      })}
    </Container>
  )
}

export default Technologies
